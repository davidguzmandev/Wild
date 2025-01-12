import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import logo from '@/images/logo.webp';

export default async function Home() {
  const t = await getTranslations("Home");
  const navItems = [
    {
      title: t("nav.services"),
      label: t("nav.services"),
      url: `${t("nav.services").toLowerCase()}`
    },
    {
      title: t("nav.products"),
      label: t("nav.products"),
      url: `${t("nav.products").toLowerCase()}`
    },
    {
      title: t("nav.blog"),
      label: t("nav.blog"),
      url: `${t("nav.blog").toLowerCase()}`
    },
    {
      title: t("nav.contact"),
      label: t("nav.contact"),
      url: `${t("nav.contact").toLowerCase()}`
    },

  ]

  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt="Wild Project Logo"
                width={100}
                height={20}
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                key={item.label}
                href={item.url}
                className="text-gray-700 hover:text-blue-600 transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                {t("hero.cta")}
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                {t("hero.secondary")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("services.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["web", "mobile", "cloud"].map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-4">
                  {t(`services.${service}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`services.${service}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="mb-8">{t("cta.description")}</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            {t("cta.button")}
          </button>
        </div>
      </section>
    </div>
  );
}
