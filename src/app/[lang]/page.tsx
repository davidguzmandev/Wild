import Header from "@/components/partials/header";
import Hero from "@/components/partials/hero";
import { getDictionary } from "../i18n/dictionary";
import WeAre from "@/components/common/weare";
import WhyUs from "@/components/partials/whyus";
import Services from "@/components/partials/services";
import Footer from "@/components/partials/footer";
import Letstalk from "@/components/partials/letstalk";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const lang = (await params).lang;
  const t = await (await getDictionary(lang)).home;

  return (
    <div className="scroll-smooth">
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
      <Services navTranslations={t}/>
      <WeAre
        translations={t}
      />
      <WhyUs translations={t}/>
      <Letstalk translations={t}/>
      <Footer translations={t}/>
    </div>
  );
}
