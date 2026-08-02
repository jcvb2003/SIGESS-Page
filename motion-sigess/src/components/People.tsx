import {Easing, interpolate, useCurrentFrame} from "remotion";
import {palette} from "../theme";

export const Secretary: React.FC<{calm?: boolean; delay?: number}> = ({
  calm = false,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  return (
    <svg
      width="470"
      height="620"
      viewBox="0 0 470 620"
      style={{
        opacity: interpolate(frame, [delay, delay + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        translate: interpolate(frame, [delay, delay + 26], ["40px 20px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.spring({damping: 18}),
        }),
      }}
    >
      <ellipse cx="238" cy="587" rx="188" ry="24" fill="#0B5945" opacity="0.12" />
      <path d="M132 580 L158 359 Q235 310 314 359 L343 580 Z" fill={palette.emerald} />
      <path d="M179 345 Q238 302 294 345 L270 410 L197 410 Z" fill={palette.white} />
      <circle cx="237" cy="226" r="94" fill="#F1B48D" />
      <path d="M143 222 Q144 98 246 104 Q347 112 334 247 Q309 190 260 161 Q218 218 143 222 Z" fill={palette.ink} />
      <path d="M151 202 Q111 239 141 294 Q157 321 192 309" fill={palette.ink} />
      <circle cx="205" cy="230" r="7" fill={palette.ink} />
      <circle cx="273" cy="230" r="7" fill={palette.ink} />
      {calm ? (
        <path d="M210 271 Q239 294 270 268" fill="none" stroke={palette.ink} strokeWidth="7" strokeLinecap="round" />
      ) : (
        <path d="M211 283 Q239 260 269 282" fill="none" stroke={palette.ink} strokeWidth="7" strokeLinecap="round" />
      )}
      <path d="M158 378 Q82 405 53 500" fill="none" stroke="#F1B48D" strokeWidth="36" strokeLinecap="round" />
      <path d="M314 378 Q397 408 419 500" fill="none" stroke="#F1B48D" strokeWidth="36" strokeLinecap="round" />
      {!calm && (
        <>
          <path d="M61 482 Q30 458 20 427" fill="none" stroke="#F1B48D" strokeWidth="24" strokeLinecap="round" />
          <path d="M410 482 Q438 452 449 418" fill="none" stroke="#F1B48D" strokeWidth="24" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
};

export const Fisher: React.FC<{delay?: number}> = ({delay = 0}) => {
  const frame = useCurrentFrame();
  return (
    <svg
      width="420"
      height="600"
      viewBox="0 0 420 600"
      style={{
        opacity: interpolate(frame, [delay, delay + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        translate: interpolate(frame, [delay, delay + 24], ["50px 0px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.spring({damping: 18}),
        }),
      }}
    >
      <ellipse cx="213" cy="570" rx="170" ry="22" fill="#0B5945" opacity="0.12" />
      <path d="M96 567 L120 354 Q211 307 302 354 L330 567 Z" fill="#28607A" />
      <circle cx="211" cy="225" r="91" fill="#AF6F4F" />
      <path d="M123 229 Q119 124 207 112 Q301 113 310 220 Q276 164 210 163 Q163 167 123 229 Z" fill="#372C2A" />
      <path d="M168 270 Q210 323 257 270 Q248 335 210 344 Q174 335 168 270 Z" fill="#372C2A" />
      <circle cx="180" cy="228" r="7" fill="#221D1C" />
      <circle cx="247" cy="228" r="7" fill="#221D1C" />
      <path d="M184 266 Q212 286 240 264" fill="none" stroke="#221D1C" strokeWidth="7" strokeLinecap="round" />
      <path d="M109 376 Q56 408 35 486" fill="none" stroke="#AF6F4F" strokeWidth="34" strokeLinecap="round" />
      <path d="M307 376 Q363 410 386 485" fill="none" stroke="#AF6F4F" strokeWidth="34" strokeLinecap="round" />
      <path d="M112 140 Q211 51 311 140 L292 173 L127 173 Z" fill={palette.yellow} />
      <rect x="98" y="155" width="227" height="31" rx="16" fill="#E6B52F" />
    </svg>
  );
};
