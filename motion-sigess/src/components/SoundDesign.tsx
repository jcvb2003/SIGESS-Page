import {Audio} from "@remotion/media";
import {Sequence, staticFile} from "remotion";
import {FPS} from "../story";

type Cue = {
  at: number;
  file: string;
  volume: number;
};

const seconds = (value: number) => Math.round(value * FPS);

const cues: Cue[] = [
  {at: 0.2, file: "soft-rise.wav", volume: 0.12},
  {at: 4.05, file: "paper.wav", volume: 0.11},
  {at: 14.0, file: "soft-rise.wav", volume: 0.09},
  {at: 20.05, file: "confirm.wav", volume: 0.09},
  {at: 26.25, file: "ui-click.wav", volume: 0.12},
  {at: 36.05, file: "process-pulse.wav", volume: 0.18},
  {at: 40.25, file: "ui-click.wav", volume: 0.1},
  {at: 41.0, file: "ui-click.wav", volume: 0.08},
  {at: 41.75, file: "ui-click.wav", volume: 0.07},
  {at: 50.05, file: "paper.wav", volume: 0.12},
  {at: 52.3, file: "confirm.wav", volume: 0.09},
  {at: 57.15, file: "process-pulse.wav", volume: 0.11},
  {at: 59.4, file: "confirm.wav", volume: 0.09},
  {at: 68.05, file: "paper.wav", volume: 0.1},
  {at: 70.25, file: "confirm.wav", volume: 0.08},
  {at: 74.1, file: "ui-click.wav", volume: 0.07},
  {at: 78.05, file: "brand-tone.wav", volume: 0.13},
];

export const SoundDesign: React.FC = () => (
  <>
    {cues.map((cue, index) => (
      <Sequence key={`${cue.file}-${cue.at}-${index}`} from={seconds(cue.at)} layout="none">
        <Audio src={staticFile(`sfx/${cue.file}`)} volume={() => cue.volume} />
      </Sequence>
    ))}
  </>
);
