import { client } from "@/app/lib/sanity";
import BikesCategories from "@/components/BikesCategories";

const getData = async () => {
  const query = `*[_type == 'product'] {
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

const OurBikes = async () => {
  const products = await getData();
  console.log(products);
  return (
    <div className="">
      <BikesCategories products={products} />
    </div>
  );
};

export default OurBikes;
