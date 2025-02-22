import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconWorld, IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function Nav({ translations }: { translations: any }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      title: `${translations.services}`,
      label: `${translations.services}`.toLowerCase(),
      url: `#`,
    },
    {
      title: `${translations.products}`,
      label: `${translations.products}`.toLowerCase(),
      url: `#`,
    },
    {
      title: `${translations.blog}`,
      label: `${translations.blog}`.toLowerCase(),
      url: `#`,
    },
    {
      title: `${translations.contact}`,
      label: `${translations.contact}`.toLowerCase(),
      url: `#`,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Menú de escritorio (oculto en móviles) */}
      <div className="hidden md:flex space-x-14">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.url}
            className="hover:text-gray-100 transition duration-300 text-md font-medium uppercase tracking-wider"
          >
            {item.title}
          </Link>
        ))}
        <Link
          href={isEn ? '/es' : '/en'}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          scroll={false}
        >
          <IconWorld stroke={1.25} className="w-4 h-4" />
          <span>{isEn ? 'Es' : 'En'}</span>
        </Link>
      </div>

      {/* Botón de hamburguesa (visible en móviles) */}
      <div className="md:hidden z-20">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? <IconX stroke={1.5} className="w-8 h-8" /> : <IconMenu2 stroke={1.5} className="w-8 h-8" />}
        </button>
      </div>

      {/* Menú desplegable (visible en móviles) */}
      {isMenuOpen && (
        <div className="fixed top-0 h-full w-full left-0 bg-white shadow-md rounded-md p-14 z-10">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className="hover:text-gray-600 transition duration-300 text-md font-medium uppercase tracking-wider"
                onClick={toggleMenu} // Cerrar el menú al hacer clic en un enlace
              >
                {item.title}
              </Link>
            ))}
            <Link
              href={isEn ? '/es' : '/en'}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
              scroll={false}
              onClick={toggleMenu} // Cerrar el menú al cambiar de idioma
            >
              <IconWorld stroke={1.25} className="w-4 h-4" />
              <span>{isEn ? 'Es' : 'En'}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}