import {Easing, interpolate, useCurrentFrame} from "remotion";
import {Headline, Kicker, SceneCanvas} from "../components/MotionPrimitives";
import {palette, shadow} from "../theme";

const members = [
  ["J. Ferreira", "Benefício identificado", "Recebeu"],
  ["M. dos Santos", "Aguardando atualização", "Em análise"],
  ["A. Nascimento", "Anuidade pendente", "Verificar"],
];

export const DefesoScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneCanvas>
      <div style={{position: "absolute", left: 110, top: 86}}><Kicker>Seguro Defeso</Kicker><Headline size={76} width={940} delay={6}>Saiba quem já recebeu sem entrar em cada conta GOV.</Headline></div>
      <div style={{position: "absolute", left: 110, right: 110, top: 410, display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 34}}>
        <div style={{height: 500, borderRadius: 30, background: palette.white, border: `2px solid ${palette.line}`, boxShadow: shadow, padding: 34}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}><div style={{fontSize: 26, fontWeight: 850}}>Acompanhamento dos associados</div><div style={{fontSize: 18, color: palette.emerald, fontWeight: 800}}>ATUALIZADO</div></div>
          <div style={{marginTop: 30, display: "grid", gap: 18}}>
            {members.map(([name, description, status], index) => (
              <div key={name} style={{padding: "22px 24px", borderRadius: 18, background: index === 0 ? palette.mint : palette.ice, border: `2px solid ${index === 0 ? palette.mintStrong : palette.line}`, display: "grid", gridTemplateColumns: "56px 1fr auto", alignItems: "center", gap: 18, opacity: interpolate(frame, [index * 15, index * 15 + 16], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), translate: interpolate(frame, [index * 15, index * 15 + 24], ["-50px 0px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.spring({damping: 20})})}}>
                <div style={{width: 56, height: 56, borderRadius: 99, background: index === 0 ? palette.emerald : palette.line, color: index === 0 ? palette.white : palette.inkSoft, display: "grid", placeItems: "center", fontWeight: 850}}>{name.charAt(0)}</div>
                <div><div style={{fontSize: 22, fontWeight: 800}}>{name}</div><div style={{fontSize: 17, color: palette.inkSoft, marginTop: 4}}>{description}</div></div>
                <div style={{padding: "12px 18px", borderRadius: 99, background: index === 0 ? palette.emerald : palette.white, color: index === 0 ? palette.white : palette.inkSoft, fontSize: 16, fontWeight: 800}}>{status}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{height: 500, borderRadius: 30, background: palette.emeraldDark, color: palette.white, padding: 48, position: "relative", overflow: "hidden"}}>
          <div style={{fontSize: 25, color: palette.mintStrong, fontWeight: 800, letterSpacing: 3}}>VISIBILIDADE PARA COBRAR MELHOR</div>
          <div style={{fontSize: 66, fontWeight: 850, lineHeight: 1.04, letterSpacing: -3, marginTop: 28}}>Informação clara para organizar pendências e anuidades.</div>
          <div style={{position: "absolute", right: -60, bottom: -80, width: 330, height: 330, borderRadius: 999, border: `74px solid ${palette.emerald}`, opacity: .55, scale: interpolate(frame, [45, 95], [.7, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.spring({damping: 18}), output: "perceptual-scale"})}} />
        </div>
      </div>
    </SceneCanvas>
  );
};
