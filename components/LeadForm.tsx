"use client";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

type Errs = Partial<Record<"name" | "email" | "adult" | "consent" | "form", string>>;

export default function LeadForm() {
  const [errs, setErrs] = useState<Errs>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<null | { stored: boolean }>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim(), email = String(f.get("email") ?? "").trim();
    const adult = f.get("adult") === "on", consent = f.get("consent") === "on";
    const er: Errs = {};
    if (name.length < 2) er.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) er.email = "Informe um e-mail válido.";
    if (!adult) er.adult = "É necessário ter 18 anos ou mais.";
    if (!consent) er.consent = "O consentimento é obrigatório.";
    setErrs(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, adult, consent }) });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(j.error);
      setDone({ stored: !!j.stored });
    } catch (err) {
      setErrs({ form: err instanceof Error && err.message ? err.message : "Algo deu errado. Tente novamente." });
    } finally { setBusy(false); }
  }

  if (done)
    return (
      <div role="status" className="rounded-2xl border border-lav/30 bg-white/5 p-8 text-center">
        <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-vio"><Check /></span>
        <p className="font-display text-2xl">Você concluiu seu pré-cadastro!</p>
        <p className="mt-2 text-silver">Agradecemos seu interesse pela PLM. Acompanhe as novidades do nosso desenvolvimento.</p>
        {!done.stored && <p className="mt-4 text-xs text-lav">Versão demonstrativa: seus dados não foram armazenados.</p>}
      </div>
    );

  const input = (bad?: string) => `w-full rounded-xl border bg-white/5 px-4 py-3.5 text-ice placeholder:text-silver/50 ${bad ? "border-red-400" : "border-lav/25"}`;
  const Err = ({ id, m }: { id: string; m?: string }) => (m ? <p id={id} className="mt-1 text-sm text-red-300">{m}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-lav/20 bg-white/[.04] p-6 md:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-silver">Nome</label>
        <input id="name" name="name" autoComplete="name" className={input(errs.name)} aria-invalid={!!errs.name} aria-describedby="e-name" />
        <Err id="e-name" m={errs.name} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-silver">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" className={input(errs.email)} aria-invalid={!!errs.email} aria-describedby="e-email" />
        <Err id="e-email" m={errs.email} />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-silver">
          <input type="checkbox" name="adult" className="mt-1 h-4 w-4 accent-[#6546C8]" aria-describedby="e-adult" /> Confirmo que tenho 18 anos ou mais.
        </label>
        <Err id="e-adult" m={errs.adult} />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-silver">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#6546C8]" aria-describedby="e-consent" />
          <span>Concordo com o tratamento dos meus dados para receber novidades da PLM, conforme a{" "}
            <button type="button" className="text-lav underline" onClick={() => window.dispatchEvent(new CustomEvent("plm:legal", { detail: "privacidade" }))}>Política de Privacidade</button>.</span>
        </label>
        <Err id="e-consent" m={errs.consent} />
      </div>
      {errs.form && <p role="alert" className="rounded-lg bg-red-500/10 p-3 text-sm text-red-300">{errs.form}</p>}
      <button type="submit" disabled={busy} className="btn btn-primary w-full disabled:opacity-60">{busy ? "ENVIANDO…" : "QUERO ACESSO ANTECIPADO"}</button>
      <p className="text-center text-xs text-silver/70">Gratuito. Sem cobrança. Na versão demonstrativa, os dados não são armazenados.</p>
    </form>
  );
}
