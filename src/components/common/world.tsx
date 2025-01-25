"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline/next"), {
  ssr: false, // Desactiva el SSR para Spline
});

export default function World() {
  const [isSplineReady, setSplineReady] = useState(false);

  useEffect(() => {
    // Simula la carga de Spline o cualquier tarea asíncrona
    const loadSpline = async () => {
      try {
        // Si necesitas realizar algún proceso asíncrono relacionado con Spline
        setSplineReady(true);
      } catch (error) {
        console.error("Error cargando Spline:", error);
      }
    };

    loadSpline();
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {isSplineReady && (
        <Spline
          scene="https://prod.spline.design/EVR1xVIOaCzLDMlz/scene.splinecode"
        />
      )}
    </div>
  );
}
