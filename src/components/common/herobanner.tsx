"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Banner1 from "@/images/banner1.webp";
import Banner2 from "@/images/banner2.webp";
import Banner3 from "@/images/banner3.webp";
import Banner4 from "@/images/banner4.webp";

const HeroBanner = () => {
  const bannerRef = useRef<HTMLElement | null>(null);
  const imageRef1 = useRef<HTMLDivElement | null>(null);
  const imageRef2 = useRef<HTMLDivElement | null>(null);
  const imageRef3 = useRef<HTMLDivElement | null>(null);
  const imageRef4 = useRef<HTMLDivElement | null>(null);

  // Función reutilizable para animar imágenes
  const animateImage = (
    imageRef: React.RefObject<HTMLDivElement | null>,
    initialProps: { opacity: number; y: string; x: string },
    finalProps: {
      opacity: number;
      y: string;
      x: string;
      duration: number;
      ease: string;
    }
  ) => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, initialProps, finalProps);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Animación de entrada para el banner
    tl.from(bannerRef.current, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: "power3.out",
    });

    // Animación de la primera imagen (desde la izquierda)
    animateImage(
      imageRef1,
      { opacity: 0, y: "-60", x: "0" },
      { opacity: 1, y: "20", x: "0", duration: 1.5, ease: "power3.out" }
    );

    // Animación de la segunda imagen (desde la derecha)
    animateImage(
      imageRef2,
      { opacity: 0, y: "110", x: "180" },
      { opacity: 1, y: "110", x: "115", duration: 1.5, ease: "power3.out" }
    );

    // Animación de la tercero imagen (desde la derecha)
    animateImage(
      imageRef3,
      { opacity: 0, y: "20", x: "180" },
      { opacity: 1, y: "20", x: "-30", duration: 2.5, ease: "power3.out" }
    );

    // Animación de la cuarto imagen (desde la derecha)
    animateImage(
      imageRef4,
      { opacity: 0, y: "20", x: "180" },
      { opacity: 1, y: "20", x: "-90", duration: 2.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative flex flex-col items-center justify-center h-screen  overflow-hidden">
      <div className="relative w-full h-[300px] flex justify-center items-center">
        <div
          ref={imageRef1}
          className="absolute"
          style={{
            top: "-20%",
            left: "50%",
            opacity: 0,
          }}>
          <Image
            src={Banner1}
            alt="Banner Image 1"
            width={600}
            height={600}
            className="object-cover"
            priority
          />
        </div>
        <div
          ref={imageRef2}
          className="absolute"
          style={{
            top: "-20%",
            left: "70%",
            opacity: 0,
          }}>
          <Image
            src={Banner2}
            alt="Banner Image 2"
            width={30}
            height={30}
            className="object-cover"
            priority
          />
        </div>
        <div
          ref={imageRef3}
          className="absolute"
          style={{
            top: "-20%",
            left: "70%",
            opacity: 0,
          }}>
          <Image
            src={Banner3}
            alt="Banner Image 3"
            width={80}
            height={80}
            className="object-cover"
            priority
          />
        </div>
        <div
          ref={imageRef4}
          className="absolute"
          style={{
            top: "-20%",
            left: "70%",
            opacity: 0,
          }}>
          <Image
            src={Banner4}
            alt="Banner Image 4"
            width={60}
            height={60}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
