import Link from "next/link";

export default function Nav({ translations }: { translations: any }) {

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
    </div>
  );
}
