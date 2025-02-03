"use client"; // Marca el componente como del lado del cliente
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    // Simula un tiempo de carga (por ejemplo, 2 segundos)
    const timer = setTimeout(() => {
      // Guarda un indicador en localStorage
      localStorage.setItem('splashShown', 'true');
      router.push('/welcome'); // Redirige a la pantalla de bienvenida
    }, 2000);

    return () => clearTimeout(timer); // Limpia el timer al desmontar el componente
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <h1 className="text-white text-4xl font-bold">EASV Leads Finder</h1>
    </div>
  );
}