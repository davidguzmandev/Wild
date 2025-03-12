import Image from "next/image";
import { Briefcase, Code, LayoutGrid, ThumbsUp, MessageSquare, LayoutTemplate, PencilRuler, Smartphone } from 'lucide-react';
import ServiceCard from '@/components/common/ServiceCard';
import Web from "@/public/images/web.webp";
import Mobile from "@/public/images/mobile.webp";
import Design from "@/public/images/design.webp";
import Marketing from "@/public/images/marketing.webp";
import Cms from "@/public/images/cms.webp";
import Ecommerce from "@/public/images/ecommerce.webp";

export default function ServiceCard({ translations }: { translations: any }) {
  const cards = [
    {
      title: `${translations.listweb.websites}`,
      description: `${translations.websitestext}`,
      icon: LayoutGrid,
      link: "/services/websites",
    },
    {
      title: `${translations.appdevelop}`,
      description: `${translations.appdeveloptext}`,
      icon: Smartphone,
      link: "/services/websites",
    },
    {
      title: `${translations.digitaldesign}`,
      description: `${translations.designtext}`,
      icon: PencilRuler,
      link: "/services/websites",
    },
    {
      title: `${translations.marketing}`,
      description: `${translations.marketingtext}`,
      icon: ThumbsUp,
      link: "/services/websites",
    },
    {
      title: `${translations.ecommerce}`,
      description: `${translations.ecommercetext}`,
      image: Briefcase,
      link: "/services/websites",
    },
    {
      title: `${translations.cms}`,
      description: `${translations.whyuslist.cmsdescription}`,
      icon: LayoutTemplate,
      link: "/services/websites",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Soluciones digitales para impulsar tu negocio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos servicios digitales integrales para ayudar a tu empresa a crecer en el entorno digital con soluciones personalizadas y de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="animate-fade-up"
            />
          ))}
          </div>
          </div>
        
      {cards.map((card, index) => (

      
        <div
          key={index}
          className="group relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-md border border-gray-300">
          <div className="relative m-4 group-hover:-mt-6 h-40 group-hover:h-50 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-indigo-300 duration-500 ease-in-out">
            <Image
              src={card.image}
              alt={card.title}
              loading = 'lazy'
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
      ))}
    </section>
  );
}
