import Header from "@/components/partials/header";
import Hero from "@/components/partials/hero";
import { getDictionary } from "../i18n/dictionary";
import Services from "@/components/partials/services";
import WeAre from "@/components/common/weare";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const lang = (await params).lang;
  const t = await (await getDictionary(lang)).home;

  return (
    <div className="min-h-screen">
      <Header navTranslations={t} />
      <Hero
        navTranslations={t}
        texts={[
          t.nav.create,
          t.nav.code,
          t.nav.develop,
          t.nav.design,
          t.nav.imagine,
          t.nav.build,
          t.nav.innovate,
          t.nav.invent,
          t.nav.transform,
          t.nav.craft,
        ]}
      />

      <Services navTranslations={t} />
      <WeAre
        translations={t}
      />

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
