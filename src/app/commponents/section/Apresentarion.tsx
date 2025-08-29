import Banner from "../common/Banner";

export function Apresentation(){
   return (
   <section className="flex items-center min-h-[90vh] ">
     <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-16 md:py-0">
       <div className="md:flex-1 text-center md:text-left mb-8 md:mb-0">
               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                 Organize Suas Notas Fiscais Sem Complicações
               </h1>
               <p className="text-lg text-gray-700 mb-8">
                 NFeBox: a solução inteligente para armazenar e gerenciar suas notas fiscais eletrônicas. Economize tempo e ganhe tranquilidade.
               </p>
                 <a href="#planos" className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-800 transition duration-300">
                 Acessar o Sistema NfeBox
               </a>
       </div>
        
         
        <div className="relative w-[400px] h-[450px] md:w-[500px] md:h-[600px] bg-white rounded-2xl shadow-2xl p-4 overflow-hidden">
             
                <Banner/>
         <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
           NFeBox
     </div>
      </div>     </div>
   </section>)

}