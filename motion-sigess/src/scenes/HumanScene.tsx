import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {SceneCanvas} from "../components/MotionPrimitives";
import {palette, shadow} from "../theme";

const attendance = [
  ["MF", "Maria Ferreira", "Documentação conferida"],
  ["JS", "José dos Santos", "Atendimento em andamento"],
  ["AN", "Ana Nascimento", "Próximo atendimento"],
];

export const HumanScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 110, top: 125, width: 790}}>
        <Interactive.Div name="Human outcome" style={{fontSize: 92, lineHeight: 1.03, letterSpacing: -4, fontWeight: 850, color: palette.ink}}>
          Menos tarefas.<br /><span style={{color: palette.emerald}}>Mais atendimento.</span>
        </Interactive.Div>
        <div style={{fontSize: 30, lineHeight: 1.45, color: palette.inkSoft, marginTop: 34, width: 720}}>Enquanto o SIGESS automatiza a rotina, sua equipe continua cuidando de quem importa.</div>
      </div>

      <div style={{position: "absolute", right: 105, top: 125, width: 760, height: 760, background: palette.white, border: `2px solid ${palette.line}`, boxShadow: shadow}}>
        <div style={{height: 92, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 34px", borderBottom: `2px solid ${palette.line}`}}>
          <div style={{fontSize: 25, fontWeight: 850}}>ATENDIMENTO DA ENTIDADE</div>
          <div style={{width: 14, height: 14, borderRadius: 99, background: palette.emerald}} />
        </div>
        <div style={{padding: 34}}>
          <div style={{fontSize: 18, color: palette.inkSoft, fontWeight: 750, marginBottom: 18}}>FILA DE HOJE</div>
          <div style={{display: "grid", gap: 18}}>
            {attendance.map(([initials, name, status], index) => (
              <div key={name} style={{height: 142, display: "grid", gridTemplateColumns: "76px 1fr", alignItems: "center", gap: 22, padding: "0 24px", background: index === 1 ? palette.mint : palette.ice, border: `2px solid ${index === 1 ? palette.mintStrong : palette.line}`, opacity: interpolate(frame, [index * 10, index * 10 + 14], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), translate: interpolate(frame, [index * 10, index * 10 + 24], ["50px 0px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>
                <div style={{width: 68, height: 68, borderRadius: 99, display: "grid", placeItems: "center", background: index === 1 ? palette.emerald : palette.white, color: index === 1 ? palette.white : palette.ink, border: `1px solid ${palette.line}`, fontWeight: 850, fontSize: 21}}>{initials}</div>
                <div><div style={{fontSize: 24, fontWeight: 820}}>{name}</div><div style={{fontSize: 17, marginTop: 6, color: index === 1 ? palette.emeraldDark : palette.inkSoft, fontWeight: index === 1 ? 750 : 600}}>{status}</div></div>
              </div>
            ))}
          </div>
          <div style={{marginTop: 26, height: 70, display: "grid", placeItems: "center", background: palette.ink, color: palette.white, fontSize: 20, fontWeight: 800, letterSpacing: 1}}>EQUIPE DISPONÍVEL PARA ATENDER</div>
        </div>
      </div>
    </SceneCanvas>
  );
};
