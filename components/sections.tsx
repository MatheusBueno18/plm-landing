import Image from "next/image";
import type { ReactNode } from "react";
import { Compass, Lightbulb, BookOpen, Waves, Sparkles, SlidersHorizontal, Cpu, ShieldCheck, FlaskConical, Layers, Watch, Smartphone, Check, Clock, PenLine, Link2, ArrowRight, ExternalLink, Radio, Library, BarChart3, Volume2, Plus, Sprout } from "lucide-react";
import Reveal from "./Reveal";

/* ---------- helpers ---------- */
export const Cta = ({ children = "QUERO ACESSO ANTECIPADO", href = "#cadastro", ghost = false }: { children?: ReactNode; href?: string; ghost?: boolean }) => (
  <a href={href} className={ghost ? "btn btn-ghost" : "btn btn-primary"}>{children}</a>
);
export function Sec({ id, dark = true, children }: { id?: string; dark?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${dark ? "bg-navy text-ice" : "bg-ice text-navy"}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}
export function H({ eyebrow, children, dark = true, center = false }: { eyebrow?: string; children: ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && <p className={`mb-3 text-xs uppercase tracking-[.3em] ${dark ? "text-lav" : "text-vio"}`}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl font-semibold leading-tight md:text-5xl ${center ? "mx-auto" : ""} max-w-3xl`}>{children}</h2>
    </div>
  );
}
const Icon = ({ children, dark = true }: { children: ReactNode; dark?: boolean }) => (
  <span className={`mb-5 grid h-11 w-11 place-items-center rounded-xl ${dark ? "bg-vio/30 text-lav" : "bg-vio/10 text-vio"}`}>{children}</span>
);

/* ---------- visuais conceituais (substitua por renders finais em /public) ---------- */
function Phone({ className = "" }: { className?: string }) {
  return (
    <div className={`aspect-[9/19] rounded-[2rem] border border-lav/30 bg-[#0b1020] p-2 shadow-[0_30px_80px_-20px_#6546C8] ${className}`} role="img" aria-label="Mockup conceitual da interface do DreamApp">
      <div className="flex h-full flex-col gap-2.5 rounded-[1.5rem] bg-gradient-to-b from-[#1b2550] to-navy p-3 text-[10px] text-ice">
        <div className="flex items-center justify-between"><Image src="/logo-vertical.png" alt="" width={22} height={22} /><span className="text-lav">DreamApp</span></div>
        <p className="font-display text-sm leading-tight">Hoje à noite</p>
        {["Dream Explore", "Dream Recall", "Dream Relax"].map((t, i) => (
          <div key={t} className={`rounded-xl border px-2.5 py-2 ${i === 0 ? "border-vio bg-vio/30" : "border-lav/20 bg-white/5"}`}>{t}</div>
        ))}
        <div className="mt-auto flex h-12 items-end gap-[3px]">{[4, 9, 6, 14, 8, 12, 5, 10, 7, 13, 6, 9].map((h, i) => <span key={i} className="flex-1 rounded-full bg-lav/70" style={{ height: h * 2.8 }} />)}</div>
      </div>
    </div>
  );
}
function Band({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-14 rounded-full border border-lav/30 bg-gradient-to-r from-[#1b2550] via-[#2b2f78] to-vio shadow-[0_20px_60px_-15px_#6546C8] ${className}`} role="img" aria-label="Renderização conceitual do PLM DreamBand">
      <span className="absolute left-1/2 top-1/2 h-3 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lav/80 shadow-[0_0_20px_#A9B6FF]" />
      <span className="absolute inset-x-6 top-1.5 h-px bg-white/30" />
    </div>
  );
}
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] animate-float">
      <div className="absolute inset-[12%] rounded-full bg-vio/35 blur-[90px]" />
      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs><linearGradient id="og" x1="0" x2="1"><stop offset="0" stopColor="#4f7cff" /><stop offset="1" stopColor="#8b6cf6" /></linearGradient></defs>
        {[0, 1, 2].map((i) => <ellipse key={i} cx="260" cy="260" rx={240 - i * 45} ry={92 - i * 14} transform={`rotate(${-24 + i * 9} 260 260)`} fill="none" stroke="url(#og)" strokeOpacity={0.8 - i * 0.25} strokeWidth="1.5" />)}
        <circle cx="448" cy="170" r="5" fill="#A9B6FF" />
      </svg>
      <Phone className="absolute left-1/2 top-1/2 w-[33%] -translate-x-1/2 -translate-y-[54%]" />
      <Band className="absolute bottom-[13%] left-[3%] w-[52%] -rotate-[8deg]" />
    </div>
  );
}

