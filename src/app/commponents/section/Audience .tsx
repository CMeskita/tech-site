'use client'
import React from "react";
import { Cards } from "../common/Cards";
import Image from 'next/image'
import homemnfe from "@/app/image/homen-nfe.jpg";
import microempreendedor from "@/app/image/microempreendedor.jpg";
import frenteloja from "@/app/image/frentedeloja.jpg";
import contabilidade from "@/app/image/contabil.jpg";
import { Button } from "../common/Button";

export function Audience() {
  const destaque=true;
  return (
    
      <section  className="py-20 bg-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12">NFeBox Feito para Você!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <Image src={homemnfe} alt={""} width={0} className="rounded-t-lg "/>
                     <Cards  classname={""}>
                        <h3 className="text-xl text-green-800 font-semibold mb-6">Contadores e escritórios de contabilidade </h3>
   
                            
                                <ul className="text-left text-gray-600 space-y-2">
                                  <li>✔️ Segurança dos dados</li>
                                  <li>✔️ Acesso remoto</li>
                                  <li>✔️Centralização das Notas</li>
                                  <li className="mb-6">✔️Compartilhamento facilitado</li>
                                </ul>
                       <Button  bgcolor="bg-green-600" destaque={destaque}>Saiba mais</Button>
                    </Cards>  
                  </div>
                      <div>
                    <Image src={microempreendedor} alt={""} width={0} className="rounded-t-lg "/>
                     <Cards  classname={""}>
                        <h3 className="text-xl text-green-800  font-semibold mb-6">Pequenos e médios comércios</h3>
   
                            
                                <ul className="text-left text-gray-600 space-y-2">
                                  <li>✔️ Segurança contra perdas</li>
                                  <li>✔️ Organização simples</li>
                                  <li>✔️Facilidade de acesso</li>
                                  <li className="mb-6">✔️Agilidade em vendas</li>
                                </ul>
                       <Button  bgcolor="bg-green-600" destaque={destaque}>Saiba mais</Button>
                    </Cards>  
                  </div>
                      <div>
                    <Image src={contabilidade} alt={""} width={0} className="rounded-t-lg "/>
                     <Cards  classname={""}>
                        <h3 className="text-xl text-green-800 font-semibold mb-6">Profissionais do setor fiscal </h3>
   
                            
                                <ul className="text-left text-gray-600 space-y-2">
                                  <li><span className="text-green-500">✔️</span>Segurança dos dados</li>
                                  <li>✔️ Acesso remoto</li>
                                  <li>✔️Centralização das Notas</li>
                                  <li className="mb-6">✔️Compartilhamento facilitado</li>
                                </ul>
                       <Button  bgcolor="bg-green-600" destaque={destaque}>Saiba mais</Button>
                    </Cards>  
                  </div>
                      <div>
                    <Image src={frenteloja} alt={""} width={0} className="rounded-t-lg "/>
                     <Cards  classname={""}>
                        <h3 className="text-xl text-green-800 font-semibold mb-6">Operadores de frente de loja que precisam validar XMLs </h3>
   
                           
                                <ul className="text-left text-gray-600 space-y-2">
                                  <li>✔️ Redução de fila</li>
                                  <li>✔️ Menos papel no balcão</li>
                                  <li className="mb-6">✔️Produtividade e confiança</li>
                                </ul>
                       <Button  bgcolor="bg-green-600" destaque={destaque}>Saiba mais</Button>
                    </Cards>  
                  </div>
                 
               
                </div>
              </div>
            </section>

  )

};