import Image from "next/image";

export default function LargeCard({ img, title, desc, buttonText }) {
  return (
    <section className="relative pt-6 pb-4 cursor-pointer">
      <div className="relative w-full h-96">
        <Image
          src={img}
          alt={desc}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute space-y-3 top-32 left-12">
        <h3 className="w-64 text-lg sm:text-2xl lg:text-4xl ">{title}</h3>
        <p className="mb-2 text-sm text-gray-600">{desc}</p>

        <button className="px-4 py-2 text-sm text-white bg-gray-900 rounded-lg">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
