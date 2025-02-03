import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© 2023 EASV Leads Finder. Todos los derechos reservados.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/politica-privacidad" className="hover:text-blue-500">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="hover:text-blue-500">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-blue-500">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;