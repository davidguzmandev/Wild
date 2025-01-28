import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const ClientSideAnimation = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Verificar si el código se ejecuta en el cliente
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && boxRef.current) {
      gsap.from(boxRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [isClient]);

  return (
    <div
      ref={boxRef}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      }}
    ></div>
  );
};

export default ClientSideAnimation;