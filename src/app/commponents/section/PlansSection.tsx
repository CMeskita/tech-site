'use client'
import React from "react";
import { Button } from "../common/Button";
import { useRouter } from "next/navigation";

type Plano = {
  nome: string;
  preco: string;
  descricao: string;
  recursos: string[];
  destaque?: boolean;
};

const planos: Plano[] = [
  {
    nome: "Plano Gratuito",
    preco: "R$ 0/mês",
    descricao: "Ideal para quem está começando.",
    recursos: [
      "Upload limitado de XMLs",
      "Validação básica na SEFAZ",
      "Suporte por e-mail"
    ]
  },
  {
    nome: "Plano Profissional",
    preco: "R$ 49/mês",
    descricao: "Para pequenos negócios que precisam de eficiência.",
    recursos: [
      "Upload ilimitado de XMLs",
      "Relatórios mensais",
      "Notificações por e-mail"
    ],
    destaque: true
  },
  {
    nome: "Plano Avançado",
    preco: "R$ 99/mês",
    descricao: "Completo para empresas que precisam de integrações.",
    recursos: [
      "Integrações com ERP",
      "Relatórios avançados",
      "Suporte prioritário"
    ]
  }
];

export default function PlansSection() {
  
  const router = useRouter();
  function handleSelectPlan()
  {
    router.push('/pages/contcts');
  }
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Escolha o plano ideal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className={`rounded-2xl shadow-lg p-6 border ${
                plano.destaque ? "border-green-800 scale-105" : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 py-6">{plano.nome}</h3>
              <p className="text-5xl font-bold text-green-600 mb-4">{plano.preco}</p>
              <p className="text-gray-600 mb-4">{plano.descricao}</p>
              <ul className="space-y-2 text-left mb-6">
                {plano.recursos.map((recurso, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-600">✔</span>
                    <span>{recurso}</span>
                  </li>
                ))}
              </ul>
                <Button onClick={handleSelectPlan} bgcolor="bg-green-600" destaque={plano.destaque}>
                    Escolher {plano.nome}
                </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
