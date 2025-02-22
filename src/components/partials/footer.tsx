"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import Logo from "@/images/logo.webp";
import {
  IconMessage2,
  IconMessageChatbot,
  IconCircleArrowUp,
  IconCircleArrowUpFilled,
  IconMail,
  IconMailOpened,
  IconBrandWhatsapp,
  IconBrandWhatsappFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "footer");

  return (
    <section
      id="footer"
      aria-labelledby="whyus-heading"
      className={`py-10 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full mx-10 md:mx-14 xl:mx-28 md:flex justify-center mb-16">
        <div className="lg:w-1/5 pr-10 text-center justify-center grid max-sm:mb-14">
          <Image
            src={Logo}
            alt="Logo Wild"
            width={300}
            height={300}
            className="justify-center"
          />
        </div>
        <div className="md:w-2/5 sm:justify-center flex">
          <nav className="text-xl lg:text-3xl flex">
            <ul>
              <li className="pb-4">
                <span className="text-sm text-gray-500 align-top">01</span>{" "}
                {translations.aboutus}
              </li>
              <li className="pb-6">
                <span className="text-sm text-gray-500 align-top">02</span>{" "}
                {translations.services}
              </li>
              <li className="pb-6">
                <span className="text-sm text-gray-500 align-top">03</span>{" "}
                {translations.products}
              </li>
              <li className="pb-6">
                <span className="text-sm text-gray-500 align-top">04</span>{" "}
                {translations.blog}
              </li>
            </ul>
          </nav>
        </div>

        <div className="md:w-2/5">
          <div className="lg:text-xl mb-10">
            <p>{translations.doubts}</p>
          </div>

          {/* Contenedor principal con flex en columna en sm y en fila en md+ */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
            {/* Get in Touch - Ocupa toda la fila en sm, pero en md+ está en línea */}
            <div className="w-full sm:w-auto flex justify-center ">
              <button
                className="relative gradient-button bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-500 uppercase text-sm md:text-lg tracking-tight cursor-pointer"
                aria-label={translations.getintouch}>
                <span className="inline-flex items-center gap-8">
                  {translations.getintouch}{" "}
                  <IconMessage2 stroke={2} className="group-hover:hidden" />{" "}
                  <IconMessageChatbot
                    stroke={2}
                    className="hidden group-hover:block group-hover:text-violet-500"
                  />
                </span>
              </button>
            </div>

            {/* Segunda línea en sm, en md+ todo en línea */}
            <div className="flex justify-center sm:justify-start gap-4 ">
              {/* Botón WhatsApp */}
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-5 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer hover:from-white hover:to-white"
                aria-label="Whatsapp">
                <span className="inline-flex items-center gap-20">
                  <IconBrandWhatsapp
                    stroke={2}
                    className="group-hover:hidden"
                  />{" "}
                  <IconBrandWhatsappFilled
                    stroke={2}
                    className="hidden group-hover:block group-hover:text-violet-500"
                  />
                </span>
              </button>

              {/* Botón Mail */}
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-5 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer hover:from-white hover:to-white"
                aria-label="Mail">
                <span className="inline-flex items-center gap-20">
                  <IconMail stroke={2} className="group-hover:hidden" />{" "}
                  <IconMailOpened
                    stroke={2}
                    className="hidden group-hover:block group-hover:text-violet-500"
                  />
                </span>
              </button>

              {/* Botón Arrow */}
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <button
                  className="group hover:scale-105 transition-all duration-500 cursor-pointer flex"
                  aria-label="Go Up">
                  <span className="inline-flex items-center gap-20">
                    <IconCircleArrowUpFilled
                      stroke={2}
                      size={72}
                      className="text-violet-500 group-hover:hidden"
                    />{" "}
                    <IconCircleArrowUp
                      stroke={2}
                      size={72}
                      className="hidden group-hover:block group-hover:text-violet-500"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-10 md:mx-14 lg:mx-28 lg:flex sm:justify-between text-center">
        <div className="flex order-2 justify-center">
          <IconBrandLinkedin stroke={2} />
        </div>
        <div className="md:flex gap-20 order-1">
          <p className="my-6 order-2">{translations.privacy}</p>
          <p className="my-6 order-3">{translations.terms}</p>
          <p className="my-6 order-4">{translations.cookies}</p>
          <p className="my-6 order-1">
            Copyright © 2025 Wild Project. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
