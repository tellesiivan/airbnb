import Image from "next/image";

export default function MediumCard({ cardInfo }) {
  return (
    <div className="transition duration-300 transform cursor-pointer hover:scale-105 hover:rounded-xl">
      <div className="relative h-80 w-80">
        <Image
          src={cardInfo.img}
          layout="fill"
          alt={cardInfo.title}
          className="rounded-xl "
        />
      </div>
      <h3 className="mt-3 text-md sm:text-xl">{cardInfo.title}</h3>
    </div>
  );
}
