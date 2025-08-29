import React from "react";
import logo from "@/app/image/logo.png";
import Image from "next/image";
import ico from "@/app/Favicon.ico";

export default function NavMenu() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center">
            <Image src={ico} alt={""} width={100} className="w-5 h-5"/>
            <a href={'/'}>
            
              
              <span className="text-3xl ml-2 text-green-700 font-bold ">
                NfeBox</span>
                </a>
                 
        </div>

        {/* NAVEGAÇÃO */}
        <nav className="flex items-center gap-6 text-dark-700 font-medium">
          <a href={'/pages/contacts'} className="hover:text-green-800">
            Contato
          </a>
          <a href={'/pages/aboutus'} className="hover:text-green-800">
            Sobre Nós
          </a>
          <a href="#contato" className=" hover:text-greeb-800">
            
          </a>
         
        </nav>
      </div>
    </header>
  );
}