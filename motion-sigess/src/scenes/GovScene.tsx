import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {Headline, SceneCanvas} from "../components/MotionPrimitives";
import {palette, shadow} from "../theme";

export const GovScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 110, top: 90}}>
        <Headline size={82} width={1100}>Várias sessões GOV. Uma rotina organizada.</Headline>
      </div>
      <div style={{position: "absolute", left: 120, top: 380, display: "flex", alignItems: "center", gap: 44}}>
        <div style={{width: 340, height: 380, borderRadius: 28, background: palette.white, boxShadow: shadow, border: `2px solid ${palette.line}`, padding: 34}}>
          <div style={{width: 88, height: 88, borderRadius: 99, background: palette.mint, display: "grid", placeItems: "center", color: palette.emerald, fontSize: 36, fontWeight: 850}}>JC</div>
          <div style={{fontSize: 28, fontWeight: 820, marginTop: 24}}>João Carlos</div>
          <div style={{fontSize: 20, color: palette.inkSoft, marginTop: 7}}>CPF e dados básicos</div>
          <div style={{height: 1, background: palette.line, margin: "28px 0"}} />
          <div style={{fontSize: 20, color: palette.emerald, fontWeight: 800}}>DADOS COLETADOS</div>
        </div>
        <div style={{position: "relative", width: 860, height: 430}}>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} style={{position: "absolute", left: index * 155, top: index % 2 ? 84 : 8, width: 390, height: 300, borderRadius: 24, background: palette.white, border: `2px solid ${index === 3 ? palette.emerald : palette.line}`, boxShadow: shadow, padding: 28, opacity: interpolate(frame, [index * 12, index * 12 + 16], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), translate: interpolate(frame, [index * 12, index * 12 + 24], ["90px 0px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.spring({damping: 20})})}}>
              <div style={{fontSize: 30, fontWeight: 850, color: palette.cobalt}}>GOV</div>
              <div style={{fontSize: 18, color: palette.inkSoft, marginTop: 14}}>Sessão {String(index + 1).padStart(2, "0")}</div>
              <div style={{marginTop: 32, height: 12, background: palette.line, borderRadius: 99}}><div style={{width: `${55 + index * 12}%`, height: "100%", background: palette.emerald, borderRadius: 99}} /></div>
              <div style={{marginTop: 48, fontSize: 18, fontWeight: 800, color: index === 3 ? palette.emerald : palette.inkSoft}}>{index === 3 ? "VERIFICADO" : "EM PROCESSAMENTO"}</div>
            </div>
          ))}
        </div>
      </div>
      <Interactive.Div name="Divergence note" style={{position: "absolute", right: 115, bottom: 90, padding: "24px 32px", borderRadius: 18, background: palette.ink, color: palette.white, fontSize: 26, fontWeight: 750, opacity: interpolate(frame, [110, 136], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>
        Divergências sinalizadas antes do envio
      </Interactive.Div>
    </SceneCanvas>
  );
};
