import Image from "next/image";
import loadPlaceholderImg from "../../images/blurPlaceholder.png";
export default function SmallCard({ place }) {
  const { img, location, distance } = place;
  return (
    <div className="flex items-center m-2 mr-5 space-x-3 transition duration-300 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      <div className="relative w-16 h-16">
        <Image
          src={img}
          alt={location}
          layout="fill"
          placeholder="blur"
          blurDataURL={loadPlaceholderImg}
          className="rounded-lg"
        />
      </div>
      <div className="ml-2 text-sm">
        <h2 className="font-medium">{location}</h2>
        <h2 className="text-gray-400">{distance}</h2>
      </div>
    </div>
  );
}
