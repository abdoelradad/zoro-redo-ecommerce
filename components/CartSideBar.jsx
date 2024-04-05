"use client";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CheckoutBtn from "./CheckoutBtn";

const CartSideBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    totalPrice,
    handleCartClick,
  } = useShoppingCart();

  return (
    <div>
      {isClient ? (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle className="mb-12 text-left">
                My Shopping Cart ({cartCount})
              </SheetTitle>
            </SheetHeader>

            <>
              {cartCount === 0 ? (
                <div className="flex flex-col items-center justify-center w-full h-[360px] ">
                  <h5 className="text-black/50">Your cart is empty</h5>
                </div>
              ) : (
                <ScrollArea className="h-[50vh] pr-4 mb-4 ">
                  {cartDetails &&
                    Object.entries(cartDetails).map(([key, item]) => {
                      return <CartItem item={item} key={key} />;
                    })}
                </ScrollArea>
              )}
            </>
            {cartCount > 0 && (
              <div>
                <div className="flex justify-between font-semibold">
                  <div className="mb-2 uppercase ">Total</div>
                  <div>${totalPrice}</div>
                </div>
                <CheckoutBtn />
              </div>
            )}
          </SheetContent>
        </Sheet>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CartSideBar;
