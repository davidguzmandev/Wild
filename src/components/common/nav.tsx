import Link from "next/link";

export default function Nav() {

  const navItems = [
    {
      title: "Services",
      label: "services",
      url: `#`,
    },
    {
      title: "Product",
      label: "product",
      url: `#`,
    },
    {
      title: "Blog",
      label: "blog",
      url: `#`,
    },
    {
      title: "Contact",
      label: "contact",
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
