
import { Instagram } from "../icons/Instagram";
import { LinkedIn } from "../icons/Linkedin";
import { Localizacao } from "../icons/Localizacao";
import Image from 'next/image'
import whats from "@/app/image/WhatsApp.svg.png";
import maps from "@/app/image/googlemaps.png";


export function ContatosMidia() {
     const endereco = "Av. Beira Mar, Fortaleza, CE, Brasil"
    const whatsapp = "5585999999999"
  return (
   <section className="py-12 px-6  ">
    <div className="max-w-lg mx-auto text-center">

      <ul className="space-y-2 ">
        <li className="transition duration-300 transform hover:-translate-y-2">
                 <a href={`https://wa.me/${whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20NF%20Web`} target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md" >
                           <Image src={whats} alt={""} width={0} className="w-8 h-8 rounded-t-lg "/>
                        <div>
                          <p className="font-semibold text-gray-800">WhatsApp</p>
                          <p className="text-gray-600">(85) 99009999</p>
                        </div>
                        </a>
        </li>
        <li className="transition duration-300 transform hover:-translate-y-2">
                <a href={ `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}` } target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                      
                       <Image src={maps}   alt={""} width={0} className="w-8 h-8 rounded-t-lg "/>
                   
                        <div>
                          <p className="font-semibold text-gray-800 text-left">Endereço</p>
                          <p className="text-gray-600">Fortaleza - CE, Brasil</p>
                        </div>
                      </a>
        </li>

        <li className="transition duration-300 transform hover:-translate-y-2"> 
                <a href="https://www.instagram.com/SeuPerfil" target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                      <Instagram/>
                        <div>
                          <p className="font-semibold text-gray-800">Instagram</p>
                            <p className="text-gray-600">/SeuPerfil</p>
                        </div>
                </a>
        </li>
    
        <li className="transition duration-300 transform hover:-translate-y-2"><a href="https://www.linkedin.com/in/SeuPerfil" target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
        <LinkedIn/>
         <div>
                          <p className="font-semibold text-gray-800">LinkedIn</p>
                            <p className="text-gray-600">/SeuPerfil</p>
                        </div>
        </a></li>
      </ul>
    </div>
  </section>
  )};