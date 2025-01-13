import Header from "@/components/partials/header";
import Hero from "@/components/partials/hero";
import { getDictionary } from "../i18n/dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {
  const lang = (await params).lang
  const t = await (await getDictionary(lang)).homepage
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <h1 className="text-6xl">{t.title}</h1>
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">t</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["web", "mobile", "cloud"].map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-4">t</h3>
                <p className="text-gray-600">t</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">t</h2>
          <p className="mb-8">t</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            t
          </button>
        </div>
      </section>
    </div>
  );
}
