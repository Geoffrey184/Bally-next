"use client"; 

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <Head>
        <title>Bally Paysage</title>
        <meta name="description" content="Page vitrine de Bally Paysage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div className="pt-24">
        <section id="accueil" className="min-h-screen flex flex-col items-center justify-center bg-green-200 text-center">
          <h1 className="text-5xl font-bold">Bienvenue chez Bally Paysage</h1>
          <p className="text-lg mt-4">Votre expert paysagiste pour des espaces verts magnifiques.</p>
        </section>

        <section id="apropos" className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
          <h2 className="text-4xl font-semibold">À propos de nous</h2>
          <p className="text-lg mt-4">Nous sommes une entreprise spécialisée dans l'aménagement paysager depuis plus de 10 ans.</p>
        </section>

        <section id="realisations" className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
          <h2 className="text-4xl font-semibold mb-8">Nos RÉALISATIONS</h2>
          <p className="text-lg mb-12">Découvrez nos services de clôture, d'engazonnement, d'entretien et de pavage.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            <Link href="/cloture" className="bg-green-400 p-16 rounded-lg shadow-lg text-white text-3xl hover:bg-green-500 transition">
              Clôture
            </Link>
            <Link href="/engazonnement" className="bg-blue-400 p-16 rounded-lg shadow-lg text-white text-3xl hover:bg-blue-500 transition">
              Engazonnement
            </Link>
            <Link href="/entretien" className="bg-yellow-400 p-16 rounded-lg shadow-lg text-white text-3xl hover:bg-yellow-500 transition">
              Entretien
            </Link>
            <Link href="/pavage" className="bg-red-400 p-16 rounded-lg shadow-lg text-white text-3xl hover:bg-red-500 transition">
              Pavage
            </Link>
            <Link href="/terrasse" className="bg-purple-400 p-16 rounded-lg shadow-lg text-white text-3xl hover:bg-purple-500 transition">
              Terrasse
            </Link>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-green-300 text-center">
          <h2 className="text-4xl font-semibold">Contactez-nous</h2>
          <p className="text-lg mt-4">Envie de transformer votre jardin ? Contactez-nous dès aujourd'hui.</p>
        </section>
      </div>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Bally Paysage. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
