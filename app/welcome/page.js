import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a EASV Leads Finder</h1>
      <p className="text-gray-600 mb-8">Encuentra y cualifica leads de manera rápida y eficiente.</p>
      <div className="space-x-4">
        <Link href="/login" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Iniciar Sesión
        </Link>
        <Link href="/register" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Registrarse
        </Link>
      </div>
    </div>
  );
}