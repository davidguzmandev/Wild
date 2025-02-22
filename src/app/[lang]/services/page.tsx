import Header from "@/components/partials/header";
import Hero from "@/components/partials/hero";
import { getDictionary } from "../../i18n/dictionary";
import WeAre from "@/components/common/weare";
import WhyUs from "@/components/partials/whyus";

import Footer from "@/components/partials/footer";
import Letstalk from "@/components/partials/letstalk";

export default async function Services({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const lang = (await params).lang;
  const t = await (await getDictionary(lang)).home;

  return (
    <div className="scroll-smooth">
      <Header navTranslations={t} />
      <p>hola</p>
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
      <WeAre
        translations={t}
      />
      <WhyUs translations={t}/>
      <Letstalk translations={t}/>
      <Footer translations={t}/>
    </div>
  );
}
