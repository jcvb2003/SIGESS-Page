import {BrandLockup} from "../components/Brand";
import {SceneCanvas} from "../components/MotionPrimitives";
import {palette} from "../theme";

export const EndScene: React.FC = () => (
  <SceneCanvas dark>
    <div style={{position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <BrandLockup light animate />
      <div style={{marginTop: 50, fontSize: 37, color: palette.mintStrong, fontWeight: 650, letterSpacing: .2}}>Gestão e automação para entidades de pesca.</div>
    </div>
  </SceneCanvas>
);
