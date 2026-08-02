import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {BrandLockup} from "../components/Brand";
import {OrganicWave, SceneCanvas} from "../components/MotionPrimitives";
import {palette} from "../theme";

export const PreludeScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 120, top: 100}}>
        <BrandLockup compact animate />
      </div>
      <Interactive.Div
        name="Opening statement"
        style={{
          position: "absolute",
          left: 120,
          bottom: 250,
          width: 1180,
          color: palette.ink,
          fontSize: 104,
          lineHeight: 1.02,
          letterSpacing: -5,
          fontWeight: 850,
          opacity: interpolate(frame, [5, 25], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [5, 30], ["0px 54px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Sua entidade ainda depende de <span style={{color: palette.emerald}}>processos manuais?</span>
      </Interactive.Div>
      <OrganicWave />
    </SceneCanvas>
  );
};
