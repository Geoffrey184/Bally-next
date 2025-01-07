// components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (section: string) => {
    setIsOpen(false);
    if (pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Bally Paysage</div>
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleScroll('accueil')} 
            className="text-white hover:bg-gray-700 px-4 py-2 rounded"
          >
            Accueil
          </button>
          <button 
            onClick={() => handleScroll('apropos')} 
            className="text-white hover:bg-gray-700 px-4 py-2 rounded"
          >
            À propos
          </button>
          <div 
            className="relative group"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button 
              className="text-white hover:bg-gray-700 px-4 py-2 rounded"
            >
              Réalisations
            </button>
            {dropdown && (
              <div className="absolute bg-white text-black shadow-lg rounded w-48 mt-0">
                <Link href="/cloture" className="block px-4 py-2 hover:bg-gray-200">Clôture</Link>
                <Link href="/engazonnement" className="block px-4 py-2 hover:bg-gray-200">Engazonnement</Link>
                <Link href="/entretien" className="block px-4 py-2 hover:bg-gray-200">Entretien</Link>
                <Link href="/pavage" className="block px-4 py-2 hover:bg-gray-200">Pavage</Link>
                <Link href="/terrasse" className="block px-4 py-2 hover:bg-gray-200">Terrasse</Link>
              </div>
            )}
          </div>
          <button 
            onClick={() => handleScroll('contact')} 
            className="text-white hover:bg-gray-700 px-4 py-2 rounded"
          >
            Contact
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 absolute top-16 left-0 w-full flex flex-col items-center space-y-6 py-8">
          <button 
            onClick={() => handleScroll('accueil')} 
            className="text-white text-xl"
          >
            Accueil
          </button>
          <button 
            onClick={() => handleScroll('apropos')} 
            className="text-white text-xl"
          >
            À propos
          </button>
          <button 
            onClick={() => handleScroll('realisations')} 
            className="text-white text-xl"
          >
            Réalisations
          </button>
          <button 
            onClick={() => handleScroll('contact')} 
            className="text-white text-xl"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
