"use client";


export default function WhyUs({ translations }: { translations: any }) {

  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      className="">
      <div className="flex justify-between">
        <div className="w-24 px-8 sm:px-6 lg:px-20">
          <p className="sm:text-7xl text-6xl font-bold uppercase text-left mb-12 text-stroke">
            {translations.whyus}
          </p>
        </div>
        <div>
            <ul>
                <li>{translations.innovation}</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
