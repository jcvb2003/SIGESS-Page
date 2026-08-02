import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {SceneCanvas} from "../components/MotionPrimitives";
import {palette} from "../theme";

export const AutomationScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas dark>
      <div style={{position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 120px"}}>
        {[0, 1, 2].map((row) => (
          <Interactive.Div
            key={row}
            name={`Repetitive line ${row + 1}`}
            style={{
              color: row === 1 ? palette.white : "rgba(255,255,255,.18)",
              fontSize: 96,
              lineHeight: 1.03,
              letterSpacing: -4,
              fontWeight: 850,
              translate: interpolate(frame, [0, 48], [row % 2 ? "160px 0px" : "-160px 0px", "0px 0px"], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            TAREFAS REPETITIVAS
          </Interactive.Div>
        ))}
      </div>
      <div
        style={{
          position: "absolute", left: -200, top: 0, width: 2320, height: 1080, background: palette.mintStrong,
          clipPath: "polygon(0 48%, 100% 30%, 100% 57%, 0 74%)",
          translate: interpolate(frame, [42, 86], ["-2200px 0px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.65, 0, 0.35, 1)}),
        }}
      />
      <Interactive.Div name="Automation result" style={{position: "absolute", left: 120, top: 430, fontSize: 132, fontWeight: 900, letterSpacing: -6, color: palette.emeraldDark, opacity: interpolate(frame, [67, 87], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>
        AUTOMAÇÃO.
      </Interactive.Div>
    </SceneCanvas>
  );
};
