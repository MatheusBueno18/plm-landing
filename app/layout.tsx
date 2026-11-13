import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

const title = "PLM — Dreams, Designed. | Explore novas possibilidades dos sonhos.";
const description = "Conheça a PLM, uma startup que une inteligência artificial, tecnologia do sono e experiências oníricas personalizadas.";

export const metadata: Metadata = {
  title, description,
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "PLM", images: [{ url: "/logo-vertical.png", width: 1254, height: 1254, alt: "Ícone oficial da PLM" }] },
};
export const viewport: Viewport = { themeColor: "#10172C", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