/* ---------- 01 Hero ---------- */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy pb-20 pt-28 md:pt-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-vio/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs tracking-[.25em] text-lav">UMA NOVA EXPERIÊNCIA ESTÁ SENDO DESENVOLVIDA.</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] md:text-6xl">E se você pudesse explorar seus sonhos de uma nova maneira?</h1>
          <p className="mt-6 max-w-xl text-lg text-silver">Conheça uma nova fronteira da tecnologia do sono. A PLM combina inteligência artificial, estímulos sensoriais e experiências personalizadas para aproximar você do universo dos seus sonhos.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Cta /><Cta ghost href="#como-funciona">CONHECER A TECNOLOGIA</Cta></div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

/* ---------- 02 Identificação ---------- */
export function Identify() {
  const lines = ["Uma viagem incrível…", "um lugar que eu nunca vi…", "havia uma cidade…", "eu estava…", "…"];
  return (
    <Sec>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <H eyebrow="Você se identifica?">Você já acordou tentando lembrar daquele sonho?</H>
          <p className="mt-6 max-w-lg text-lg text-silver">Uma viagem incrível, um lugar desconhecido, uma experiência impossível de explicar. Às vezes, acordamos com a sensação de ter vivido algo extraordinário, mas, em poucos minutos, boa parte dessas lembranças desaparece.</p>
        </div>
        <Reveal>
          <div className="space-y-4 rounded-3xl border border-lav/15 bg-white/[.03] p-8" role="img" aria-label="Ilustração: lembranças de um sonho se apagando aos poucos">
            {lines.map((t, i) => <p key={t} className="font-display text-xl" style={{ opacity: 1 - i * 0.22, filter: `blur(${i * 1.2}px)`, marginLeft: i * 14 }}>{t}</p>)}
          </div>
        </Reveal>
      </div>
    </Sec>
  );
}

/* ---------- 03 Problema ---------- */
export function Problem() {
  const items = [
    [Clock, "01. Sonhos difíceis de recordar", "Muitas experiências oníricas são esquecidas rapidamente depois do despertar."],
    [SlidersHorizontal, "02. Pouca personalização", "As ferramentas tradicionais de sono geralmente priorizam o monitoramento do descanso, não a exploração temática dos sonhos."],
    [FlaskConical, "03. Uma oportunidade ainda pouco explorada", "A relação entre estímulos externos, memória e experiências oníricas abre possibilidades tecnológicas que ainda estão sendo estudadas."],
  ] as const;
  return (
    <Sec dark={false}>
      <H dark={false} eyebrow="O desafio">Conhecemos tão pouco sobre aquilo que acontece enquanto dormimos.</H>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map(([I, t, d], i) => <Reveal key={t} delay={i * 100}><div className="card-l h-full"><Icon dark={false}><I size={22} /></Icon><h3 className="font-display text-xl font-semibold">{t}</h3><p className="mt-3 text-navy/70">{d}</p></div></Reveal>)}
      </div>
    </Sec>
  );
}

/* ---------- 04 Solução ---------- */
export function Solution() {
  return (
    <Sec>
      <H eyebrow="A solução PLM">Conheça uma nova maneira de explorar o universo dos sonhos.</H>
      <p className="mt-6 max-w-2xl text-lg text-silver">A PLM desenvolve um ecossistema tecnológico que combina dispositivos inteligentes e inteligência artificial para criar experiências personalizadas relacionadas ao sono.</p>
      <div className="mt-12 grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
        <Reveal><div className="card-d h-full"><Icon><Watch size={22} /></Icon><h3 className="font-display text-2xl">PLM DreamBand</h3><p className="mt-2 text-silver">Dispositivo inteligente que utiliza sensores e estímulos sonoros personalizados.</p></div></Reveal>
        <div className="mx-auto flex items-center gap-2 text-lav" aria-hidden><span className="h-px w-10 bg-lav/40" /><Link2 /><span className="h-px w-10 bg-lav/40" /></div>
        <Reveal delay={120}><div className="card-d h-full"><Icon><Smartphone size={22} /></Icon><h3 className="font-display text-2xl">PLM DreamApp</h3><p className="mt-2 text-silver">Aplicativo que permite selecionar experiências, personalizar conteúdos e registrar sonhos.</p></div></Reveal>
      </div>
    </Sec>
  );
}

