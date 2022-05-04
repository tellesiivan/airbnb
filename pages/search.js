import React from "react";
import Filter from "../components/helpers/Filter";

export default function Search() {
  return (
    <div>
      <section className="px-3 md:px-6 pt-14">
        <p className="mb-2 text-xs text-gray-500 ">
          300+ Stays for 5 number of guest
        </p>
        <h1 className="mb-6 text-2xl font-semibold">Stays in Fullerton,CA</h1>
        <div className="hidden mb-5 space-x-3 md:inline-flex whitespace-nowrap">
          {Filter("Cancellation  Flexibility")}
          {Filter("Price")}
          {Filter("Type of Place")}
          {Filter("Rooms and Beds")}
          {Filter("More Filters")}
        </div>
      </section>
    </div>
  );
}
