import {Easing, Img, Interactive, interpolate, useCurrentFrame} from "remotion";
import sigessLogo from "../../../public/logo.svg";
import {palette} from "../theme";

export const LogoMark: React.FC<{size?: number; light?: boolean}> = ({
  size = 108,
  light = false,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Img
        src={sigessLogo}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: light ? "brightness(0) invert(1)" : "none",
        }}
      />
    </div>
  );
};

export const BrandLockup: React.FC<{
  light?: boolean;
  compact?: boolean;
  animate?: boolean;
}> = ({light = false, compact = false, animate = false}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{display: "flex", alignItems: "center", gap: compact ? 22 : 34}}>
      <Interactive.Div
        name="SIGESS symbol"
        style={{
          opacity: animate
            ? interpolate(frame, [0, 18], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              })
            : 1,
          scale: animate
            ? interpolate(frame, [0, 24], [0.7, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({damping: 18}),
                output: "perceptual-scale",
              })
            : 1,
        }}
      >
        <LogoMark size={compact ? 78 : 126} light={light} />
      </Interactive.Div>
      <Interactive.Div
        name="SIGESS wordmark"
        style={{
          color: light ? palette.white : palette.ink,
          fontSize: compact ? 56 : 106,
          letterSpacing: -4,
          fontWeight: 850,
          opacity: animate
            ? interpolate(frame, [10, 28], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              })
            : 1,
          translate: animate
            ? interpolate(frame, [10, 28], ["-30px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              })
            : "0px 0px",
        }}
      >
        SIGESS
      </Interactive.Div>
    </div>
  );
};
