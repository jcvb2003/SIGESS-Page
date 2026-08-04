import { useEffect, useState } from 'react';
import { ArrowRight, Building, CheckCircle, Envelope as Mail, MapPin, PaperPlaneTilt as Send, User, Users } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export interface PlanContactTier { id: string; range: string; sub: string; computers: number | string; price: number | string; }
interface Props { open: boolean; onOpenChange: (open: boolean) => void; plan: PlanContactTier; }

const states = [['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'], ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'], ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'], ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'], ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'], ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'], ['SE', 'Sergipe'], ['TO', 'Tocantins']] as const;
function price(value: number | string) { return typeof value === 'string' ? value : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value / 12); }
function documentMask(value: string) { const d = value.replace(/\D/g, '').slice(0, 14); return d.length <= 11 ? d.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2') : d.replace(/^(\d{2})(\d)/, '$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3').replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d{1,2})$/, '$1-$2'); }

export function PlanContactDialog({ open, onOpenChange, plan }: Props) {
  const [data, setData] = useState({ nome: '', entidade: '', documento: '', uf: '', municipio: '', email: '', socios: '' });
  const [municipios, setMunicipios] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data.uf) return;
    const controller = new AbortController();
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data.uf}/municipios`, { signal: controller.signal })
      .then((r) => r.json() as Promise<Array<{ nome: string }>>).then((items) => setMunicipios(items.map((item) => item.nome)))
      .catch(() => setMunicipios([])).finally(() => setLoading(false));
    return () => controller.abort();
  }, [data.uf]);

  const resetForm = () => {
    setData({ nome: '', entidade: '', documento: '', uf: '', municipio: '', email: '', socios: '' });
    setMunicipios([]);
    setLoading(false);
  };
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) resetForm();
    onOpenChange(nextOpen);
  };
  const change = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { const { name, value } = event.target; if (name === 'uf') { setLoading(Boolean(value)); setMunicipios([]); } setData((current) => ({ ...current, [name]: name === 'documento' ? documentMask(value) : value, ...(name === 'uf' ? { municipio: '' } : {}) })); };
  const submit = (event: React.FormEvent) => { event.preventDefault(); const state = states.find(([uf]) => uf === data.uf)?.[1] ?? data.uf; const message = `Olá! Tenho interesse no plano ${plan.range} ${plan.sub} do SIGESS.\n*Plano:* ${plan.range} ${plan.sub}\n*Valor:* ${price(plan.price)}${typeof plan.price === 'number' ? ' /mês' : ''}\n*Nome:* ${data.nome}\n*Entidade:* ${data.entidade}\n*CPF/CNPJ:* ${data.documento}\n*Estado:* ${state}\n*Município:* ${data.municipio}\n*E-mail:* ${data.email}\n*Nº de sócios:* ${data.socios}`; window.open(`https://wa.me/5591993193461?text=${encodeURIComponent(message)}`, '_blank'); handleOpenChange(false); };

  return <Dialog open={open} onOpenChange={handleOpenChange}><DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto border-0 bg-slate-50 p-0"><div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-7 text-white sm:px-8"><DialogHeader><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Plano selecionado</p><DialogTitle className="text-2xl font-bold text-white sm:text-3xl">{plan.range} {plan.sub}</DialogTitle><DialogDescription className="mt-2 text-slate-300">Preencha seus dados para começar a usar o SIGESS com implantação guiada e suporte humano.</DialogDescription></DialogHeader><div className="mt-5 flex flex-wrap gap-3 text-sm text-emerald-50"><span className="rounded-full bg-white/10 px-3 py-1.5">{price(plan.price)} /mês</span><span className="rounded-full bg-white/10 px-3 py-1.5">Robô em {typeof plan.computers === 'number' ? `${plan.computers} PC${plan.computers === 1 ? '' : 's'}` : plan.computers}</span></div></div><form onSubmit={submit} className="space-y-5 p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><Field label="Nome do responsável" id="nome" icon={<User />}><Input id="nome" name="nome" placeholder="Seu nome completo" value={data.nome} onChange={change} required /></Field><Field label="Entidade" id="entidade" icon={<Building />}><Input id="entidade" name="entidade" placeholder="Nome da entidade" value={data.entidade} onChange={change} required /></Field><Field label="CPF ou CNPJ da entidade" id="documento"><Input id="documento" name="documento" inputMode="numeric" placeholder="000.000.000-00" value={data.documento} onChange={change} required /></Field><Field label="E-mail" id="email" icon={<Mail />}><Input id="email" name="email" type="email" placeholder="seu@email.com" value={data.email} onChange={change} required /></Field><Field label="Estado" id="uf"><select id="uf" name="uf" value={data.uf} onChange={change} required className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"><option value="">Selecione o estado</option>{states.map(([uf, name]) => <option key={uf} value={uf}>{name}</option>)}</select></Field><Field label="Município" id="municipio" icon={<MapPin />}><select id="municipio" name="municipio" value={data.municipio} onChange={change} disabled={!data.uf || loading} required className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-2 pl-10 text-sm disabled:opacity-60"><option value="">{loading ? 'Carregando municípios...' : 'Selecione o município'}</option>{municipios.map((municipio) => <option key={municipio} value={municipio}>{municipio}</option>)}</select></Field><Field label="Nº aproximado de sócios" id="socios" icon={<Users />}><Input id="socios" name="socios" type="number" min="1" placeholder="Quantidade aproximada" value={data.socios} onChange={change} required /></Field></div><div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900"><div className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /><p>Ao enviar, você será direcionado ao WhatsApp da equipe para concluir o atendimento.</p></div></div><DialogFooter className="gap-3 sm:justify-between"><Button type="button" variant="ghost" onClick={() => handleOpenChange(false)}>Cancelar</Button><Button type="submit" className="bg-emerald-600 text-white hover:bg-emerald-700"><Send className="mr-2 h-5 w-5" />Continuar no WhatsApp<ArrowRight className="ml-2 h-4 w-4" /></Button></DialogFooter></form></DialogContent></Dialog>;
}

function Field({ label, id, icon, children }: { label: string; id: string; icon?: React.ReactNode; children: React.ReactNode }) { return <div className="space-y-2"><Label htmlFor={id}>{label}</Label><div className={icon ? 'relative [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-1/2 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:-translate-y-1/2 [&>svg]:text-slate-400 [&>input]:pl-10' : ''}>{icon}{children}</div></div>; }
