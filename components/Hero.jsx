import Image from "next/image";
import React from "react";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="pt-32 pb-48 md:py-0 md:h-[620px] overflow-hidden bg-primary/5 relative">
      <div className="container relative mx-auto">
        <Social />

        <div className="flex items-center justify-between pt-0 md:pt-20">
          {/* text */}
          <div className="w-full xl:max-w-[580px] flex flex-col justify-center items-start gap-5">
            <p className="block py-1 mx-auto text-lg font-semibold text-center text-black underline md:hidden">
              call us: +20 761 232 134
            </p>
            <h1 className="text-center md:text-left">
              "Good <span className="text-accent">Brands</span> Best Clothes in
              the city.
            </h1>
          </div>
          {/* img */}
          <div className="hidden md:flex">
            <Image
              src="/hero_shirt.png"
              width={365}
              height={380}
              alt=""
              quality={100}
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
