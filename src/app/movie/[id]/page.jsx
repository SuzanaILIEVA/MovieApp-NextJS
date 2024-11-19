import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6fcab808c687ff959d2d78d6106d7e84`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  //   console.log("id ====> ", id);

  const movieDetails = await getMovie(id);
  //   console.log("movieDetails ====> ", movieDetails);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetails?.backdrop_path || movieDetails?.poster_path
        }`}
        alt="movie"
      />

      <div className="absolute">
        <div className="text-4xl font-bold my-3 text-white">
          {movieDetails?.title || movieDetails?.name}
        </div>
        <div className="w-1/2  text-white">{movieDetails?.overview}</div>
        <div className="text-md my-3  text-white">
          {movieDetails?.release_date} • {movieDetails?.vote_average}
        </div>
        <div className="my-7 border w-32 p-2 rounded-md text-center text-lg cursor-pointer  text-white font-bold hover:bg-white hover:text-black">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
