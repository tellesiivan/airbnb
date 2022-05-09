import Image from "next/image";

export default function PopupCard({ location }) {
  return (
    <div className="max-w-sm ">
      <div className="relative h-24 ">
        <Image
          className="rounded-t-lg"
          src={location.img}
          layout="fill"
          objectFit="cover"
          alt={location.title}
        />
      </div>
      <div className="p-2 bg-gray-200 rounded-b-lg">
        <h5 className="mb-2 text-sm font-medium text-black ">
          {location.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 ">
          {location.description}
        </p>
      </div>
    </div>
  );
}
