import Image from "next/image";
import React from "react";
import { RiHeart2Line, RiStarSmileLine } from "react-icons/ri";

const blurPath = "../../images/blurPlaceholder.png";

export default function ListItem({ result }) {
  const { title, img, description, lat, long, location, price, star, total } =
    result;

  return (
    <div className="flex flex-col px-2 py-2 my-5 transition duration-700 ease-in-out bg-gray-100 rounded-md md:my-3 md:py-6 md:flex-row hover:bg-white hover:shadow-lg ">
      <div className="relative flex-shrink-0 w-full h-60 md:h-52 md:w-80">
        <Image
          alt={title}
          src={img}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          blurDataURL={blurPath}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow mt-6 md:pl-5 md:mt-0">
        <div className="flex justify-between">
          <p>{location}</p>
          <RiHeart2Line className="cursor-pointer" size="1.2em" />
        </div>
        <h4 className="text-sm md:text-lg">{title}</h4>

        <p className="flex-grow mt-2 mb-10 text-xs text-gray-500 md:text-sm md:mb-0 md:mt-0">
          {description}
        </p>
        <div className="flex justify-between">
          <p className="flex items-center space-x-3">
            <RiStarSmileLine className="text-red-500" size="1.2em" />{" "}
            <span className="text-sm">{star}</span>
          </p>
          <div className="text-right">
            <p className="text-lg font-semibold md:text-xl">{price}</p>
            <p className="text-xs text-gray-500 md:text-sm">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
