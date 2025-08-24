import { Footer } from "@/app/commponents/common/Footer";
import { Header } from "@/app/commponents/section/Header";
import NaveMenu from "@/app/commponents/common/NaveMenu";
import React from "react";
import Image from 'next/image'
import menina from "@/app/image/menina.jpg";
import menino from "@/app/image/menino.jpg";

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
   <NaveMenu />
      <Header/>
 

      {/* Conteúdo */}
      <div className="flex-1 max-w-7xl mx-auto px-6 py-12 space-y-16 ">
        {/* Introdução */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Quem Somos
          </h1>
          <p className="text-gray-600 text-lg">
            A <span className="font-semibold text-indigo-600">NFeBox</span> nasceu com o propósito
            de transformar a forma como empresas gerenciam seus documentos fiscais.
            Nossa missão é oferecer soluções digitais seguras, escaláveis e fáceis de usar.
          </p>
        </section>

        {/* Missão, visão e valores */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2"><span className="font-semibold text-indigo-600">Missão</span></h3>
            <p className="text-gray-600">
              Tornar o gerenciamento fiscal acessível, seguro e eficiente para todas as empresas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2"><span className="font-semibold text-indigo-600">Visão</span></h3>
            <p className="text-gray-600">
              Ser referência em soluções digitais para documentos fiscais no Brasil.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2"><span className="font-semibold text-indigo-600">Valores</span></h3>
            <p className="text-gray-600">
              Inovação, transparência, segurança e compromisso com nossos clientes.
            </p>
          </div>
        </section>

        {/* Equipe */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Membro 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
               <Image src={menino} alt={""} width={100} className="w-24 h-24 mx-auto rounded-full object-cover mb-4"></Image>
           
              <h3 className="font-semibold text-gray-800">André Souza</h3>
              <p className="text-gray-600 text-sm">CEO & Fundador | Desenvlvedor Sênior</p>
            </div>
            {/* Membro 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Image src={menino} alt={""} width={100} className="w-24 h-24 mx-auto rounded-full object-cover mb-4"></Image>
           
              <h3 className="font-semibold text-gray-800">Diassis Lima</h3>
              <p className="text-gray-600 text-sm">Desenvolvedor Junior</p>
            </div>
            {/* Membro 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Image src={menina} alt={""} width={100} className="w-24 h-24 mx-auto rounded-full object-cover mb-4"></Image>
           
              <h3 className="font-semibold text-gray-800">Mariana Alves</h3>
              <p className="text-gray-600 text-sm">Desenvolvedora Pleno</p>
            </div>
          </div>
        </section>
      </div>

      {/* Rodapé */}
           <Footer />
    </div>
  );
}
