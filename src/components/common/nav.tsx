import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconWorld,
  IconMenu2,
  IconX,
  IconMug,
  IconCoffee,
  IconPhotoCode,
  IconPencilBolt,
  IconDeviceMobileCode,
  IconBuildingStore,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useState } from "react";
import rooster from "@/images/rooster.webp";
import Image from "next/image";

export default function Nav({ translations }: { translations: any }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<{ [key: string]: boolean }>({});
  const timeouts: { [key: string]: NodeJS.Timeout } = {};

  const navItems = [
    {
      title: `${translations.services}`,
      label: `${translations.services}`.toLowerCase(),
      url: `/services`,
      dropdownItems: [
        {
          title: `${translations.listweb.websites}`,
          description: `${translations.websitestext}`,
          icon: <IconPhotoCode stroke={2} />,
          url: "/services/websites",
        },
        {
          title: `${translations.develop}`,
          description: `${translations.developtext}`,
          icon: <IconDeviceMobileCode stroke={2} />,
          url: "/services/develop",
        },
        {
          title: `${translations.design}`,
          description: `${translations.designtext}`,
          icon: <IconPencilBolt stroke={2} />,
          url: "/services/design",
        },
        {
          title: `${translations.marketing}`,
          description: `${translations.marketingtext}`,
          icon: <IconBuildingStore stroke={2} />,
          url: "/services/marketing",
        },
        {
          title: `${translations.ecommerce}`,
          description: `${translations.ecommercetext}`,
          icon: <IconShoppingCart stroke={2} />,
          url: "/services/ecommerce",
        },
      ],
    },
    {
      title: `${translations.products}`,
      label: `${translations.products}`.toLowerCase(),
      url: `/products`,
      dropdownItems: [
        {
          title: `Rooster`,
          description: `${translations.roostertext}`,
          image: rooster,
          url: "/products/rooster",
        },
      ],
    },
    {
      title: `${translations.blog}`,
      label: `${translations.blog}`.toLowerCase(),
      url: `/blog`,
    },
    {
      title: `${translations.contact}`,
      label: `${translations.contact}`.toLowerCase(),
      url: `/contact`,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (label: string) => {
    if (timeouts[label]) clearTimeout(timeouts[label]); // Cancela el cierre si el usuario regresa rápido
    setDropdown((prev) => ({ ...prev, [label]: true }));
  };

  const handleMouseLeave = (label: string) => {
    timeouts[label] = setTimeout(() => {
      setDropdown((prev) => ({ ...prev, [label]: false }));
    }, 300); // ⏳ Espera 300ms antes de ocultar el dropdown
  };

  // Remueve el idioma actual del pathname
  const newPathname = pathname.replace(/^\/(en|es)/, "");

  // Construye la nueva ruta con el idioma cambiado
  const newLocalePath = isEn ? `/es${newPathname}` : `/en${newPathname}`;

  return (
    <div className="relative">
      {/* Menú de escritorio (oculto en móviles) */}
      <div className="hidden md:flex space-x-6 lg:space-x-10">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="group relative" // Añadimos la clase 'group'
          >
            <Link
              href={item.url}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={() => handleMouseLeave(item.label)}
              className="transition duration-300 text-md font-medium uppercase tracking-wider rounded-lg group-hover:bg-white p-4 cursor-pointer">
              {item.title}
            </Link>
            {item.dropdownItems && (
              <div
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave(item.label)}
                className={`group absolute top-8 left-0 w-80 bg-white rounded-b-lg rounded-r-lg shadow-lg z-10 ${
                  dropdown[item.label] ? "block" : "hidden"
                }`} // Controlamos la visibilidad con clases de Tailwind
              >
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.url}
                    href={dropdownItem.url}
                    className="block px-2 my-2 text-gray-700">
                    <div className="flex gap-2 hover:bg-indigo-50 rounded-lg p-2">
                      {dropdownItem.image ? (
                        <Image
                          src={dropdownItem.image}
                          alt={dropdownItem.title}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain shrink-0"
                        />
                      ) : (
                        ""
                      )}
                      {dropdownItem.icon && <p>{dropdownItem.icon}</p>}
                      <div>
                        <p className="text-base font-semibold">
                          {dropdownItem.title}
                        </p>
                        <p className="text-xs">{dropdownItem.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          href={newLocalePath}
          className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
          scroll={false}>
          <IconWorld stroke={1.25} className="w-4 h-4" />
          <span>{isEn ? "Es" : "En"}</span>
        </Link>
      </div>

      {/* Botón de hamburguesa (visible en móviles) */}
      <div className="md:hidden z-20 cursor-pointer">
        <button
          onClick={toggleMenu}
          className="focus:outline-none cursor-pointer">
          {isMenuOpen ? (
            <IconX stroke={1.5} className="w-8 h-8" />
          ) : (
            <IconMenu2 stroke={1.5} className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Menú desplegable (visible en móviles) */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-white z-30 transition-transform duration-1000 ease-in-out transform ${
          isMenuOpen ? "-translate-x-0" : "translate-x-full"
        }`}>
        {isMenuOpen && (
          <div className="relative">
            <div className="absolute top-4 right-4 z-40">
              <button
                onClick={toggleMenu}
                className="focus:outline-none cursor-pointer">
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
