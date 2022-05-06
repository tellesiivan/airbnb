import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Filter from "../components/helpers/Filter";
import ListItem from "../components/helpers/ListItem";

export default function Search({ results }) {
  const { query } = useRouter();
  const { from, to, guest, location } = query;

  const range =
    from &&
    `${format(new Date(from), "MMM dd")} - ${format(
      new Date(to),
      "MMM dd yyyy"
    )}`;

  console.log(results);

  return (
    <div>
      <section className="px-3  pt-14">
        <p className="mb-2 text-xs text-gray-500 ">
          Showing 300+ stays for {range} | {guest} guest
        </p>
        <h1 className="mb-6 text-2xl font-semibold">Stays in Fullerton,CA</h1>
        <div className="hidden mb-5 space-x-3 md:inline-flex whitespace-nowrap">
          {Filter("Cancellation  Flexibility")}
          {Filter("Price")}
          {Filter("Type of Place")}
          {Filter("Rooms and Beds")}
          {Filter("More Filters")}
        </div>
        {results?.map((result) => (
          <ListItem key={result.lat} result={result} />
        ))}
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      results: searchResults,
    },
  };
}
