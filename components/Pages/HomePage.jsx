import React from "react";
import Banner from "../Banner";
import LargeCard from "../helpers/LargeCard";
import MediumCard from "../helpers/MediumCard";
import SmallCard from "../helpers/SmallCard";

function HomePage({ places, cardData }) {
  return (
    <>
      <Banner />
      <div className="px-3 mx-auto sm:px-6 max-w-7xl">
        <section className="pt-6">
          <h2 className="pb-6 text-3xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {places &&
              places.map((place) => (
                <SmallCard key={place.img} place={place} />
              ))}
          </div>
        </section>
        <section className="py-8">
          <h2 className="pb-2 text-3xl font-semibold">Live Anywhere</h2>
          <div className="flex px-3 py-2 -ml-3 space-x-4 overflow-scroll scrollbar-hide">
            {cardData &&
              cardData.map(({ img, title }) => (
                <MediumCard key={img} cardInfo={{ img, title }} />
              ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          desc="Wishlist curated by Airbnb."
          title="The Greatest Outdoors."
          buttonText="Get Inspired"
        />
      </div>
    </>
  );
}

export default HomePage;
