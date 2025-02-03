import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Profile() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Perfil</h1>
        <form className="bg-white p-6 rounded-lg shadow">
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
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Guardar Cambios
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}