import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">¡Oops!</h1>
      <p className="text-gray-600 mb-8">Algo salió mal. Por favor, inténtalo de nuevo más tarde.</p>
      <Link href="/" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Volver al Inicio
      </Link>
    </div>
  );
}