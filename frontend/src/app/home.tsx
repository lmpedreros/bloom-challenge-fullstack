'use client';

import Link from 'next/link';

export const Home = () => (
  <div className="flex h-full w-full flex-col p-8 items-center justify-center">
    <div className="text-center">
      <h1 className="text-center text-4xl">Desafío Dev desarrollado</h1>
      <h1 className="text-center text-4xl">por</h1>
      <h1 className="text-center text-5xl font-bold mb-8">Lucas Pedreros</h1>
      
      <Link href="/brands">
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Ver Preguntas Frecuentes
        </button>
      </Link>
    </div>
  </div>
);