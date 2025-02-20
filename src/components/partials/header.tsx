'use client'
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/common/nav";
import logo from "@/images/logo.webp";
import { useScroll } from "@/hooks/useScroll";

export default function Header({ navTranslations }: { navTranslations: any }) {
  const isScrolled = useScroll();
  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-white/50 backdrop-blur-sm' : 'bg-transparent'}
    `}>
      <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 w-24">
            <Link href="/">
              <Image 
                src={logo} 
                alt="Wild Project Logo" 
                priority 
              />
            </Link>
          </div>
          <Nav translations={navTranslations} />
        </div>
      </div>
    </nav>
  );
}