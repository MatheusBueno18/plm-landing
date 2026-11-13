import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 }); }
  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim();
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || b.adult !== true || b.consent !== true)
    return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 422 });

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return NextResponse.json({ ok: true, stored: false }); // modo demonstrativo: nada é gravado

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.LEAD_WEBHOOK_TOKEN) headers.Authorization = `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`;
    const r = await fetch(url, { method: "POST", headers, body: JSON.stringify({ name, email, source: "plm-landing", consentAt: new Date().toISOString() }) });
    if (!r.ok) throw new Error("webhook");
    return NextResponse.json({ ok: true, stored: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Não foi possível enviar agora. Tente novamente em instantes." }, { status: 502 });
  }
}
