import React from "react";

export default function ContatoGmail() {
  const email = "contato@nfweb.com";
  const assunto = "Quero saber mais";
  const corpo = "Olá, tenho interesse em saber mais sobre o NF Web.";

  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Entre em contato conosco
      </h2>
      <p className="text-gray-600 mb-6">
        Clique no botão abaixo para abrir o Gmail e enviar sua mensagem.
      </p>

      <a
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
      >
        Enviar via Gmail
      </a>
    </div>
  );
}
