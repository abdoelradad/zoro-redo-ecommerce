"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "@/components/ui/slider";
import Item from "./Item";

const BikesCategories = ({ products }) => {
  const [category, setCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = products.filter((bike) => {
      const categoryMatch =
        category === "all"
          ? products
          : bike.categories.some((categ) => categ.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredItems(filtered);
  }, [category, price, products]);

  console.log(filteredItems);
  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* sidebar */}
          <aside className="w-full p-4  md:w-[300px] md:h-[84vh]">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="t-shirt"
                  id="t-shirt"
                  onClick={() => setCategory("t-shirt")}
                />
                <Label htmlFor="t-shirt">T-shirt</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="hoddie"
                  id="hoddie"
                  onClick={() => setCategory("hoddie")}
                />
                <Label htmlFor="hoddie">hoddie</Label>
              </div>
            </RadioGroup>
            {/* price slider */}
            <div className="max-w-56">
              <div className="mb-4 text-lg font-medium ">
                Max Price:{" "}
                <span className="ml-2 font-semibold text-accent">${price}</span>
                <span className="ml-2">
                  {filteredItems.length > 1
                    ? `${filteredItems.length} items`
                    : filteredItems === 0
                    ? `${filteredItems.length} items`
                    : `${filteredItems.length} item`}
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          {/* bike list */}
          <div className="w-full p-1 ">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[30px]">
              {filteredItems.map((item) => {
                return <Item product={item} key={item.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikesCategories;
