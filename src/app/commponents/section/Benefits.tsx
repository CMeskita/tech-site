import React from "react";

export  default function Benefits() {
  return (
  <section className="py-12 px-6 max-w-4xl mx-auto ">
    <h2 className="text-2xl font-semibold mb-4">
     <span className="font-semibold text-indigo-600">NFeBox</span>, feito  para quem lida com documentos fiscais todos os dias
    </h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>📂 Upload e leitura automática de XMLs</li>
      <li>🔍 Consulta de status direto na SEFAZ</li>
      <li>📥 Download rápido de DANFE (PDF)</li>
      <li>📊 Relatórios fiscais organizados por período</li>
      <li>🔔 Notificações por e-mail quando houver rejeições ou falhas</li>
    </ul>
  </section>)
};