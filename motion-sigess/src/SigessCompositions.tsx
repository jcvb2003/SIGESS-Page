import {Composition, Folder} from "remotion";
import {SigessVideo} from "./SigessVideo";
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
import {FPS, sceneDurations, TOTAL_FRAMES} from "./story";

export const SigessCompositions: React.FC = () => (
  <>
    <Folder name="SIGESS-cenas">
      <Composition id="01-Abertura" component={PreludeScene} durationInFrames={sceneDurations.prelude} fps={FPS} width={1920} height={1080} />
      <Composition id="02-Processos-manuais" component={ManualScene} durationInFrames={sceneDurations.manual} fps={FPS} width={1920} height={1080} />
      <Composition id="03-Publico" component={AudienceScene} durationInFrames={sceneDurations.audience} fps={FPS} width={1920} height={1080} />
      <Composition id="04-Apresentacao" component={IntroScene} durationInFrames={sceneDurations.intro} fps={FPS} width={1920} height={1080} />
      <Composition id="05-Sistema-web" component={WebScene} durationInFrames={sceneDurations.web} fps={FPS} width={1920} height={1080} />
      <Composition id="06-Automacao" component={AutomationScene} durationInFrames={sceneDurations.automation} fps={FPS} width={1920} height={1080} />
      <Composition id="07-GovBR" component={GovScene} durationInFrames={sceneDurations.gov} fps={FPS} width={1920} height={1080} />
      <Composition id="08-REAP" component={ReapScene} durationInFrames={sceneDurations.reap} fps={FPS} width={1920} height={1080} />
      <Composition id="09-Seguro-Defeso" component={DefesoScene} durationInFrames={sceneDurations.defeso} fps={FPS} width={1920} height={1080} />
      <Composition id="10-eSocial" component={EsocialScene} durationInFrames={sceneDurations.esocial} fps={FPS} width={1920} height={1080} />
      <Composition id="11-Atendimento" component={HumanScene} durationInFrames={sceneDurations.human} fps={FPS} width={1920} height={1080} />
      <Composition id="12-Assinatura" component={EndScene} durationInFrames={sceneDurations.end} fps={FPS} width={1920} height={1080} />
    </Folder>
    <Composition
      id="SIGESS-Institucional-80s"
      component={SigessVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{voiceoverFile: "locucao-sigess.wav"}}
    />
  </>
);
