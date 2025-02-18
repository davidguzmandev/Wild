"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import Logo from "@/images/logo.webp";

export default function Footer({ translations }: { translations: any }) {
  const isVisible = useIntersectionObserver(0.5, "whyus");

  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      className={`min-h-screen py-20 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <div className="max-w-full mx-10 md:mx-14 lg:mx-28 md:flex justify-center">
        <div className="xl:w-1/5 px-10 text-center justify-center grid">
          <Image
            src={Logo}
            alt="Logo Wild"
            width={300}
            height={300}
            className="justify-center"
          />
          <p className="text-3xl font-bold">Company</p>
        </div>
        <div className="md:w-2/5">
          <nav>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Products</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <div className="md:w-2/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam,
          tempora recusandae illum facere repudiandae fugiat expedita explicabo
          quia minima ducimus libero amet accusamus, provident illo nam
          necessitatibus iure. Labore.
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        distinctio labore odit esse culpa natus quae quis doloribus reiciendis
        corrupti modi in assumenda, officiis ipsa ea placeat itaque maxime
        omnis!
      </div>
    </section>
  );
}
