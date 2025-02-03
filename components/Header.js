import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray ">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          EASV Leads Finder
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/profile" className="hover:text-blue-500">
                Perfil
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-500">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;