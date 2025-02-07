"use client";
import Image from "next/image";
import Websites from "@/images/websites.webp";
import Webapp from "@/images/webapp.webp";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Registra el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo({ translations }: { translations: any }) {
  const servicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Inicializa las animaciones para cada servicio
    /* servicesRef.current.forEach((service, index) => {
      gsap.from(service, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: service,
          start: "top 40%", // Comienza la animación cuando el elemento está al 80% de la vista
          end: "bottom top", // Asegura que la animación se complete antes de salir del viewport
          toggleActions: "play none none reverse", // Controla cómo se comporta la animación
          markers: true, // Opcional: Puedes activar markers para depurar el comportamiento del ScrollTrigger
        },
      });
    });

    // Solo bloquea el scroll dentro de la sección de servicios
    ScrollTrigger.create({
      trigger: "#services",
      start: "top top", // Cuando la sección de servicios llega al principio de la ventana
      end: "bottom top", // Cuando la sección de servicios ya no esté en la ventana
      pin: true, // Esto bloquea el scroll dentro de esta sección
      scrub: true, // Sincroniza el scroll con las animaciones
      markers: false, // Puedes activar los markers para depurar si lo necesitas
    }); */


    /* var scrollAnim = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top 40%",
        scrub: 0.6, // process by scrolling
        markers: true, 
        toggleActions: 'play none none reverse',
      }
    });
    scrollAnim
      .to('.svgbox--1', {
        x: '50vw',
        ease: "steps(30)",
      })
      .to('.svgbox--2', {
        x: '-50vw',
        ease: "steps(20)",
      }, '<')
      .to('h1', {
        y: -30,
        ease: "steps(60)"
      }, '<');
  
 */
 /*  const addServiceRef = (el: HTMLDivElement) => {
    if (el && !servicesRef.current.includes(el)) {
      servicesRef.current.push(el);
    }
  };
 */

  gsap.utils.toArray(".section").forEach(section => {
    gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          markers: true, 
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => "+=" + section.offsetWidth, 
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
        defaults: {ease: "power3.out"}
      });
    // animate the container one way...
    
  });

 }, []);
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="h-screen flex justify-center flex-col py-20 transition-all duration-500 ease-out"
    >
      <div className="max-w-7xl w-full mx-52 px-8 sm:px-6 lg:px-8 self-start">
        <p className="text-sm text-purple-700 font-semibold tracking-widest uppercase">
          {translations.whatwedo}
        </p>
      </div>
      <div  className="section flex justify-center py-52">
        <p className="sm:text-9xl text-xl font-bold uppercase text-stroke z-0">
          {translations.listweb.websites}
        </p>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"> 
          <Image 
            src={Websites}
            alt="Websites"
            width={700}
            height={700}
            className="clip-polygon"
          />
        </div>
      </div>
      <div className="section flex justify-center py-52">
        <p className="sm:text-9xl text-xl font-bold uppercase text-stroke z-0">
          {translations.listweb.webapp}
        </p>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"> 
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
