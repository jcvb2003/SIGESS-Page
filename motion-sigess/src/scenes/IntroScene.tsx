import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {BrandLockup} from "../components/Brand";
import {SceneCanvas} from "../components/MotionPrimitives";
import {palette} from "../theme";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 120, top: 120}}><BrandLockup animate /></div>
      <Interactive.Div
        name="Product promise"
        style={{
          position: "absolute",
          left: 120,
          top: 420,
          width: 1550,
          color: palette.ink,
          fontSize: 88,
          lineHeight: 1.06,
          letterSpacing: -4,
          fontWeight: 820,
          opacity: interpolate(frame, [24, 44], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [24, 50], ["0px 44px", "0px 0px"], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Gestão e automação para <span style={{color: palette.emerald}}>entidades de pesca.</span>
      </Interactive.Div>
      <div style={{position: "absolute", left: 120, bottom: 120, display: "flex", gap: 20}}>
        {["SISTEMA WEB", "ROBÔ SIGESS"].map((label, index) => (
          <div key={label} style={{padding: "22px 36px", borderRadius: 99, background: index ? palette.emerald : palette.ink, color: palette.white, fontSize: 25, fontWeight: 800, letterSpacing: 2}}>{label}</div>
        ))}
      </div>
    </SceneCanvas>
  );
};
