import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import CategoryComponent from "./CategoryComponent";
import FeaturedCategoryRow from "./FeaturedCategoryRow";

export default function HomeComponent() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          }
        }
      }
      `
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  // console.log(featuredCategories);

  return (
    <div className="m-4">
      <CategoryComponent />
      {featuredCategories.map((category) => (
        <FeaturedCategoryRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}
    </div>
  );
}
