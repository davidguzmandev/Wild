"use client";
import Image from "next/image";
import Websites from "@/images/websites.webp";
import Webapp from "@/images/webapp.webp";

export default function WhatWeDo({ translations }: { translations: any }) {


  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="flex justify-center flex-col py-20">
      <div className="sticky top-20 max-w-7xl w-full mx-52 px-8 sm:px-6 lg:px-8 self-start">
        <p className="text-sm text-purple-700 font-semibold tracking-widest uppercase">
          {translations.whatwedo}
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-center py-40">
        <div
          className={`sm:text-9xl text-xl font-bold uppercase text-stroke`}>
          {translations.listweb.websites}
        </div>
        <div className="">
          <Image
            src={Websites}
            alt="Websites"
            width={700}
            height={700}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-40">
        <div className="sm:text-9xl text-xl font-bold uppercase text-stroke ">
          {translations.listdevelop.webapp}
        </div>
        <div className="">
          <Image
            src={Webapp}
            alt="Webapps"
            width={700}
            height={700}
            className="clip-polygon"
          />
        </div>
      </div>

      <div className="sticky top-8 flex flex-col items-center justify-center py-40">
        <div className="sm:text-9xl text-xl font-bold uppercase text-stroke ">
          {translations.listdevelop.webapp}
        </div>
        <div className="">
          <Image
            src={Webapp}
            alt="Webapps"
            width={700}
            height={700}
            className="clip-polygon"
          />
        </div>
      </div>
    </section>
  );
}
