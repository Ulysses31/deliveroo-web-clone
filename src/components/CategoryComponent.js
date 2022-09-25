import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";

export default function CategoryComponent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"] {
          ...
        }
      `
      )
      .then((data) => setCategories(data));
  }, []);

  // console.log(categories);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {categories?.map((category) => (
        <div className="relative m-1" key={category._id}>
          <img
            className="xs:w-40 xs:h-32 w-32 h-20 bg-gray-100 rounded shadow"
            src={urlFor(category.image).url()}
            alt={category.name}
          />
          <h3 className="absolute bottom-2 left-2 text-white font-bold">
            {category.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
