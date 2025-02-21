"use client";
import Image from "next/image";
import web from "@/images/web.webp";
import design from "@/images/design.webp";
import mobile from "@/images/mobile.webp";
import marketing from "@/images/marketing.webp";
import { useState } from "react";
import Link from "next/link";
import {
  IconArrowNarrowRight,
  IconFlame,
  IconArrowNarrowUp,
} from "@tabler/icons-react";

// Tipado de las props de la página
interface Service {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ServiceCard({
  navTranslations,
}: {
  navTranslations: any;
}) {
  const services = [
    {
      title: `${navTranslations.web}`,
      h2: `${navTranslations.webdesign}`,
      description: `${navTranslations.webdescription}`,
      image: web,
      list: [
        `${navTranslations.listweb.websites}`,
        `${navTranslations.listweb.landingpages}`,
        `${navTranslations.listweb.wordpressdevelop}`,
        `${navTranslations.listweb.joomladevelop}`,
        `${navTranslations.listweb.moodledevelop}`,
      ],
      link: "services",
    },
    {
      title: `${navTranslations.design}`,
      h2: `${navTranslations.digitaldesign}`,
      description: `${navTranslations.designdescription}`,
      image: design,
      list: [
        `${navTranslations.listdesign.logodesign}`,
        `${navTranslations.listdesign.brandidentity}`,
        `${navTranslations.listdesign.stationerydesign}`,
      ],
      link: "#",
    },
    {
      title: `${navTranslations.develop}`,
      h2: `${navTranslations.appdevelop}`,
      description: `${navTranslations.appdevelopdescription}`,
      image: mobile,
      list: [
        `${navTranslations.listdevelop.webapp}`,
        `${navTranslations.listdevelop.mobileapp}`,
      ],
      link: "#",
    },
    {
      title: `${navTranslations.marketing}`,
      h2: `${navTranslations.digitalmarketing}`,
      description: `${navTranslations.marketingdescription}`,
      image: marketing,
      list: [
        `${navTranslations.listmarketing.socialmediamarketing}`,
        `${navTranslations.listmarketing.seo}`,
        `${navTranslations.listmarketing.advertising}`,
        `${navTranslations.listmarketing.emailmarketing}`,
      ],
      link: "#",
    },
    {
      title: `${navTranslations.ecommerce}`,
      h2: `${navTranslations.onlineshops}`,
      description: `${navTranslations.ecommercedescription}`,
      image: marketing,
      list: [
        `${navTranslations.listecommerce.ecommercedevelop}`,
        `${navTranslations.listecommerce.shopify}`,
        `${navTranslations.listecommerce.prestashop}`,
        `${navTranslations.listecommerce.woocommerce}`,
      ],
      link: "#",
    },
  ];

  const [selected, setSelected] = useState<string>(services[0].title);

  return (
    <div
      className="flex flex-col lg:flex-row md:gap-20 lg:gap-52 px-4 sm:px-6 lg:px-8"
      id="list">
      {/* Services List */}
      <div className="w-full lg:w-1/4 space-y-6 sm:mx-20">
        {services.map((service) => (
          <div
            key={service.title}
            onClick={() => setSelected(service.title)}
            className="group cursor-pointer transform transition-all duration-300 hover:translate-x-2">
            <h3
              className={`
          text-3xl sm:text-4xl lg:text-6xl p-2
          transition-all duration-100 ease-in-out
          ${
            selected === service.title
              ? "font-bold text-indigo-600 pb-2"
              : "font-semibold text-gray-400 group-hover:text-gray-900"
          }
        `}>
              {window.innerWidth < 1028 ? (
                <Link href="#description">{service.title}</Link>
              ) : (
                <p>{service.title}</p>
              )}
            </h3>
            <p id="description"></p>
          </div>
        ))}
      </div>
      <div className="sm:hidden m-10"></div>
      {/* Service Content */}
      <div className="w-full lg:w-3/4 mr-14">
        {services.map(
          (service) =>
            selected === service.title && (
              <div key={service.title} className="animate-fade-in">
                <div className="flex flex-col lg:flex-row items-start">
                  <div className="w-full space-y-6">
                    <h2 className="text-3xl text-gray-700 sm:text-4xl font-bold tracking-tight">
                      {service.h2}
                    </h2>
                    <p className="leading-relaxed">{service.description}</p>

                    {service.list && (
                      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4">
                        {service.list.map((item, idx) => (
                          <Link href="#" key={idx}>
                            <li className="flex flex-col items-center p-4 rounded-lg hover:bg-violet-50 transition-all duration-300">
                              <IconFlame
                                stroke={1.5}
                                className="text-indigo-500 mb-2 w-6 h-6"
                              />
                              <span className="text-center text-sm">
                                {item}
                              </span>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}

                    <div className="flex gap-8">
                      <Link
                        href={service.link}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <span className="mr-2 text-sm sm:text-base">{navTranslations.viewmore}</span>
                        <IconArrowNarrowRight stroke={2} className="w-5 h-5" />
                      </Link>
                      <div className="sm:hidden">
                        <Link
                          href="#list"
                          className="inline-flex items-center px-6 py-3 font-medium transform transition-all duration-300 hover:scale-105 rounded-full bg-indigo-800 text-white">
                          <IconArrowNarrowUp stroke={2} className="w-6 h-6" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* {service.image && (
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                        <Image
                          src={service.image}
                          width={400}
                          height={400}
                          alt={service.title}
                          priority
                          className=""
                        />
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
