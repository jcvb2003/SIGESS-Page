import {mkdir, writeFile} from "node:fs/promises";
import {resolve} from "node:path";

const sampleRate = 48000;
const outputDir = resolve("public", "sfx");
let seed = 0x51a7e55;

const random = () => {
  seed ^= seed << 13;
  seed ^= seed >>> 17;
  seed ^= seed << 5;
  return ((seed >>> 0) / 0xffffffff) * 2 - 1;
};

const clamp = (value) => Math.max(-1, Math.min(1, value));
const fade = (t, attack, release) =>
  Math.min(1, t / attack) * Math.min(1, (1 - t) / release);

const makeWave = (seconds, generator) => {
  const count = Math.ceil(seconds * sampleRate);
  const pcm = Buffer.alloc(count * 2);
  for (let index = 0; index < count; index++) {
    const t = index / sampleRate;
    const progress = index / (count - 1);
    pcm.writeInt16LE(Math.round(clamp(generator(t, progress, index)) * 32767), index * 2);
  }

  const wav = Buffer.alloc(44 + pcm.length);
  wav.write("RIFF", 0);
  wav.writeUInt32LE(36 + pcm.length, 4);
  wav.write("WAVE", 8);
  wav.write("fmt ", 12);
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(sampleRate, 24);
  wav.writeUInt32LE(sampleRate * 2, 28);
  wav.writeUInt16LE(2, 32);
  wav.writeUInt16LE(16, 34);
  wav.write("data", 36);
  wav.writeUInt32LE(pcm.length, 40);
  pcm.copy(wav, 44);
  return wav;
};

let filteredNoise = 0;
const effects = {
  "soft-rise.wav": makeWave(0.9, (t, p) => {
    filteredNoise = filteredNoise * 0.91 + random() * 0.09;
    const frequency = 180 + p * 620;
    return fade(p, 0.2, 0.3) * (filteredNoise * 0.42 + Math.sin(2 * Math.PI * frequency * t) * 0.11);
  }),
  "paper.wav": makeWave(0.46, (_t, p) => {
    filteredNoise = filteredNoise * 0.72 + random() * 0.28;
    const fold = Math.sin(p * Math.PI * 9) * Math.exp(-p * 6);
    return fade(p, 0.04, 0.28) * (filteredNoise * 0.48 + fold * 0.08);
  }),
  "ui-click.wav": makeWave(0.16, (t, p) => {
    const body = Math.sin(2 * Math.PI * 1180 * t) * Math.exp(-p * 13);
    const transient = random() * Math.exp(-p * 32);
    return body * 0.34 + transient * 0.18;
  }),
  "process-pulse.wav": makeWave(0.72, (t, p) => {
    const frequency = 125 - p * 42;
    const body = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-p * 4.2);
    const upper = Math.sin(2 * Math.PI * 330 * t) * Math.exp(-p * 10);
    return (body * 0.52 + upper * 0.08) * fade(p, 0.05, 0.45);
  }),
  "confirm.wav": makeWave(0.58, (t, p) => {
    const first = Math.sin(2 * Math.PI * 620 * t) * Math.exp(-t * 7);
    const delayed = t > 0.12 ? Math.sin(2 * Math.PI * 930 * (t - 0.12)) * Math.exp(-(t - 0.12) * 8) : 0;
    return (first * 0.28 + delayed * 0.32) * fade(p, 0.035, 0.28);
  }),
  "brand-tone.wav": makeWave(1.25, (t, p) => {
    const chord = [392, 523.25, 659.25]
      .map((frequency, index) => Math.sin(2 * Math.PI * frequency * t + index * 0.18))
      .reduce((sum, value) => sum + value, 0) / 3;
    return chord * 0.34 * fade(p, 0.12, 0.55) * Math.exp(-p * 1.1);
  }),
};

await mkdir(outputDir, {recursive: true});
await Promise.all(
  Object.entries(effects).map(([name, wav]) => writeFile(resolve(outputDir, name), wav)),
);

console.log(`Criados ${Object.keys(effects).length} efeitos em public/sfx.`);
