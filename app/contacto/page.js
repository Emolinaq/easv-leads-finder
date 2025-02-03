import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contacto() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Contacto</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            ¿Tienes alguna pregunta o comentario? ¡No dudes en contactarnos!
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mensaje</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}