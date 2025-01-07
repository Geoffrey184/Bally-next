import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Cloture() {
  return (
    <div>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <Head>
        <title>Clôture - Bally Paysage</title>
        <meta name="description" content="Découvrez nos services de clôture" />
      </Head>
      <h1 className="text-5xl font-bold">Clôture</h1>
      <p className="text-lg mt-4">Nous réalisons des clôtures adaptées à vos besoins pour sécuriser et embellir votre espace.</p>
    </div>
    </div>
  );
}
