import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {Headline, SceneCanvas} from "../components/MotionPrimitives";
import {palette, shadow} from "../theme";

const routine = [
  ["01", "Cadastro", "Conferir dados"],
  ["02", "Documento", "Preencher formulário"],
  ["03", "GOV", "Abrir nova sessão"],
  ["04", "Planilha", "Atualizar controle"],
];

export const ManualScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 110, top: 96}}>
        <Headline size={88} width={900}>Uma rotina fragmentada, tarefa por tarefa.</Headline>
      </div>

      <div style={{position: "absolute", left: 110, top: 410, display: "grid", gap: 20}}>
        {["CADASTROS", "DOCUMENTOS", "GOV"].map((label, index) => (
          <Interactive.Div
            key={label}
            name={label}
            style={{
              color: index === 2 ? palette.cobalt : palette.ink,
              fontSize: 64,
              lineHeight: 1,
              letterSpacing: -2,
              fontWeight: 850,
              opacity: interpolate(frame, [18 + index * 12, 32 + index * 12], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [18 + index * 12, 42 + index * 12], ["-48px 0px", "0px 0px"], {
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

      <div style={{position: "absolute", right: 105, top: 125, width: 760, height: 820, background: palette.white, border: `2px solid ${palette.line}`, boxShadow: shadow}}>
        <div style={{height: 90, padding: "0 34px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `2px solid ${palette.line}`}}>
          <div style={{fontSize: 24, fontWeight: 850}}>ROTINA MANUAL</div>
          <div style={{fontSize: 18, fontWeight: 800, color: palette.inkSoft}}>4 ETAPAS</div>
        </div>
        <div style={{padding: 34, display: "grid", gap: 18}}>
          {routine.map(([number, title, detail], index) => (
            <div
              key={number}
              style={{
                height: 126,
                border: `2px solid ${palette.line}`,
                display: "grid",
                gridTemplateColumns: "72px 1fr auto",
                alignItems: "center",
                gap: 20,
                padding: "0 24px",
                opacity: interpolate(frame, [30 + index * 13, 44 + index * 13], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
                translate: interpolate(frame, [30 + index * 13, 54 + index * 13], ["60px 0px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1)}),
              }}
            >
              <div style={{fontSize: 22, color: palette.emerald, fontWeight: 850}}>{number}</div>
              <div><div style={{fontSize: 25, fontWeight: 820}}>{title}</div><div style={{fontSize: 18, color: palette.inkSoft, marginTop: 5}}>{detail}</div></div>
              <div style={{fontSize: 15, fontWeight: 800, color: palette.inkSoft, padding: "10px 14px", border: `1px solid ${palette.line}`}}>PENDENTE</div>
            </div>
          ))}
        </div>
      </div>
    </SceneCanvas>
  );
};
