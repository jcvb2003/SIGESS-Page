import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {palette, shadow} from "../theme";

export const SceneCanvas: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
}> = ({children, dark = false}) => (
  <AbsoluteFill
    style={{
      backgroundColor: dark ? palette.emeraldDark : palette.ice,
      overflow: "hidden",
      color: dark ? palette.white : palette.ink,
    }}
  >
    {children}
  </AbsoluteFill>
);

export const OrganicWave: React.FC<{
  position?: "top" | "bottom";
  dark?: boolean;
  delay?: number;
}> = ({position = "bottom", dark = false, delay = 0}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  return (
    <svg
      width={width}
      height="420"
      viewBox="0 0 1920 420"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        left: 0,
        [position]: -20,
        opacity: interpolate(frame, [delay, delay + 22], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(
          frame,
          [delay, delay + 36],
          [position === "bottom" ? "0px 110px" : "0px -110px", "0px 0px"],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
      }}
    >
      <path
        d="M0 190 C260 48 470 345 760 190 C1050 36 1240 285 1510 155 C1690 68 1810 85 1920 140 L1920 420 L0 420 Z"
        fill={dark ? palette.emerald : palette.mint}
      />
      <path
        d="M0 278 C315 116 560 395 895 238 C1190 100 1450 320 1920 176 L1920 420 L0 420 Z"
        fill={dark ? "#034A3A" : palette.emerald}
        opacity="0.96"
      />
    </svg>
  );
};

export const Kicker: React.FC<{children: React.ReactNode; light?: boolean}> = ({
  children,
  light = false,
}) => (
  <div
    style={{
      color: light ? palette.mintStrong : palette.emerald,
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: 5,
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);

export const Headline: React.FC<{
  children: React.ReactNode;
  delay?: number;
  light?: boolean;
  size?: number;
  width?: number;
  name?: string;
}> = ({children, delay = 0, light = false, size = 98, width = 1280, name = "Headline"}) => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div
      name={name}
      style={{
        color: light ? palette.white : palette.ink,
        fontSize: size,
        lineHeight: 1.02,
        letterSpacing: -4,
        fontWeight: 850,
        maxWidth: width,
        opacity: interpolate(frame, [delay, delay + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [delay, delay + 22], ["0px 44px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      {children}
    </Interactive.Div>
  );
};

export const PaperCard: React.FC<{
  x: number;
  y: number;
  rotate: number;
  delay: number;
  label: string;
  accent?: string;
}> = ({x, y, rotate, delay, label, accent = palette.emerald}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 260,
        height: 170,
        borderRadius: 18,
        background: palette.white,
        border: `2px solid ${palette.line}`,
        boxShadow: shadow,
        padding: 26,
        rotate: interpolate(frame, [delay, delay + 24], [`${rotate - 7}deg`, `${rotate}deg`], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.spring({damping: 16}),
        }),
        translate: interpolate(frame, [delay, delay + 24], ["0px 140px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.spring({damping: 18}),
        }),
        opacity: interpolate(frame, [delay, delay + 9], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <div style={{fontSize: 22, fontWeight: 800, color: accent}}>{label}</div>
      {[0, 1, 2].map((line) => (
        <div
          key={line}
          style={{
            marginTop: 15,
            width: `${92 - line * 17}%`,
            height: 9,
            borderRadius: 99,
            background: line === 0 ? palette.mintStrong : palette.line,
          }}
        />
      ))}
    </div>
  );
};

export const BrowserFrame: React.FC<{
  children: React.ReactNode;
  title?: string;
  width?: number;
  height?: number;
}> = ({children, title = "SIGESS", width = 1180, height = 690}) => (
  <div
    style={{
      width,
      height,
      borderRadius: 30,
      overflow: "hidden",
      background: palette.white,
      border: `2px solid ${palette.line}`,
      boxShadow: shadow,
    }}
  >
    <div
      style={{
        height: 72,
        display: "flex",
        alignItems: "center",
        padding: "0 26px",
        background: "#EDF2F1",
        borderBottom: `2px solid ${palette.line}`,
        gap: 12,
      }}
    >
      {["#EE6B61", "#E7BA45", "#46B784"].map((color) => (
        <span key={color} style={{width: 17, height: 17, borderRadius: 99, background: color}} />
      ))}
      <div
        style={{
          marginLeft: 20,
          flex: 1,
          height: 38,
          borderRadius: 12,
          background: palette.white,
          color: palette.inkSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 19,
          fontWeight: 650,
        }}
      >
        {title}
      </div>
    </div>
    <div style={{height: height - 72, position: "relative"}}>{children}</div>
  </div>
);

export const BrandSweep: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  return (
    <AbsoluteFill style={{pointerEvents: "none", overflow: "hidden"}}>
      <div
        style={{
          position: "absolute",
          left: -500,
          top: -320,
          width: 2500,
          height: 720,
          borderRadius: "50%",
          background: palette.emerald,
          rotate: "-8deg",
          translate: interpolate(frame, [0, durationInFrames - 1], ["-2100px 0px", "2200px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />
    </AbsoluteFill>
  );
};
