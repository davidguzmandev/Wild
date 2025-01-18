import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconWorld } from '@tabler/icons-react';

export default function Nav({ translations }: { translations: any }) {
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

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

  return (
    <div className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.url}
          className="text-gray-700 hover:text-blue-600 transition">
          {item.title}
        </Link>
      ))}
      <Link
        href={isEn ? '/es' : '/en'}
        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
        scroll={false}  // Evitar que la página haga scroll al principio
      >
        <IconWorld stroke={1.25} className="w-4 h-4" />
        <span>{isEn ? 'Es' : 'En'}</span>
      </Link>
    </div>
  );
}
