import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Engazonnement() {
  return (
    <div>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center">
      <Head>
        <title>Engazonnement - Bally Paysage</title>
        <meta name="description" content="Nos services d'engazonnement" />
      </Head>
      <h1 className="text-5xl font-bold">Engazonnement</h1>
      <p className="text-lg mt-4">Des pelouses parfaites pour vos jardins et espaces verts.</p>
    </div>
    </div>
  );
}