import React from "react";
import logo from "@/app/image/logo.png";
import Image from "next/image";

export default function NaveMenu() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
            <a href={'/'}>
              <Image src={logo} alt="Logo" className="h-10 w-auto"/>
                </a>
        </div>

        {/* NAVEGAÇÃO */}
        <nav className="flex items-center gap-6">
          <a href={'/pages/contacts'} className="text-gray-700 hover:text-indigo-600">
            Contato
          </a>
          <a href={'/pages/aboutus'} className="text-gray-700 hover:text-indigo-600">
            Sobre Nós
          </a>
          <a href="#contato" className="text-gray-700 hover:text-indigo-600">
            
          </a>
         
        </nav>
      </div>
    </header>
  );
}