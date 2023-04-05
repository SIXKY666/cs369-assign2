import React, { useState } from "react";
import { useLoaderData, Form, Link, redirect } from "react-router-dom";
import "../index.css";
export default function Pokemon() {
  const pokemon = useLoaderData();
  const [search, setSearch] = useState("");

  const list = pokemon
    .filter((item) => {
      return search.toLocaleLowerCase() === ""
        ? item
        : item.name.includes(search) ||
            item.name.toLocaleLowerCase().includes(search);
    })
    .map((item) => (
      <Link key={item.id} to={"" + item.id}>
        <div className="card max-w-sm rounded shadow-lg transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-200">
          <div className="h-52 w-52 bg-slate-200">
            <img src={item.imgUrl} alt="a"></img>
          </div>
          <div className="p-3">
            <p className="text-lg font-bold ">{item.name}</p>
            <div className="flex flex-row gap-1">
              {item.typeList.map((type) =>
                type === "Fire" ? (
                  <p className="text-red-500 font-semibold">{type}</p>
                ) : type === "Water" ? (
                  <p className="text-blue-400 font-semibold">{type}</p>
                ) : type === "Grass" ? (
                  <p className="text-green-500 font-semibold">{type}</p>
                ) : type === "Poison" ? (
                  <p className="text-purple-500 font-semibold">{type}</p>
                ) : type === "Flying" ? (
                  <p className="text-blue-300 font-semibold">{type}</p>
                ) : type === "Bug" ? (
                  <p className="text-green-700 font-semibold">{type}</p>
                ) : (
                  <p className="font-semibold">{type}</p>
                )
              )}
            </div>
          </div>
        </div>
      </Link>
    ));
  return (
    <>
      <div className="flex justify-center mt-4 items-center">
        <div className="flex w-max border-b border-orange-500">
          <Form id="search-form" role="search" method="get">
            <input
              type="search"
              name="q"
              id="q"
              className="bg-transparent border-none w-full text-orange-500  mr-3 py-1 px-2 leading-tight focus:outline-none "
              placeholder="Search for..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </div>

        <Form method="post">
          <button
            className="flex-shrink-0 bg-orange-500  hover:bg-orange-500 border-orange-500 hover:border-orange-500 text-sm border-4 text-white ml-4 rounded"
            type="submit"
          >
            Add Pokemon
          </button>
        </Form>
      </div>
      <div className="flex justify-center mt-4">
        <div className="pokemon-card container w-4/5 grid gap-3">
          {list}
        </div>
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
export const addAction = () => {
  const id = Math.floor(Math.random() * 9000) + 1000;
  return redirect(`/pokemon/${id}/add`);
};
// export async function productsLoader({ request }) {
//   const url = new URL(request.url);
//   const q = url.searchParams.get("q");

//   const products = await getProducts(q);
//   return products;
// }
