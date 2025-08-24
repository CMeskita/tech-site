'use client'
import React, { useState, useEffect } from "react";

const imagens = [
  "https://www.imagemhost.com.br/images/2024/11/29/a-cinematic-shot-of-a-robot-with-a-large-screen-on-6aQQP2KXTzKkmUMCPvsGQA-A_mrp2_MRzmXAytE-VKW4Q.jpg",
  "https://www.imagemhost.com.br/images/2024/11/29/a-cinematic-shot-of-a-robot-with-a-large-screen-on-6aQQP2KXTzKkmUMCPvsGQA-A_mrp2_MRzmXAytE-VKW4Q.jpg",
  "https://www.imagemhost.com.br/images/2024/11/29/a-cinematic-shot-of-a-robot-with-a-large-screen-on-6aQQP2KXTzKkmUMCPvsGQA-A_mrp2_MRzmXAytE-VKW4Q.jpg"
];

export default function Banner() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAtual((prev) => (prev + 1) % imagens.length);
    }, 4000); // troca a cada 4 segundos
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
      {/* Imagem atual */}
      <img
        src={imagens[atual]}
        alt="Banner"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setAtual(index)}
            className={`w-3 h-3 rounded-full ${
              atual === index ? "bg-indigo-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
