"use client";
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import CartSideBar from "./CartSideBar";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="sticky top-0 z-50 w-full py-6 bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <h1 className="text-[26px]">LOGO</h1>
        </Link>

        <div className="flex items-center gap-[26px]">
          <Nav containerStyles="flex gap-[36px]" />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div className=" bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center font-medium">
              {cartCount}
            </div>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
