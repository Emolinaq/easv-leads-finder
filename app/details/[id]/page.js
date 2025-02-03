import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function LeadDetails({ params }) {
  const { id } = params;

  // Simulación de datos de un lead
  const lead = {
    id: 1,
    name: 'Empresa A',
    sector: 'Tecnología',
    location: 'Ciudad de México',
    description: 'Una empresa líder en soluciones tecnológicas.',
    contact: 'contacto@empresaA.com',
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Detalles del Lead</h1>
        <div className="bg-white shadow p-6 rounded-lg ">
          <h2 className="text-xl font-semibold text-gray">{lead.name}</h2>
          <p className="text-gray-600 mt-2 text-gray-500">{lead.sector} - {lead.location}</p>
          <p className="mt- text-gray-500">{lead.description}</p>
          <p className="mt-4 text-gray-500">
            <strong>Contacto:</strong> {lead.contact}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}