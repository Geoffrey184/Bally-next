import Link from "next/link";


export default function About() {
    return (
        <section id="realisations" className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
          <h2 className="text-4xl font-semibold mb-8">Nos RÉALISATIONS</h2>
          <p className="text-lg mb-12">Découvrez nos services de clôture, d&apos;engazonnement, d&apos;entretien et de pavage.</p>
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
    );
}