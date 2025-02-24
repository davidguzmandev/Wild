import Header from "@/components/partials/header";
import Hero from "@/components/partials/services/hero";
import { getDictionary } from "../../i18n/dictionary";
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
      <Hero translations={t} />
      <WhyUs translations={t}/>
      <Letstalk translations={t}/>
      <Footer translations={t}/>
    </div>
  );
}
