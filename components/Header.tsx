"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [["Produtos", "#produtos"], ["Experiências", "#experiencias"], ["Como funciona", "#como-funciona"], ["Ciência", "#ciencia"], ["Dúvidas", "#faq"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lav/10 bg-navy/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#topo" aria-label="PLM — início"><Image src="/logo-horizontal.png" alt="PLM — Dreams, Designed." width={120} height={41} priority className="h-9 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-sm text-silver md:flex">
          {nav.map(([t, h]) => <a key={h} href={h} className="transition hover:text-white">{t}</a>)}
          <a href="#cadastro" className="btn btn-primary !px-5 !py-2.5 !text-xs">QUERO ACESSO ANTECIPADO</a>
        </nav>
        <button className="rounded-lg p-2 md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-m" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-m" aria-label="Menu móvel" className="flex flex-col gap-1 border-t border-lav/10 bg-navy px-5 pb-5 pt-3 md:hidden">
          {nav.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-silver hover:bg-white/5">{t}</a>)}
          <a href="#cadastro" onClick={() => setOpen(false)} className="btn btn-primary mt-2">QUERO ACESSO ANTECIPADO</a>
        </nav>
      )}
    </header>
  );
}
