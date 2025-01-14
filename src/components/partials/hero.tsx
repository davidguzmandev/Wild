'use client'
import { useRandomText } from '@/hooks/useRandomText';
export default function Hero({
  navTranslations,
  texts,
}: {
  navTranslations: any;
  texts: string[];
}) {
  const currentText = useRandomText({ texts, interval: 2000});

  return (
    <section className="h-screen pt-32 pb-20 bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl  text-gray-900 mb-6 pl-20">
            {navTranslations.we} {currentText}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            t
          </p>
        </div>
      </div>
    </section>
  );
}
