import Link from "next/link";
import { Input } from "./ui/input";
import { RiYoutubeFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 py-16">
          {/* info */}
          <div className="text-center ">
            <h2 className="mb-2 leading-tight capitalize ">
              Subscribe to our newslatter
            </h2>
            <p className="text-sm text-white/60 w-full md:w-[300px] mx-auto py-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              beatae numquam tempora quis
            </p>
          </div>
          {/* social */}
          <div className="flex items-center mx-auto cursor-pointer gap-x-5">
            <RiFacebookFill className="text-xl transition-all duration-200 text-white/50 hover:text-accent" />
            <RiInstagramFill className="text-xl transition-all duration-200 text-white/50 hover:text-accent" />
            <RiYoutubeFill className="text-xl transition-all duration-200 text-white/50 hover:text-accent" />
          </div>
        </div>
      </div>
      {/* copy right */}
      <div className="py-6 text-center border-t border-white/5 text-white/60">
        Copyright &copy; 2024 elradad. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
