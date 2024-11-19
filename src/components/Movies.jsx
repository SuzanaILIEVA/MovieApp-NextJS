"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Movies({ dt }) {
  //   console.log(dt, "data");

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${dt.id}`)}
      className="w-[450px] max-h-[450px] relative cursor-pointer "
    >
      <Image
        style={{ objectFit: "cover" }}
        className="rounded-lg mb-5 overflow-hidden"
        width={450}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        alt="movie"
      />
      <div className="absolute bottom-2 p-5 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold text-white">
          {dt?.title || dt?.original_title || dt?.name}
        </div>
        <div className="text-lg text-white">
          {dt?.release_date} • {dt?.vote_average}
        </div>
      </div>
    </div>
  );
}
export default Movies;
