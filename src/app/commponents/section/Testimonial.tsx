import React from "react";

export function Testimonial() {
  return (
      <section className="py-12 px-6 bg-gray-100">
    <div className="max-w-2xl mx-auto text-center">
      <blockquote className="italic text-lg">
        “Antes eu perdia horas por semana organizando XMLs e validando manualmente.
        Agora tudo é automático!”
        <br />
        <span className="block mt-2 font-semibold">
          — Fernanda, setor fiscal de supermercado
        </span>
      </blockquote>
    </div>
  </section>
  )
};