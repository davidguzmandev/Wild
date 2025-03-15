import {
  ShoppingCart,
  Search,
  LayoutGrid,
  ThumbsUp,
  GraduationCap,
  LayoutTemplate,
  PencilRuler,
  Smartphone,
} from "lucide-react";
import { IconCoffee, IconMug } from "@tabler/icons-react";
import ServiceCard from "@/components/common/ServiceCard";

export default function service({ translations }: { translations: any }) {
  const cards = [
    {
      title: `${translations.listweb.websites}`,
      description: `${translations.websitestext}`,
      category: `${translations.web}`,
      icon: LayoutGrid,
      link: "/services/websites",
    },
    {
      title: `${translations.appdevelop}`,
      description: `${translations.appdeveloptext}`,
      category: `${translations.develop}`,
      icon: Smartphone,
      link: "/services/websites",
    },
    {
      title: `${translations.digitaldesign}`,
      description: `${translations.designtext}`,
      category: `${translations.design}`,
      icon: PencilRuler,
      link: "/services/websites",
    },
    {
      title: `${translations.digitalmarketing}`,
      description: `${translations.marketingtext}`,
      category: `${translations.marketing}`,
      icon: ThumbsUp,
      link: "/services/websites",
    },
    {
      title: `${translations.onlineshops}`,
      description: `${translations.ecommercetext}`,
      category: `${translations.ecommerce}`,
      icon: ShoppingCart,
      link: "/services/websites",
    },
    {
      title: `${translations.cms}`,
      description: `${translations.whyuslist.cmsdescription}`,
      category: `${translations.cms}`,
      icon: LayoutTemplate,
      link: "/services/websites",
    },
    {
      title: `${translations.seooptimization}`,
      description: `${translations.seodescription}`,
      category: `${translations.marketing}`,
      icon: Search,
      link: "/services/websites",
    },
    {
      title: `${translations.educative}`,
      description: `${translations.educativedescription}`,
      category: `${translations.cms}`,
      icon: GraduationCap,
      link: "/services/websites",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
            {translations.our} {translations.services}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {translations.solutions}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {translations.weoffer}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              category={service.category}
              icon={service.icon}
              className="animate-fade-up"
              translations={translations}
            />
          ))}
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <button
          className="relative gradient-button bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 uppercase text-lg tracking-wide cursor-pointer"
          aria-label={translations.talktous}>
          <span className="inline-flex items-center gap-10">
            {translations.talktous}{" "}
            <IconMug
              stroke={2}
              className="group-hover:hidden group-active:hidden"
            />{" "}
            <IconCoffee
              stroke={2}
              className="hidden group-hover:block group-active:block text-violet-500 group-active:text-violet-500"
            />
          </span>
        </button>
      </div>

      {/* {cards.map((card, index) => (
        <div
          key={index}
          className="group relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-md border border-gray-300">
          <div className="relative m-4 group-hover:-mt-6 h-40 group-hover:h-50 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-indigo-300 duration-500 ease-in-out">
            <Image
              src={card.image}
              alt={card.title}
              loading="lazy"
              width={400}
              height={400}
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {card.title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {card.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-indigo-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
              {translations.viewmore}
            </button>
          </div>
        </div>
      ))} */}
    </section>
  );
}