/* ---------- 05 Produtos ---------- */
export function Products() {
  const band = [[Layers, "Design confortável"], [Cpu, "Sensores integrados"], [Volume2, "Sistema de áudio"], [Link2, "Conectividade com o aplicativo"], [SlidersHorizontal, "Personalização de experiências"]] as const;
  const app = [[Compass, "Seleção de experiências"], [Library, "Biblioteca de sons"], [Sparkles, "Personalização com inteligência artificial"], [PenLine, "Diário de sonhos"], [Clock, "Histórico pessoal"], [BarChart3, "Relatórios e estatísticas"]] as const;
  const List = ({ l }: { l: readonly (readonly [any, string])[] }) => <ul className="mt-6 space-y-3">{l.map(([I, t]) => <li key={t} className="flex items-center gap-3 text-navy/80"><I size={18} className="shrink-0 text-vio" />{t}</li>)}</ul>;
  return (
    <Sec id="produtos" dark={false}>
      <H dark={false} eyebrow="Conheça os produtos">Hardware e software, desenhados juntos.</H>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal><div className="h-full overflow-hidden rounded-3xl bg-navy p-8 text-ice"><div className="grid h-48 place-items-center"><Band className="w-4/5 -rotate-6" /></div>
          <h3 className="font-display text-3xl">PLM DreamBand</h3><p className="mt-1 text-xs tracking-widest text-lav">PRODUTO FÍSICO</p>
          <p className="mt-4 text-silver">Uma faixa inteligente desenvolvida para acompanhar sua experiência durante o sono e fornecer estímulos sonoros personalizados em momentos adequados.</p>
          <ul className="mt-6 space-y-3">{band.map(([I, t]) => <li key={t} className="flex items-center gap-3"><I size={18} className="shrink-0 text-lav" />{t}</li>)}</ul></div></Reveal>
        <Reveal delay={120}><div className="h-full rounded-3xl border border-navy/10 bg-white p-8">
          <div className="grid grid-cols-[130px_1fr] items-center gap-6"><Phone /><div><h3 className="font-display text-3xl">PLM DreamApp</h3><p className="mt-1 text-xs tracking-widest text-vio">PRODUTO DIGITAL</p></div></div>
          <p className="mt-6 text-navy/70">Seu centro de controle para explorar, personalizar e registrar suas experiências oníricas.</p><List l={app} /></div></Reveal>
      </div>
    </Sec>
  );
}

