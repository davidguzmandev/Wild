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

export default function Footer({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "footer");

  return (
    <section
      id="footer"
      aria-labelledby="whyus-heading"
      className={`py-10 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full mx-10 md:mx-14 lg:mx-28 md:flex justify-center mb-16">
        <div className="xl:w-1/5 px-10 text-center justify-center grid">
          <Image
            src={Logo}
            alt="Logo Wild"
            width={300}
            height={300}
            className="justify-center"
          />
        </div>
        <div className="md:w-2/5 justify-center flex">
          <nav className="text-3xl">
            <ul>
              <li className="pb-6">About Us</li>
              <li className="pb-6">Services</li>
              <li className="pb-6">Products</li>
              <li className="pb-6">Blog</li>
            </ul>
          </nav>
        </div>

        <div className="md:w-2/5">
          <div className="text-xl mb-10">
            <p>
              Si tienes dudas, preguntas o solo tener contacto directo con
              nosotros, envianos un mensaje y estaremos encantados de ponernos
              en contacto contigo.
            </p>
          </div>
          <div className="gap-4 flex justify-between">
            <div>
              <button
                className="relative gradient-button bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 uppercase text-lg tracking-tight cursor-pointer"
                aria-label={translations.getintouch}>
                <span className="inline-flex items-center gap-8">
                  {translations.getintouch}{" "}
                  <IconMessage2
                    stroke={2}
                    className="group-hover:hidden"
                  />{" "}
                  <IconMessageChatbot
                    stroke={2}
                    className="hidden group-hover:block group-hover:text-violet-500"
                  />
                </span>
              </button>
            </div>
            <div>
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 cursor-pointer hover:from-white hover:to-white"
                aria-label={translations.getintouch}>
                <span className="inline-flex items-center gap-20">
                  <IconBrandWhatsapp
                    stroke={2}
                    className="group-hover:hidden "
                  />{" "}
                  <IconBrandWhatsappFilled
                    stroke={2}
                    className="hidden group-hover:block group-hover:text-violet-500"
                  />
                </span>
              </button>
            </div>
            <div>
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white rounded-full py-4 px-6 group hover:shadow-xl hover:scale-105 transition-all duration-600 cursor-pointer hover:from-white hover:to-white"
                aria-label={translations.getintouch}>
                <span className="inline-flex items-center gap-20">
                  <IconMail
                    stroke={2}
                    className="group-hover:hidden"
                  />{" "}
                  <IconMailOpened
                    stroke={2}
                    className="hidden group-hover:block group-hover:text-violet-500"
                  />
                </span>
              </button>
            </div>
            <div>
              <Link>
              <button
                className="group hover:scale-105 transition-all duration-600 cursor-pointer "
                aria-label={translations.getintouch}>
                <span className="inline-flex items-center gap-20">
                  <IconCircleArrowUpFilled
                    stroke={2}
                    size={62}
                    className="text-violet-500 group-hover:hidden"
                  />{" "}
                  <IconCircleArrowUp
                    stroke={2}
                    size={62}
                    className="hidden group-hover:block group-hover:text-violet-500"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-10 md:mx-14 lg:mx-28 md:flex justify-between">
        <div className="flex gap-20">
          <p>Copyright © 2025 Wild Project. All Rights Reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Cookie Preferences</p>
        </div>
        <div className="flex">
          <IconBrandLinkedin stroke={2} />
        </div>
      </div>
    </section>
  );
}
