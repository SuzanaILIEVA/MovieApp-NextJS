import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  console.log(searchParams.genre);

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=6fcab808c687ff959d2d78d6106d7e84&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  console.log(data, "data");

  return (
    <div className="flex items-center gap-5 flex-wrap justify-center ">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
