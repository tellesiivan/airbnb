import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h:[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="banner image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <p className="text-sm font-medium text-gray-600 sm:text-md">
          Not sure where to go? Perfect.
        </p>
        <button className="px-8 py-2 my-3 text-sm font-semibold text-purple-500 transition duration-300 ease-in-out bg-white rounded-full shadow-md hover:shadow-xl active:shadow-sm active:scale-90">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}
