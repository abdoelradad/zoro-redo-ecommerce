import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularTshirtsCarosul from "./PopularTshirtsCarosul";

// get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug" : slug.current,
    "categories" : categories[]-> {
      name
    }
}`;
  const data = await client.fetch(query);
  return data;
};

const PopularTshirts = async () => {
  const products = await getData();

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular T-shirts</h2>
        <p className=" text-center mb-[30px]">
          apply your ideas with best outfits clothes in the town
        </p>
        <PopularTshirtsCarosul products={products} />
        <Link href="/out-tshirts">
          <button className="mx-auto btn btn-accent">See All T-shirts</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularTshirts;
