import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {SceneCanvas} from "../components/MotionPrimitives";
import {palette} from "../theme";

export const EsocialScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 110, top: 100, color: palette.cobalt, fontSize: 34, fontWeight: 850}}>eSocial</div>
      <Interactive.Div name="eSocial headline" style={{position: "absolute", left: 110, top: 160, width: 980, fontSize: 88, lineHeight: 1.02, letterSpacing: -4, fontWeight: 850}}>Guias para vários associados, de uma só vez.</Interactive.Div>
      <div style={{position: "absolute", left: 130, bottom: 160, display: "flex", gap: 18}}>
        {["AM", "JC", "RF", "MS", "SN", "LO"].map((initials, index) => (
          <div key={initials} style={{width: 110, height: 110, borderRadius: 99, display: "grid", placeItems: "center", background: index % 2 ? palette.mint : palette.white, border: `2px solid ${palette.line}`, color: palette.ink, fontSize: 29, fontWeight: 850, opacity: interpolate(frame, [index * 7, index * 7 + 12], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), translate: interpolate(frame, [index * 7, 76], ["0px 0px", `${785 - index * 93}px 0px`], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.65, 0, 0.35, 1)})}}>{initials}</div>
        ))}
      </div>
      <div style={{position: "absolute", right: 130, bottom: 110, width: 570, height: 560, borderRadius: 30, background: palette.white, border: `2px solid ${palette.line}`, padding: 44, boxShadow: "0 28px 80px rgba(16,36,58,.14)"}}>
        <div style={{fontSize: 28, fontWeight: 850}}>Guias GPS</div>
        <div style={{fontSize: 20, color: palette.inkSoft, marginTop: 8}}>Competência selecionada</div>
        <div style={{marginTop: 38, display: "grid", gap: 17}}>{[0, 1, 2, 3].map((index) => <div key={index} style={{height: 67, borderRadius: 14, background: palette.ice, border: `2px solid ${palette.line}`, display: "flex", alignItems: "center", padding: "0 20px", gap: 15}}><span style={{width: 28, height: 28, borderRadius: 99, background: palette.emerald, color: palette.white, display: "grid", placeItems: "center", fontSize: 17}}>✓</span><span style={{fontSize: 19, fontWeight: 750}}>Guia gerada</span></div>)}</div>
        <div style={{marginTop: 30, height: 62, borderRadius: 14, background: palette.emerald, color: palette.white, display: "grid", placeItems: "center", fontSize: 22, fontWeight: 850}}>CONCLUÍDO</div>
      </div>
    </SceneCanvas>
  );
};
