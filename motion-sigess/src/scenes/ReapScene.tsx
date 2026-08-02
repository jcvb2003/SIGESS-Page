import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {SceneCanvas} from "../components/MotionPrimitives";
import {palette, shadow} from "../theme";

export const ReapScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas dark>
      <div style={{position: "absolute", left: 110, top: 90}}>
        <div style={{fontSize: 30, color: palette.mintStrong, fontWeight: 800, letterSpacing: 5}}>REAP</div>
        <Interactive.Div name="REAP headline" style={{fontSize: 108, color: palette.white, fontWeight: 870, letterSpacing: -5, marginTop: 10}}>Em lote. Em segundos.</Interactive.Div>
      </div>
      <div style={{position: "absolute", left: 120, right: 120, top: 410, display: "flex", gap: 24}}>
        {["Ana", "Carlos", "Francisco", "Maria", "Raimundo", "Sônia"].map((name, index) => (
          <div key={name} style={{flex: 1, height: 330, borderRadius: 22, padding: 24, background: palette.white, boxShadow: shadow, translate: interpolate(frame, [index * 8, index * 8 + 24], ["0px 180px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.spring({damping: 18})}), opacity: interpolate(frame, [index * 8, index * 8 + 12], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>
            <div style={{fontSize: 20, fontWeight: 850, color: palette.ink}}>REAP</div>
            <div style={{fontSize: 17, color: palette.inkSoft, marginTop: 8}}>{index % 2 ? "Anual" : "Simplificada"}</div>
            <div style={{marginTop: 35, display: "grid", gap: 15}}>{[0, 1, 2].map((line) => <div key={line} style={{height: 10, borderRadius: 99, background: line === 0 ? palette.mintStrong : palette.line, width: `${96 - line * 18}%`}} />)}</div>
            <div style={{position: "absolute", bottom: 24, width: 54, height: 54, borderRadius: 99, display: "grid", placeItems: "center", background: palette.emerald, color: palette.white, fontSize: 30, fontWeight: 900, opacity: interpolate(frame, [70 + index * 5, 82 + index * 5], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>✓</div>
          </div>
        ))}
      </div>
    </SceneCanvas>
  );
};
