import {
  Headset,
  VideoCamera,
  WhatsappLogo,
  type Icon,
} from '@phosphor-icons/react';

interface ServiceItem {
  readonly title: string;
  readonly description: string;
  readonly icon: Icon;
}

const services: ServiceItem[] = [
  {
    title: 'WhatsApp',
    description: 'Resposta rápida com atendimento humano',
    icon: WhatsappLogo,
  },
  {
    title: 'Treinamento por videochamada',
    description: 'Implantação guiada, prática e com tira-dúvidas',
    icon: VideoCamera,
  },
  {
    title: 'Suporte 100% humano',
    description: 'Atendimento por WhatsApp, Meet e telefone',
    icon: Headset,
  },
];

export function ServiceFooter() {
  return (
    <section
      aria-label="Atendimento e suporte"
      className="border-b border-white/10 bg-emerald-950 text-white"
    >
      <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, index) => (
          <div
            key={title}
            className={`flex items-center gap-4 px-6 py-7 sm:px-8 lg:px-10 lg:py-9 ${
              index > 0
                ? 'border-t border-white/10 lg:border-l lg:border-t-0'
                : ''
            }`}
          >
            <Icon
              className="h-8 w-8 shrink-0 text-emerald-300"
              weight="duotone"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold leading-tight text-white">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-emerald-100/75">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
