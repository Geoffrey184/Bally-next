"use client";

import Accueil from './components/Accueil/Accueil';
import About from './components/About/About';
import Realisations from './components/Realisations/Realisations';
import Contact from './components/Contact/Contact';



export default function Home() {
  return (
      <main>
        <Accueil />
        <About />
        <Realisations />
        <Contact />
      </main>
  );
}