/* ---------- 06 Experiências ---------- */
export function Experiences() {
  const x = [
    [Compass, "DREAM EXPLORE", "Aventura", "Experiências sonoras e temáticas inspiradas em viagens, natureza, exploração e fantasia.", "from-[#1d4ed8] to-[#10172C]"],
    [Lightbulb, "DREAM CREATE", "Criatividade", "Estímulos associados a temas criativos, buscando favorecer novas associações e ideias.", "from-[#6546C8] to-[#10172C]"],
    [BookOpen, "DREAM RECALL", "Memória e aprendizado", "Pistas sonoras associadas a conteúdos previamente estudados, para explorar possibilidades de reativação de memórias durante o sono.", "from-[#4f46e5] to-[#0f1a3d]"],
    [Waves, "DREAM RELAX", "Relaxamento", "Paisagens sonoras personalizadas para criar uma rotina agradável de preparação para o descanso.", "from-[#7c6be0] to-[#16224a]"],
  ] as const;
  return (
    <Sec id="experiencias">
      <H eyebrow="Escolha sua experiência">Quatro maneiras de explorar novas possibilidades.</H>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {x.map(([I, n, s, d, g], i) => (
          <Reveal key={n} delay={i * 80}>
            <article className="group relative h-full min-h-[300px] overflow-hidden rounded-3xl border border-lav/15 p-7 transition hover:border-lav/50">
              <div className={`absolute inset-0 bg-gradient-to-br ${g} opacity-70 transition duration-500 group-hover:opacity-100`} aria-hidden />
              <svg className="absolute -right-10 -top-6 h-52 w-52 opacity-40" viewBox="0 0 200 200" fill="none" stroke="#A9B6FF" aria-hidden>{[0, 1, 2, 3].map((k) => <ellipse key={k} cx="100" cy="100" rx={95 - k * 20} ry={38 - k * 7} transform={`rotate(${-30 + i * 25} 100 100)`} />)}</svg>
              <div className="relative flex h-full flex-col justify-end">
                <I className="mb-auto text-lav" size={28} />
                <p className="mt-16 text-xs tracking-[.25em] text-lav">{s.toUpperCase()}</p>
                <h3 className="font-display text-2xl">{n}</h3><p className="mt-2 text-silver">{d}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-silver/70">Experiências exploratórias: não representam resultados garantidos.</p>
    </Sec>
  );
}

/* ---------- 07 Como funciona ---------- */
export function How() {
  const s = [[Compass, "Escolha", "Abra o DreamApp e selecione o tema que deseja explorar."], [Sparkles, "Personalize", "A inteligência artificial prepara uma experiência sonora conforme suas preferências."], [Watch, "Experimente", "Utilize o DreamBand para acompanhar a experiência e receber estímulos sonoros apropriados, conforme os recursos experimentais do dispositivo."], [PenLine, "Registre", "Ao acordar, conte seu sonho pelo aplicativo e acompanhe seus registros."]] as const;
  return (
    <Sec id="como-funciona" dark={false}>
      <H dark={false} eyebrow="Como funciona">Sua experiência começa antes de fechar os olhos.</H>
      <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
        <span className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-vio to-lav md:left-0 md:top-[27px] md:h-px md:w-full md:bg-gradient-to-r" aria-hidden />
        {s.map(([I, t, d], i) => (
          <li key={t} className="relative pl-20 md:pl-0 md:pt-20">
            <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full bg-vio text-white shadow-lg shadow-vio/30"><I size={22} /></span>
            <p className="text-xs tracking-widest text-vio">ETAPA {i + 1}</p>
            <h3 className="font-display text-2xl font-semibold">{t}</h3><p className="mt-2 text-navy/70">{d}</p>
          </li>
        ))}
      </ol>
      <div className="mt-14"><Cta href="#cadastro" /></div>
    </Sec>
  );
}

/* ---------- 08 Benefícios ---------- */
export function Benefits() {
  const b = ["Experiências mais personalizadas.", "Um novo jeito de explorar a imaginação.", "Registro organizado das experiências oníricas.", "Personalização de conteúdos sonoros.", "Acompanhamento das próprias experiências.", "Integração entre dispositivo e aplicativo."];
  return (
    <Sec>
      <H eyebrow="Benefícios">Mais do que monitorar o sono. Uma nova experiência.</H>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {b.map((t, i) => <Reveal key={t} delay={i * 60}><div className="card-d flex h-full items-start gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-vio"><Check size={14} /></span>{t}</div></Reveal>)}
      </div>
    </Sec>
  );
}

/* ---------- 09 Ciência ---------- */
export function Science() {
  const r = [
    ["MIT Media Lab / Dormio", "Projeto", "O projeto Targeted Dream Incubation investiga o uso de estímulos, principalmente auditivos, durante a transição para o sono para influenciar temas de experiências mentais.", "https://www.media.mit.edu/projects/targeted-dream-incubation/overview/"],
    ["Sleep Medicine Reviews", "2024", "Uma revisão sistemática analisou 51 publicações sobre a influência de estímulos sensoriais nos sonhos. Os resultados indicam possibilidades interessantes, mas também grande variabilidade e limitações científicas.", "https://pubmed.ncbi.nlm.nih.gov/38417380/"],
    ["Frontiers in Sleep", "2026", "Um estudo-piloto com 11 participantes investigou a possibilidade de temas apresentados durante o início do sono aparecerem posteriormente em relatos de sonhos REM.", "https://doi.org/10.3389/frsle.2026.1812535"],
  ];
  return (
    <Sec id="ciencia" dark={false}>
      <H dark={false} eyebrow="Ciência e confiabilidade">Inovação que começa com a ciência.</H>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {r.map(([i, y, d, u], k) => (
          <Reveal key={u} delay={k * 100}><article className="card-l flex h-full flex-col">
            <p className="text-xs tracking-widest text-vio">{y}</p><h3 className="mt-1 font-display text-xl font-semibold">{i}</h3>
            <p className="mt-3 flex-1 text-navy/70">{d}</p>
            <a href={u} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-vio underline-offset-4 hover:underline">Ver fonte <ExternalLink size={14} /><span className="sr-only">(abre em nova aba)</span></a>
          </article></Reveal>
        ))}
      </div>
      <p className="mt-10 max-w-3xl rounded-2xl border border-vio/20 bg-vio/5 p-6 text-navy/80">A ciência ainda está explorando as possibilidades de influência sobre os sonhos. A PLM busca transformar essas pesquisas em novas experiências tecnológicas, sem prometer controle ou resultados garantidos.</p>
      <p className="mt-3 text-xs text-navy/60">As instituições e publicações acima são citadas apenas como referência de pesquisa; não há parceria, aprovação ou recomendação à PLM.</p>
    </Sec>
  );
}

/* ---------- 10 Por que PLM ---------- */
export function Why() {
  const d = [[Layers, "Tecnologia integrada", "Hardware e software trabalhando em conjunto."], [SlidersHorizontal, "Personalização", "Experiências adaptadas às preferências do usuário."], [FlaskConical, "Exploração científica", "Desenvolvimento fundamentado em pesquisas sobre sono e estímulos sensoriais."], [ShieldCheck, "Privacidade", "Compromisso com a proteção das informações pessoais e dos relatos de sonhos."]] as const;
  return (
    <Sec>
      <H eyebrow="Por que escolher a PLM?">Uma proposta diferente para uma experiência extraordinária.</H>
      <p className="mt-6 max-w-2xl text-lg text-silver">Aplicativos tradicionais de sono medem o descanso. A PLM propõe ir além: explorar temas, personalizar estímulos e registrar o que você viveu ao acordar.</p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {d.map(([I, t, x], i) => <Reveal key={t} delay={i * 80}><div className="card-d h-full"><Icon><I size={22} /></Icon><h3 className="font-display text-xl">{t}</h3><p className="mt-2 text-silver">{x}</p></div></Reveal>)}
      </div>
    </Sec>
  );
}

/* ---------- 11 Confiança ---------- */
export function Trust() {
  const t = [[FlaskConical, "Referências verificáveis", "Toda afirmação científica aponta para uma fonte pública."], [Radio, "Estágio transparente", "A PLM está em fase de desenvolvimento. Os produtos ainda não estão à venda."], [Smartphone, "Demonstrações conceituais", "Imagens e interfaces são representações conceituais dos produtos."], [ShieldCheck, "Pesquisa, privacidade e segurança", "Compromissos que orientam o desenvolvimento desde o início."]] as const;
  return (
    <Sec dark={false}>
      <H dark={false} eyebrow="Confiança e validação">Uma ideia inovadora merece responsabilidade.</H>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {t.map(([I, a, b]) => <div key={a} className="card-l flex gap-4"><span className="text-vio"><I /></span><div><h3 className="font-display text-lg font-semibold">{a}</h3><p className="mt-1 text-navy/70">{b}</p></div></div>)}
      </div>
      <div className="mt-8 rounded-3xl border-2 border-dashed border-vio/30 p-8 text-center text-navy/60">
        <Sprout className="mx-auto mb-3 text-vio" />
        <p className="font-display text-lg text-navy">Depoimentos reais</p>
        <p>Este espaço receberá relatos reais de participantes após os testes-piloto.</p>
      </div>
    </Sec>
  );
}

/* ---------- 12 Oferta ---------- */
export function Offer() {
  const o = [["PLM DreamBand", "R$ 599,00", "Preço planejado para a simulação comercial"], ["PLM DreamApp", "Gratuito", "Plano gratuito com funcionalidades básicas"], ["PLM DreamApp Premium", "R$ 19,90 /mês", "Preço planejado"]];
  return (
    <Sec>
      <H eyebrow="Oferta e acesso antecipado">Seja um dos primeiros a conhecer a PLM.</H>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {o.map(([n, p, d], i) => <Reveal key={n} delay={i * 80}><div className={`card-d h-full ${i === 0 ? "!border-vio/60" : ""}`}><h3 className="font-display text-lg text-lav">{n}</h3><p className="mt-3 font-display text-3xl">{p}</p><p className="mt-2 text-sm text-silver">{d}</p></div></Reveal>)}
      </div>
      <p className="mt-6 text-sm text-silver/80">Valores apresentados como estimativas de planejamento, ainda sujeitos a validação técnica e comercial. Nenhuma cobrança é realizada e não há estoque ou prazo de entrega.</p>
      <p className="mt-8 font-display text-xl">Cadastre-se gratuitamente para receber novidades sobre o desenvolvimento, o lançamento e a disponibilidade dos produtos.</p>
      <div className="mt-6"><Cta /></div>
    </Sec>
  );
}

/* ---------- 14 FAQ ---------- */
export function Faq() {
  const q = [
    ["A PLM realmente consegue controlar meus sonhos?", "Não. A proposta da PLM é explorar possibilidades de influência sobre experiências oníricas por meio de estímulos sensoriais. Não existe garantia de controle dos sonhos."],
    ["Como funciona o DreamBand?", "O dispositivo foi concebido para utilizar sensores e estímulos sonoros personalizados, integrados ao aplicativo."],
    ["Preciso ter o DreamBand para usar o DreamApp?", "Não. O aplicativo poderá oferecer funcionalidades independentes, como diário de sonhos e conteúdos sonoros básicos."],
    ["É possível aprender um idioma enquanto durmo?", "A PLM não promete ensinar novos idiomas durante o sono. Algumas pesquisas investigam a reativação de informações previamente aprendidas."],
    ["O produto já está disponível?", "Não. O DreamBand ainda está em desenvolvimento conceitual e tecnológico. O cadastro é destinado a interessados no lançamento."],
    ["Qual é o preço?", "O preço planejado do DreamBand é de R$ 599,00 e a assinatura Premium está estimada em R$ 19,90 mensais. Os valores são indicativos e poderão mudar."],
    ["O cadastro possui algum custo?", "Não. O pré-cadastro é gratuito e não exige pagamento."],
    ["Meus dados e relatos serão protegidos?", "A PLM pretende seguir princípios de segurança, transparência e proteção de dados, em conformidade com a LGPD."],
    ["O dispositivo prejudica o sono?", "A experiência deverá ser desenvolvida e testada para preservar a continuidade e a qualidade do descanso. Caso os estímulos causem desconforto ou despertares, deverão ser interrompidos."],
    ["Como entro em contato?", "Por um canal demonstrativo e provisório: contato@plm-demo.example. Este endereço é ilustrativo e ainda não é um canal oficial."],
  ];
  return (
    <Sec id="faq" dark={false}>
      <H dark={false} eyebrow="Dúvidas frequentes">Tudo o que você precisa saber.</H>
      <div className="mt-10 max-w-3xl divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
        {q.map(([a, b]) => (
          <details key={a} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">{a}<Plus className="shrink-0 text-vio transition group-open:rotate-45" /></summary>
            <p className="mt-3 text-navy/70">{b}</p>
          </details>
        ))}
      </div>
    </Sec>
  );
}

/* ---------- 15 Fechamento ---------- */
export function Closing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-[#1a1f4d] py-24 text-center md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-vio/30 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-5">
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">Seus sonhos fazem parte do seu universo. Explore novas possibilidades.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-silver">A tecnologia está abrindo novas portas para compreender o sono. A PLM quer fazer parte dessa jornada.</p>
        <div className="mt-9"><Cta>QUERO FAZER PARTE <ArrowRight size={18} /></Cta></div>
      </div>
    </section>
  );
}
