import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {OrganicWave, SceneCanvas} from "../components/MotionPrimitives";
import {palette} from "../theme";

const labels = ["ASSOCIAÇÕES", "SINDICATOS", "COLÔNIAS"];

export const AudienceScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas dark>
      <div style={{position: "absolute", left: 120, top: 100, color: palette.mintStrong, fontSize: 28, fontWeight: 800, letterSpacing: 5}}>
        FEITO PARA QUEM CONHECE ESSA ROTINA
      </div>
      <div style={{position: "absolute", left: 120, top: 230, display: "flex", flexDirection: "column", gap: 18}}>
        {labels.map((label, index) => (
          <Interactive.Div
            name={label}
            key={label}
            style={{
              color: index === 1 ? palette.mintStrong : palette.white,
              fontSize: 118,
              lineHeight: 0.98,
              letterSpacing: -5,
              fontWeight: 850,
              opacity: interpolate(frame, [index * 15, index * 15 + 16], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [index * 15, index * 15 + 24], ["-80px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            {label}
          </Interactive.Div>
        ))}
      </div>
      <OrganicWave position="bottom" dark delay={18} />
    </SceneCanvas>
  );
};
