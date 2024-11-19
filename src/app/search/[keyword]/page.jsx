import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  console.log(keyword, "===================");

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6fcab808c687ff959d2d78d6106d7e84&query=${keyword}&language=en-US&include_adult=false`
  );

  const data = await res.json();
  console.log("=========DATA=========", data?.results);
  return (
    <div className="flex items-center justify-center ">
      {!(data && data.results) ? (
        <div>Something went wrong !!!</div>
      ) : (
        <div className="flex-wrap flex items-center gap-8 justify-center">
          {data.results.map((dt, i) => (
            <div key={i} className="">
              <Movies dt={dt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
