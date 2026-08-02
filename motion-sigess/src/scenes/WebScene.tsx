import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {BrowserFrame, Kicker, SceneCanvas} from "../components/MotionPrimitives";
import {palette} from "../theme";

const modules = [
  ["Sócios", "2.486", "cadastros organizados"],
  ["Documentos", "128", "emitidos este mês"],
  ["Financeiro", "94%", "acompanhado"],
  ["Relatórios", "12", "visões da entidade"],
];

export const WebScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 100, top: 82}}><Kicker>Sistema web</Kicker></div>
      <Interactive.Div name="Web headline" style={{position: "absolute", left: 100, top: 132, width: 540, fontSize: 72, lineHeight: 1.04, letterSpacing: -3, fontWeight: 850, color: palette.ink}}>
        A entidade inteira em um só lugar.
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          right: 90,
          top: 92,
          opacity: interpolate(frame, [10, 30], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [10, 38], ["100px 40px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.spring({damping: 20})}),
          rotate: interpolate(frame, [10, 38], ["2deg", "0deg"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.spring({damping: 20})}),
        }}
      >
        <BrowserFrame width={1170} height={790} title="sigess.com.br • gestão da entidade">
          <div style={{height: "100%", display: "grid", gridTemplateColumns: "220px 1fr"}}>
            <div style={{background: palette.ink, padding: 30, color: palette.white}}>
              <div style={{fontSize: 30, fontWeight: 850, marginBottom: 46}}>SIGESS</div>
              {["Visão geral", "Sócios", "Documentos", "Financeiro", "Relatórios"].map((item, index) => (
                <div key={item} style={{padding: "16px 18px", borderRadius: 12, background: index === 0 ? "rgba(255,255,255,.13)" : "transparent", color: index === 0 ? palette.white : "#AFC0D0", fontSize: 20, marginBottom: 8}}>{item}</div>
              ))}
            </div>
            <div style={{padding: 38, background: palette.white}}>
              <div style={{fontSize: 30, fontWeight: 800, color: palette.ink}}>Visão geral</div>
              <div style={{marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22}}>
                {modules.map(([title, value, description], index) => (
                  <div key={title} style={{padding: 26, borderRadius: 18, border: `2px solid ${palette.line}`, background: index === 0 ? palette.mint : palette.ice}}>
                    <div style={{fontSize: 18, color: palette.inkSoft, fontWeight: 700}}>{title}</div>
                    <div style={{fontSize: 48, color: index === 0 ? palette.emeraldDark : palette.ink, fontWeight: 850, marginTop: 10}}>{value}</div>
                    <div style={{fontSize: 17, color: palette.inkSoft, marginTop: 3}}>{description}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop: 24, height: 132, borderRadius: 18, background: palette.ice, border: `2px solid ${palette.line}`, display: "flex", alignItems: "flex-end", gap: 18, padding: "24px 28px"}}>
                {[46, 70, 52, 88, 64, 95, 78, 106].map((height, index) => <div key={index} style={{flex: 1, height, borderRadius: "8px 8px 3px 3px", background: index === 5 ? palette.emerald : palette.mintStrong}} />)}
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </SceneCanvas>
  );
};
