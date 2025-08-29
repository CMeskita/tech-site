'use client'
import React, { useState } from "react";
import { Button } from "../common/Button";

export const SignupForm: React.FC = () => {
  const destaque=true;
  const [form, setForm] = useState({ nome: "", email: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviado com sucesso! Obrigada pelo interesse.");
    setForm({ nome: "", email: "" });
  };

  return (
    <section id="cadastro" className="py-12 px-6 bg-green-100 rounded-xl shadow-md">
      
      <div className="max-w-lg mx-auto text-center ">
        <h2 className="text-2xl font-bold mb-4">Receba acesso antecipado</h2>
        <p className="mb-6">
          Entre para a lista e seja um dos primeiros a testar gratuitamente.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            className="w-full p-3 rounded border border-gray-300"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="w-full p-3 rounded border border-gray-300"
            value={form.email}
            onChange={handleChange}
            required
          />
         <Button  bgcolor={"bg-green-600"} destaque={destaque}>Quero testar agora</Button>
            
      
        </form>
        {status && <p className="mt-4 text-green-600 font-semibold">{status}</p>}
      </div>
    </section>
  );
};