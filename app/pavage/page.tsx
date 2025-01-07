import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Pavage() {
  return (
    <div>
        <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-center">
      <Head>
        <title>Pavage - Bally Paysage</title>
        <meta name="description" content="Nos solutions de pavage" />
      </Head>
      <h1 className="text-5xl font-bold">Pavage</h1>
      <p className="text-lg mt-4">Des pavages durables et esthétiques pour vos allées et jardins.</p>
    </div>
    </div>
  );
}
