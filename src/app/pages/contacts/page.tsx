import { Footer } from "@/app/commponents/common/Footer";
import { Header } from "@/app/commponents/section/Header";
import NavMenu from "@/app/commponents/common/NavMenu";
import React from "react";
import { SignupForm } from "@/app/commponents/contactroot/SignupForm";
import { ContatosMidia } from "@/app/commponents/contactroot/ContactMidia";

export default function Contato() {
   
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
        <NavMenu />
        <Header/>

      {/* Conteúdo */}
      <div className="flex-1 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        
        {/* Formulário */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fale Conosco</h2>
          
            <SignupForm />
        
        </div>

        {/* Informações de contato */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossos Contatos</h2>

        <ContatosMidia />
      
        </div>
      </div>

      {/* Rodapé */}
           <Footer />
    </div>
  );
}

