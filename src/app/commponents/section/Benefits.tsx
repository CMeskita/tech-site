'use client'
import React from "react";
import Banner from "../common/Banner";
import { Cards } from "../common/Cards";
import { Emoji } from "../icons/Emoji";


export  default function Benefits() {
   const destaque=false;
    return(
      <section  className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Por que usar o NFeBox?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Cards  classname={""}>
                    <Emoji> 🛡️</Emoji>
                    <h3 className="text-xl font-semibold mb-2">Segurança na Nuvem</h3>
                    <p className="text-gray-600">Seus documentos fiscais armazenados de forma segura e protegida contra perdas.</p>
              </Cards>
              <Cards classname={""}>
                    <Emoji>🌍</Emoji>
                    <h3 className="text-xl font-semibold mb-2">Acesso de Qualquer Lugar</h3>
                     <p className="text-gray-600">Consulte suas notas fiscais a qualquer momento e de qualquer dispositivo.</p>
                   </Cards>
                <Cards  classname={""}>
                    <Emoji>🔍</Emoji>
                     <h3 className="text-xl font-semibold mb-2">Busca Inteligente</h3>
                     <p className="text-gray-600">Encontre qualquer nota fiscal em segundos, com filtros e pesquisa avançada.</p>
                </Cards>
                <Cards  classname={""}>
                      <Emoji>🗂️</Emoji>
                      <h3 className="text-xl font-semibold mb-2">Fim da Papelada</h3>
                      <p className="text-gray-600">Reduza a bagunça e organize-se de forma 100% digital.</p>
                </Cards>
            </div>
          </div>
        </section>
    );
};