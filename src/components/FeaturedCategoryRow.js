import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedCategoryRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == "${id}"] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          }
        }[0]
        `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  // console.log(restaurants);

  return (
    <div className="bg-white rounded shadow mt-4 p-4">
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="xs:overflow-x-auto">
        <div className="flex flex-col xs:flex-row -mx-2 xs:w-max">
          {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
