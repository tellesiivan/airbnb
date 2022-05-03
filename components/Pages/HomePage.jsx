import React from "react";
import Banner from "../Banner";

function HomePage({ places }) {
  console.log(places.length, "places");

  return (
    <>
      <Banner />
      <section className="px-3 pt-4 mx-auto sm:px-6 max-w-7xl">
        <h2 className="pb-4 text-3xl font-semibold">Explore Nearby</h2>
      </section>
    </>
  );
}

export default HomePage;
