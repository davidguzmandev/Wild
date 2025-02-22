import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconWorld, IconMenu2, IconX, IconMug, IconCoffee } from "@tabler/icons-react";
import { useState } from "react";

export default function Nav({ translations }: { translations: any }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
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
            className="hover:text-gray-100 transition duration-300 text-md font-medium uppercase tracking-wider">
            {item.title}
          </Link>
        ))}
        <Link
          href={isEn ? "/es" : "/en"}
          className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
          scroll={false}>
          <IconWorld stroke={1.25} className="w-4 h-4" />
          <span>{isEn ? "Es" : "En"}</span>
        </Link>
      </div>

      {/* Botón de hamburguesa (visible en móviles) */}
      <div className="md:hidden z-20">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <IconX stroke={1.5} className="w-8 h-8" />
          ) : (
            <IconMenu2 stroke={1.5} className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Menú desplegable (visible en móviles) */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-white z-30 transition-transform duration-1000 ease-in-out transform ${isMenuOpen ? "-translate-x-0" : "translate-x-full"}`}>
        {isMenuOpen && (
          <div className="relative">
            <div className="absolute top-4 right-4 z-40">
              <button onClick={toggleMenu} className="focus:outline-none">
                <IconX stroke={1.5} className="w-8 h-8" />
              </button>
            </div>
            <div className="p-14">
              <div className="flex flex-col space-y-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.url}
                    className="hover:text-gray-600 transition duration-300 text-md font-medium uppercase tracking-wider text-center"
                    onClick={toggleMenu}>
                    {item.title}
                  </Link>
                ))}
                <Link
                  href={isEn ? "/es" : "/en"}
                  className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition"
                  scroll={false}
                  onClick={toggleMenu}>
                  <IconWorld stroke={1.25} className="w-4 h-4" />
                  <span>{isEn ? "Es" : "En"}</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="relative gradient-button bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 uppercase text-lg tracking-wide cursor-pointer"
                aria-label={translations.talktous}>
                <span className="inline-flex items-center gap-10">
                  {translations.talktous}{" "}
                  <IconMug
                    stroke={2}
                    className="group-hover:hidden group-active:hidden group-focus:hidden group-hover:text-white"
                  />{" "}
                  <IconCoffee
                    stroke={2}
                    className="hidden group-hover:block group-active:block group-focus:block text-violet-500 group-active:text-violet-500"
                  />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
