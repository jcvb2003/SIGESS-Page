import {Audio} from "@remotion/media";
import {TransitionSeries} from "@remotion/transitions";
import {Sequence, staticFile} from "remotion";
import {BrandSweep} from "./components/MotionPrimitives";
import {SoundDesign} from "./components/SoundDesign";
import {AutomationScene} from "./scenes/AutomationScene";
import {AudienceScene} from "./scenes/AudienceScene";
import {DefesoScene} from "./scenes/DefesoScene";
import {EndScene} from "./scenes/EndScene";
import {EsocialScene} from "./scenes/EsocialScene";
import {GovScene} from "./scenes/GovScene";
import {HumanScene} from "./scenes/HumanScene";
import {IntroScene} from "./scenes/IntroScene";
import {ManualScene} from "./scenes/ManualScene";
import {PreludeScene} from "./scenes/PreludeScene";
import {ReapScene} from "./scenes/ReapScene";
import {WebScene} from "./scenes/WebScene";
import {FPS, sceneDurations} from "./story";

export type SigessVideoProps = {
  voiceoverFile: string;
};

const voiceoverPlaybackRate = 1.055;

const scenes = [
  ["Prelude", sceneDurations.prelude, PreludeScene],
  ["Processos manuais", sceneDurations.manual, ManualScene],
  ["Público", sceneDurations.audience, AudienceScene],
  ["Apresentação SIGESS", sceneDurations.intro, IntroScene],
  ["Sistema web", sceneDurations.web, WebScene],
  ["Automação", sceneDurations.automation, AutomationScene],
  ["GOV", sceneDurations.gov, GovScene],
  ["REAP", sceneDurations.reap, ReapScene],
  ["Seguro Defeso", sceneDurations.defeso, DefesoScene],
  ["eSocial", sceneDurations.esocial, EsocialScene],
  ["Atendimento", sceneDurations.human, HumanScene],
  ["Assinatura", sceneDurations.end, EndScene],
] as const;

export const SigessVideo: React.FC<SigessVideoProps> = ({voiceoverFile}) => {
  return (
    <>
      <TransitionSeries>
        {scenes.map(([name, durationInFrames, Scene], index) => (
          <TransitionSeries.Sequence key={name} name={name} durationInFrames={durationInFrames}>
            <Scene />
            {index < scenes.length - 1 ? null : null}
          </TransitionSeries.Sequence>
        ))}
      </TransitionSeries>
      {voiceoverFile ? (
        <Sequence from={1 * FPS} layout="none">
          <Audio
            src={staticFile(voiceoverFile)}
            playbackRate={voiceoverPlaybackRate}
          />
        </Sequence>
      ) : null}
      <SoundDesign />
    </>
  );
};

export const SceneTransition: React.FC = () => <BrandSweep />;
