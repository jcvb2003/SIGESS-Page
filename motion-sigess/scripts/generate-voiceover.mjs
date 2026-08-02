import {mkdir, readFile, writeFile} from "node:fs/promises";
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const storyPath = resolve(projectRoot, "src", "story.ts");
const outputPath = resolve(projectRoot, "public", "locucao-sigess.wav");
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Defina GEMINI_API_KEY somente no ambiente antes de gerar a locução.");
}

const storySource = await readFile(storyPath, "utf8");
const lines = [...storySource.matchAll(/text:\s*("(?:[^"\\]|\\.)*")/g)].map(
  (match) => JSON.parse(match[1]),
);

if (lines.length === 0) {
  throw new Error("Nenhuma fala foi encontrada em src/story.ts.");
}

const transcript = lines.join("\n\n");
const prompt = `# AUDIO PROFILE
Locutor brasileiro adulto, maduro e confiável. Voz humana, clara e próxima.

# SCENE
Locução de um filme institucional premium para dirigentes e equipes de associações, sindicatos e colônias de pescadores.

# DIRECTOR'S NOTES
- Português brasileiro nativo, sem regionalismo marcado.
- Interpretação contemporânea, sóbria e natural. Evite voz de rádio, solenidade excessiva, impostação grave e entusiasmo publicitário.
- Fale como uma pessoa experiente apresentando uma solução em uma reunião: segura, próxima e objetiva.
- Ritmo fluido e articulado, com duração aproximada de 78 segundos.
- Faça pausas breves e naturais entre os parágrafos, sem silêncio excessivo.
- Dê ênfase discreta a SIGESS, GOV, REAP, Seguro Defeso e eSocial.
- Pronuncie SIGESS como "si-géss", GOV como "góvi", REAP como "reápi" e eSocial como "ê social".
- Recite somente o texto abaixo. Não leia títulos, instruções ou marcações. Não adicione nem remova palavras.

# TRANSCRIPT
${transcript}`;

console.log(`Solicitando locução ao Gemini (${lines.length} trechos)...`);

const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/interactions",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      model: "gemini-3.1-flash-tts-preview",
      input: prompt,
      response_format: {type: "audio"},
      generation_config: {
        speech_config: [{voice: "Algieba"}],
      },
    }),
  },
);

if (!response.ok) {
  const details = await response.text();
  throw new Error(`Gemini TTS respondeu ${response.status}: ${details}`);
}

const result = await response.json();
console.log("Áudio recebido; preparando o arquivo WAV...");
const audioPart = result?.steps
  ?.flatMap((step) => step.content ?? [])
  .find((part) => part.type === "audio" && part.data);
const encodedAudio = result?.output_audio?.data ?? audioPart?.data;

if (!encodedAudio) {
  throw new Error("A resposta do Gemini não contém uma faixa de áudio.");
}

const pcm = Buffer.from(encodedAudio, "base64");
const sampleRate = audioPart?.sample_rate ?? 24000;
const channels = audioPart?.channels ?? 1;
const bitsPerSample = 16;
const wav = Buffer.alloc(44 + pcm.length);

wav.write("RIFF", 0);
wav.writeUInt32LE(36 + pcm.length, 4);
wav.write("WAVE", 8);
wav.write("fmt ", 12);
wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20);
wav.writeUInt16LE(channels, 22);
wav.writeUInt32LE(sampleRate, 24);
wav.writeUInt32LE((sampleRate * channels * bitsPerSample) / 8, 28);
wav.writeUInt16LE((channels * bitsPerSample) / 8, 32);
wav.writeUInt16LE(bitsPerSample, 34);
wav.write("data", 36);
wav.writeUInt32LE(pcm.length, 40);
pcm.copy(wav, 44);

await mkdir(dirname(outputPath), {recursive: true});
await writeFile(outputPath, wav);

const seconds = pcm.length / (sampleRate * channels * (bitsPerSample / 8));
console.log(`Locução criada: public/locucao-sigess.wav (${seconds.toFixed(2)}s)`);
