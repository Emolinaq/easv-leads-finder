import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Terminos() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Términos y Condiciones</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Bienvenido a EASV Leads Finder. Al utilizar nuestra aplicación, aceptas los siguientes términos y condiciones.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-500">1. Uso de la Aplicación</h2>
          <p className="text-gray-600 mb-4">
            La aplicación está diseñada para ayudarte a encontrar y cualificar leads. No puedes utilizar la aplicación para fines ilegales o no autorizados.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-500">2. Privacidad</h2>
          <p className="text-gray-600 mb-4">
            Respetamos tu privacidad. Consulta nuestra 
            <a href="/politica-privacidad" className="text-blue-500 hover:underline"> Política de Privacidad </a> para más detalles.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-500">3. Limitación de Responsabilidad</h2>
          <p className="text-gray-600 mb-4">
            No nos hacemos responsables por el uso indebido de la información obtenida a través de la aplicación.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}