import Image from "next/image";
import Web from "@/public/images/web.webp";

export default function ServiceCard({ translations }: { translations: any }) {
  const cards = [
    {
      title: `${translations.listweb.websites}`,
      description: `${translations.websitestext}`,
      image: Web,
      link: "/services/websites",
    },
    {
      title: `${translations.listweb.websites}`,
      description: `${translations.websitestext}`,
      image: Web,
      link: "/services/websites",
    },
    {
      title: `${translations.listweb.websites}`,
      description: `${translations.websitestext}`,
      image: Web,
      link: "/services/websites",
    },
  ];

  return (
    <section className="px-2 flex flex-wrap justify-center gap-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative m-4 group-hover:-mt-6 h-40 group-hover:h-50 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-indigo-600 duration-500 ease-in-out">
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
              Read More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
