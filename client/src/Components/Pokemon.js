import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import myImg from "../images/img.jpg";
import "../index.css";
export default function Pokemon() {
  const pokemon = useLoaderData();
  const [data, setData] = useState(pokemon);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name", "name"]);
  const list = pokemon.map((item) => (
    <div className="card max-w-sm rounded shadow-lg transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-200">
      <div className="h-52 w-52 bg-slate-200">
        <img src={myImg}></img>
      </div>
      <div className="m-1">
        <p className="text-lg font-bold">{item.name}</p>
        <div className="flex flex-row gap-1">
          {item.typeList.map((type) => (
            <p>{type}</p>
          ))}
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Search for..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white ml-2 rounded"
          type="button"
        >
          Add Pokemon
        </button>
      </div>
      <div className="pokemon-card container w-4/5 grid gap-3 mt-9 justify-center">
        {list}
      </div>
    </>
  );
}
export const pokemonLoader = async () => {
  const res = await fetch("/pokemon");
  if (!res.ok) {
    throw Error("Could note fetch the pokemon");
  }
  return res;
};
