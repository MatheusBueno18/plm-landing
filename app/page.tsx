import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Hero, Identify, Problem, Solution, Products, Experiences, How, Benefits, Science, Why, Trust, Offer, Faq, Closing, Sec, H } from "@/components/sections";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-navy">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero /><Identify /><Problem /><Solution /><Products /><Experiences /><How /><Benefits />
        <Science /><Why /><Trust /><Offer />
        <Sec id="cadastro">
          <div className="mx-auto max-w-xl text-center">
            <H center eyebrow="Pré-cadastro gratuito">Entre para o universo PLM.</H>
            <p className="mt-4 text-silver">Cadastre-se e acompanhe de perto o desenvolvimento de uma nova experiência tecnológica.</p>
            <Reveal className="mt-10 text-left"><LeadForm /></Reveal>
          </div>
        </Sec>
        <Faq /><Closing />
      </main>
      <Footer />
      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <a href="#cadastro" className="btn btn-primary w-full">QUERO ACESSO ANTECIPADO</a>
      </div>
    </>
  );
}
