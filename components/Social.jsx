import React from "react";
import { RiYoutubeFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const Social = () => {
  return (
    <div className="absolute -bottom-16 left-[50%] -translate-x-1/2 bg-white w-[200px] h-[50px] rounded-xl shadow-md">
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center mx-auto cursor-pointer w-fit gap-x-8">
          <Link href="/">
            <RiFacebookFill className="text-2xl transition-all duration-300 text-black/90 hover:text-accent " />
          </Link>
          <Link href="/">
            <RiYoutubeFill className="text-2xl transition-all duration-300 text-black/90 hover:text-accent " />
          </Link>
          <Link href="/">
            <RiInstagramFill className="text-2xl transition-all duration-300 text-black/90 hover:text-accent " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;
