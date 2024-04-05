import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import Link from "next/link";

import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug" : slug.current,
    "category" : categories->{name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const item = await getData(params.slug);
  console.log(item);
  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-14">
          {/* img */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(item.images[0]).url()}
              width={273}
              height={290}
              priority
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex flex-col items-start justify-center flex-1 gap-10 ">
            <Link href={"/"} className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className="flex flex-col items-start gap-6">
              <div>
                <h3>{item.name}</h3>
                <p className="text-lg font-semibold">${item.price}</p>
              </div>
              <p>{item.description}</p>
              <AddToCartBtn text="Add To Cart" btnStyles="btn btn-accent" />
            </div>
            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on orders over $120</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-accent" />
                <p>perfect time to recive your order</p>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Change product in 14 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
