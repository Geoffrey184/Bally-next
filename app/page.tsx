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

      {/* <nav className="bg-gray-800 p-4 flex justify-center space-x-8 fixed top-0 w-full z-50 shadow-md">
        <a href="#accueil" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Accueil</a>
        <a href="#apropos" className="text-white hover:bg-gray-700 px-4 py-2 rounded">À propos</a>
        <div 
          className="relative"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <a href="#realisations" className="text-white hover:bg-gray-700 px-4 py-2 rounded cursor-pointer">Réalisations</a>
          {dropdown && (
            <div className="absolute bg-white text-black shadow-lg rounded w-48 mt-2">
              <Link href="/cloture" className="block px-4 py-2 hover:bg-gray-200">Clôture</Link>
              <Link href="/engazonnement" className="block px-4 py-2 hover:bg-gray-200">Engazonnement</Link>
              <Link href="/entretien" className="block px-4 py-2 hover:bg-gray-200">Entretien</Link>
              <Link href="/pavage" className="block px-4 py-2 hover:bg-gray-200">Pavage</Link>
              <Link href="/terrasse" className="block px-4 py-2 hover:bg-gray-200">Terrasse</Link>
            </div>
          )}
        </div>
        <a href="#contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Contact</a>
      </nav> */}
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

        <section id="realisations" className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
          <h2 className="text-4xl font-semibold">Nos-REALISATIONS</h2>
          <p className="text-lg mt-4">Découvrez nos services de clôture, d'engazonnement, d'entretien et de pavage.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          <Link href="/cloture" className="bg-green-400 p-8 rounded-lg shadow-lg text-white text-2xl hover:bg-green-500 transition">
            Clôture
          </Link>
          <Link href="/engazonnement" className="bg-blue-400 p-8 rounded-lg shadow-lg text-white text-2xl hover:bg-blue-500 transition">
            Engazonnement
          </Link>
          <Link href="/entretien" className="bg-yellow-400 p-8 rounded-lg shadow-lg text-white text-2xl hover:bg-yellow-500 transition">
            Entretien
          </Link>
          <Link href="/pavage" className="bg-red-400 p-8 rounded-lg shadow-lg text-white text-2xl hover:bg-red-500 transition">
            Pavage
          </Link>
          <Link href="/terrasse" className="bg-purple-400 p-8 rounded-lg shadow-lg text-white text-2xl hover:bg-purple-500 transition">
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
