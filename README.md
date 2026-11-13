# PLM — Dreams, Designed. (landing page)

Next.js 14 (App Router) + TypeScript + Tailwind + Lucide. Sem serviços pagos para visualizar.

## 1. Executar localmente
```bash
npm install
npm run dev        # http://localhost:3000
```
Requer Node 18.17+. (Fontes Space Grotesk e Inter são baixadas pelo `next/font` no build.)

## 2. Visualizar a prévia
`npm run build && npm start` mostra a versão de produção em http://localhost:3000.

## 3. Adicionar as imagens oficiais
As logos oficiais já estão em `public/` (`logo-horizontal.png`, `logo-vertical.png`; `app/icon.png` é o favicon).
Os visuais do DreamBand, do DreamApp e dos 4 cards de experiência são **composições conceituais em código** (`components/sections.tsx`: `HeroVisual`, `Phone`, `Band`). Para usar renders finais, coloque-os em `public/` e troque esses componentes por `<Image src="/seu-arquivo.webp" alt="..." width height />`.

## 4. Deploy na Vercel
1. Envie a pasta a um repositório no GitHub.
2. Em vercel.com → *Add New Project* → importe o repositório (preset Next.js detectado automaticamente).
3. Clique em *Deploy*. (Ou: `npm i -g vercel && vercel`.)

## 5. Receber cadastros reais
`app/api/lead/route.ts` valida os dados e, se existir `LEAD_WEBHOOK_URL`, envia um POST JSON `{name,email,source,consentAt}` para ela (Formspree, Zapier, Make, n8n, Supabase etc.). Na Vercel: *Settings → Environment Variables* → `LEAD_WEBHOOK_URL` (e opcional `LEAD_WEBHOOK_TOKEN`) → redeploy. Copie `.env.example` para `.env.local` para testar localmente. Sem a variável, o formulário informa que está em modo demonstrativo e **nada é armazenado**.

## 6. Testar no mobile
- No navegador: DevTools → modo dispositivo (Ctrl+Shift+M), testando 360px, 768px e 1280px.
- No celular, na mesma rede Wi-Fi: `npm run dev -- -H 0.0.0.0` e abra `http://IP-DO-SEU-PC:3000`; ou use a URL de preview da Vercel.

## Estrutura
`app/` (layout, página, API) · `components/sections.tsx` (seções 01–12, 14, 15) · `Header`, `LeadForm` (seção 13), `Footer` (seção 16 + modais de Privacidade, Termos e Contato) · `Reveal` (animação de entrada, respeita `prefers-reduced-motion`).
