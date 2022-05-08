import { format } from "date-fns";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import Filter from "../components/helpers/Filter";
import ListItem from "../components/helpers/ListItem";
import MapBox from "../components/map/MapBox";

export default function Search({ results }) {
  const { query } = useRouter();
  const { from, to, guest, location } = query;

  const resultsWid = results.map((result) => ({ ...result, id: nanoid() }));

  const range =
    from &&
    `${format(new Date(from), "MMM dd")} - ${format(
      new Date(to),
      "MMM dd yyyy"
    )}`;

  return (
    <div className="h-full overflow-x-hidden lg:flex">
      <section className="px-3 pt-24 lg:h-screen lg:overflow-y-scroll lg:min-w-[500px] ">
        <p className="mb-2 text-xs text-gray-500 ">
          Showing 300+ stays for {range} | {guest} guest
        </p>
        <h1 className="mb-6 text-2xl font-semibold">Stays in {location}.</h1>
        <div className="flex-wrap hidden mb-5 md:inline-flex whitespace-nowrap">
          {Filter("Cancellation  Flexibility")}
          {Filter("Price")}
          {Filter("Type of Place")}
          {Filter("Rooms and Beds")}
          {Filter("More Filters")}
        </div>
        <div className="overflow-x-hidden">
          {resultsWid?.map((result) => (
            <ListItem key={result.id} result={result} />
          ))}
        </div>
      </section>
      <section className="hidden lg:inline-flex lg:min-w-[550px] lg:h-screen ">
        <MapBox results={resultsWid} />
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
