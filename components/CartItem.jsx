import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex gap-5 p-2 mb-10 border-b ">
      {/* Image */}
      <div className="w-[110px] h-[110px] relative">
        <Image
          src={urlFor(item.images[0]).url()}
          fill
          priority
          className="object-contain"
          alt=""
        />
      </div>

      {/* details */}
      <div className="flex flex-col justify-between w-full ">
        {/* first */}
        <div className="flex items-center justify-between">
          <h5 className="text-lg">{item.name}</h5>
          <button onClick={() => removeItem(item.id)}>
            <FaX className="text-xl cursor-pointer  p-[2px] rounded-full  transition-all duration-300" />
          </button>
        </div>
        {/* second */}
        <div className="flex flex-col items-center justify-between gap-2 px-2 md:flex-row rounded-xl ">
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => decrementItem(item.id)}
              className="p-[1px] text-black "
            >
              <FaMinus />
            </button>
            <h5>{item.quantity}</h5>
            <button
              onClick={() => incrementItem(item.id)}
              className="p-[1px] text-black "
            >
              <FaPlus />
            </button>
          </div>
          <div className="">
            <h5>
              total:{" "}
              <span className="italic ">${item.price * item.quantity}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
