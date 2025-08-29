
import Image from 'next/image'
import whats from "@/app/image/WhatsApp.svg.png";


export function WhatsFlutuante() {
    const whatsapp="5585999999999";
    return (
         <a href={`https://wa.me/${whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20NF%20Web`} target="_blank" aria-label="Fale conosco no WhatsApp" className="fixed w-14 h-14 bottom-5 right-5  text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-100 transform hover:scale-100 transition duration-300">
     <Image src={whats} alt={""} width={0} className="w-10 h-10 rounded-t-lg "/>
  </a>
    );
}
