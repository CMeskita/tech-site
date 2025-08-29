'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import build from "@/app/image/build.png";
import servico from "@/app/image/servico.jpg";
import marketing from "@/app/image/markting.jpg";

const imagens = [
build,marketing,  servico
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
    <div className="relative w-full h-[300px] md:h-full overflow-hidden rounded-2xl shadow-lg">
      {/* Imagem atual */}
      <Image src={imagens[atual]} alt={"Banner"}  className="w-full h-full object-cover transition-all duration-700"/>

      {/* Indicadores */}
      <div className="rounded-2xl transition duration-300 transform hover:-translate-x-3 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setAtual(index)}
            className={`w-3 h-3 rounded-full ${
              atual === index ? "bg-green-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
