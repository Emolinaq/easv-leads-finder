"use client"; // Marca el componente como del lado del cliente
import { useState, useEffect } from 'react'; // Importa useEffect
import { useRouter } from 'next/navigation'; // Importa useRouter
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import LeadCard from '../components/LeadCard';
import Loading from '../components/Loading'; // Importa el componente de carga

export default function Home() {
  const [results, setResults] = useState([]); // Estado para almacenar los resultados de la búsqueda
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const router = useRouter();

 // Verifica si la Splash Screen ya se ha mostrado
 useEffect(() => {
  const splashShown = localStorage.getItem('splashShown');
  if (!splashShown) {
    router.push('/splash'); // Redirige a la Splash Screen solo si no se ha mostrado antes
  }

  // Añadir un listener para el evento beforeunload
  const handleBeforeUnload = () => {
    localStorage.removeItem('splashShown'); // Borra el indicador al cerrar la aplicación
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  // Limpiar el listener al desmontar el componente
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, [router]);


  // Función para manejar la búsqueda de leads
  const handleSearch = async (query) => {
    setLoading(true);
    console.log('Buscando:', query);
    // Simulación de una llamada a la API
    setTimeout(() => {
      const mockResults = [
        { id: 1, name: 'Empresa A', sector: 'Tecnología', location: 'Ciudad de México' },
        { id: 2, name: 'Empresa B', sector: 'Manufactura', location: 'Monterrey' },
        { id: 3, name: 'Empresa C', sector: 'Servicios Financieros', location: 'Guadalajara' },
      ];
      setResults(mockResults);
      setLoading(false);
    }, 1000); // Simula un retraso de 1 segundo
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bienvenido a EASV Leads Finder</h1>
        <SearchBar onSearch={handleSearch} />
        {/* Mostrar resultados de la búsqueda */}
        <div className="mt-4">
          {loading ? (
            <Loading /> // Muestra el componente de carga
          ) : results.length > 0 ? (
            results.map((result) => (
              <LeadCard key={result.id} lead={result} />
            ))
          ) : (
            <p className="text-gray-500">No hay resultados para mostrar.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}