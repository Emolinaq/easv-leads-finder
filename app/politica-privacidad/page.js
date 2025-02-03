import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PoliticaPrivacidad() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            En EASV Leads Finder, valoramos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-500">1. Información que Recopilamos</h2>
          <p className="text-gray-600 mb-4">
            Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y datos de uso de la aplicación.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-500">2. Uso de la Información</h2>
          <p className="text-gray-600 mb-4">
            Utilizamos tu información para mejorar la aplicación, personalizar tu experiencia y enviarte actualizaciones relevantes.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-500">3. Protección de la Información</h2>
          <p className="text-gray-600 mb-4">
            Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados o uso indebido.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-500">4. Cambios en la Política</h2>
          <p className="text-gray-600 mb-4">
            Nos reservamos el derecho de actualizar esta política en cualquier momento. Te notificaremos de cambios significativos.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}