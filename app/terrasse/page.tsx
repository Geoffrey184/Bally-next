import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Terrasse() {
  return (
    <div>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-center">
      <Head>
        <title>Terrasse - Bally Paysage</title>
        <meta name="description" content="Construction de terrasses" />
      </Head>
      <h1 className="text-5xl font-bold">Terrasse</h1>
      <p className="text-lg mt-4">Création de terrasses sur mesure pour profiter de vos extérieurs.</p>
    </div>
    </div>
  );
}
