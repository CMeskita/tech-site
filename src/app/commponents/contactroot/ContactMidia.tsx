import { Instagram } from "lucide-react";
import { LinkedIn } from "../icons/Linkedin";
import { Localizacao } from "../icons/Localizacao";
import { WhatsApp } from "../icons/Whatsapp";

export function ContatosMidia() {
     const endereco = "Av. Beira Mar, Fortaleza, CE, Brasil"
    const telefone = " (85) 4011-8350"
  return (
   <section className="py-12 px-6 ">
    <div className="max-w-2xl mx-auto text-center">

      <ul className="space-y-2">
        <li>
                 <a href={`https://web.whatsapp.com/send?phone=${telefone}` } target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md" >
                       <WhatsApp/>
                        <div>
                          <p className="font-semibold text-gray-800">WhatsApp</p>
                          <p className="text-gray-600">(85) 99009999</p>
                        </div>
                        </a>
        </li>
        <li>
                <a href={ `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}` } target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                       <Localizacao/>
                        <div>
                          <p className="font-semibold text-gray-800">Endereço</p>
                          <p className="text-gray-600">Fortaleza - CE, Brasil</p>
                        </div>
                      </a>
        </li>

        <li> 
                <a href="https://www.instagram.com/SeuPerfil" target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                      <Instagram/>
                        <div>
                          <p className="font-semibold text-gray-800">Instagram</p>
                            <p className="text-gray-600">/SeuPerfil</p>
                        </div>
                </a>
        </li>
    
        <li><a href="https://www.linkedin.com/in/SeuPerfil" target="_blank" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
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