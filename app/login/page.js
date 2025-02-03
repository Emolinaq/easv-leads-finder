import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Login() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
        <form className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}