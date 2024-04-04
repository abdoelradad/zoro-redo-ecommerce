import React from "react";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, cgEye, CgShoppingBag } from "react-icons/cg";
import AddToCart from "./AddToCartBtn";
import AddToCartBtn from "./AddToCartBtn";

const Item = ({ product }) => {
  const popularCat = product.categories.find(
    (product) => product.name === "popular"
  );
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="flex items-center justify-center w-full h-full transition-all duration-300 bg-primary/5 group-hover:bg-primary/10">
          {popularCat && (
            <div className="absolute px-3 text-sm font-medium text-white uppercase top-8 left-8 bg-accent">
              Popular
            </div>
          )}
          <Image
            src={urlFor(product.images[0]).url()}
            width={200}
            height={147}
            alt=""
          />
        </div>

        {/* btn group */}
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            id={product._id}
            name={product.name}
            currency="USD"
            description={product.description}
            images={product.images}
            price={product.price}
            btnStyles={"btn-icon btn-accent"}
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${product.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="mb-2 font-semibold text-gray-400 ">
        {product.categories[0].name}
      </h5>
      <h4 className="mb-1">{product.name}</h4>
      <div className="text-lg font-bold text-accent">${product.price}</div>
    </div>
  );
};

export default Item;
