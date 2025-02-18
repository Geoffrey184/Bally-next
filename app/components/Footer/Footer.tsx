export default function Footer() {
  return (
      <footer className="bg-gray-800 text-white text-center p-4 text-sm">
          <p>&copy; 2025 Bally Paysages. Tous droits réservés.</p>
          <p><a href="mailto:contact@bally-paysage.fr" className="underline">contact@bally-paysage.fr</a></p>
          <nav className="mt-2">
              <a href="/mentions-legales" className="underline mx-2">Mentions Légales</a>
              <a href="/politique-de-confidentialite" className="underline mx-2">Politique de Confidentialité</a>
              <a href="/cgu" className="underline mx-2">CGU</a>
          </nav>
      </footer>
  );
}
