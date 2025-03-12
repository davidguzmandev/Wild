import Image from "next/image";
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
      image: Web,
      link: "/services/websites",
    },
    {
      title: `${translations.appdevelop}`,
      description: `${translations.appdeveloptext}`,
      image: Mobile,
      link: "/services/websites",
    },
    {
      title: `${translations.digitaldesign}`,
      description: `${translations.designtext}`,
      image: Design,
      link: "/services/websites",
    },
    {
      title: `${translations.marketing}`,
      description: `${translations.marketingtext}`,
      image: Marketing,
      link: "/services/websites",
    },
    {
      title: `${translations.ecommerce}`,
      description: `${translations.ecommercetext}`,
      image: Ecommerce,
      link: "/services/websites",
    },
    {
      title: `${translations.cms}`,
      description: `${translations.whyuslist.cmsdescription}`,
      image: Cms,
      link: "/services/websites",
    },
  ];

  return (
    <section className="px-2 flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
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
