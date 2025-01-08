import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Entretien() {
  return (
    <div>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center">
      <Head>
        <title>Entretien - Bally Paysage</title>
        <meta name="description" content="Entretien des espaces verts" />
      </Head>
      <h1 className="text-5xl font-bold">Entretien</h1>
      <p className="text-lg mt-4">Nous assurons l&apos;entretien régulier de vos espaces verts.</p>
    </div>
    </div>
  );
}
