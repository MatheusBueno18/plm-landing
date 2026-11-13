"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const DOCS: Record<string, { t: string; p: string[] }> = {
  privacidade: { t: "Política de Privacidade", p: [
    "Documento demonstrativo, elaborado para fins acadêmicos. A PLM é uma empresa conceitual.",
    "Dados coletados no pré-cadastro: nome, e-mail e a confirmação de maioridade e consentimento. Finalidade exclusiva: enviar novidades sobre o desenvolvimento, o lançamento e a disponibilidade dos produtos.",
    "Na versão demonstrativa, os dados não são armazenados. Em uma versão real, o tratamento seguiria a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018), com base no consentimento do titular.",
    "O titular poderá solicitar confirmação de tratamento, acesso, correção, exclusão e revogação do consentimento a qualquer momento pelo canal de contato.",
    "Relatos de sonhos, quando o DreamApp existir, serão tratados como informações pessoais sensíveis à privacidade, com acesso restrito ao próprio usuário." ] },
  termos: { t: "Termos de Uso", p: [
    "Documento demonstrativo, elaborado para fins acadêmicos.",
    "Esta página apresenta um projeto conceitual. Os produtos PLM DreamBand e PLM DreamApp estão em desenvolvimento e não estão à venda; nenhuma cobrança é realizada.",
    "Preços e funcionalidades são estimativas de planejamento, sujeitas a validação técnica e comercial, e podem mudar.",
    "A PLM não promete controle de sonhos nem resultados garantidos. Seus produtos não são dispositivos médicos e não substituem orientação de profissionais de saúde.",
    "O pré-cadastro é gratuito, destinado a maiores de 18 anos, e não gera obrigação de compra." ] },
  contato: { t: "Contato", p: [
    "Canal demonstrativo e provisório: contato@plm-demo.example",
    "Este endereço é ilustrativo e ainda não é um canal oficial de atendimento." ] },
};

export default function Footer() {
  const [k, setK] = useState<string | null>(null);
  useEffect(() => {
    const open = (e: Event) => setK((e as CustomEvent<string>).detail);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setK(null);
    window.addEventListener("plm:legal", open); window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("plm:legal", open); window.removeEventListener("keydown", esc); };
  }, []);
  const doc = k ? DOCS[k] : null;
  const btn = "text-silver transition hover:text-white";
  return (
    <footer className="border-t border-lav/10 bg-[#0a1020] pb-28 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Image src="/logo-horizontal.png" alt="PLM — Dreams, Designed." width={170} height={58} className="h-14 w-auto" />
          <p className="mt-4 max-w-md text-sm text-silver">Startup de tecnologia do sono que une inteligência artificial, estímulos sensoriais e experiências personalizadas. Sua mente. Seu universo.</p>
        </div>
        <ul className="grid grid-cols-3 gap-4 text-sm md:justify-items-end">
          {Object.entries(DOCS).map(([id, d]) => <li key={id}><button className={btn} onClick={() => setK(id)}>{d.t === "Política de Privacidade" ? "Privacidade" : d.t}</button></li>)}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-6xl space-y-1 border-t border-lav/10 px-5 pt-6 text-xs text-silver/70">
        <p>PLM Tecnologia do Sono — empresa conceitual para fins acadêmicos. CNPJ demonstrativo: 00.000.000/0000-00 (não válido, exclusivamente ilustrativo).</p>
        <p>Produtos em desenvolvimento. Os valores apresentados são estimativas de planejamento.</p>
        <p>© 2026 PLM. Todos os direitos reservados.</p>
      </div>
      {doc && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4" onClick={() => setK(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="dlg-t" onClick={(e) => e.stopPropagation()} className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-lav/20 bg-navy p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id="dlg-t" className="font-display text-2xl">{doc.t}</h2>
              <button autoFocus aria-label="Fechar" onClick={() => setK(null)} className="rounded-lg p-1 hover:bg-white/10"><X /></button>
            </div>
            <div className="space-y-3 text-sm text-silver">{doc.p.map((x) => <p key={x}>{x}</p>)}</div>
          </div>
        </div>
      )}
    </footer>
  );
}
