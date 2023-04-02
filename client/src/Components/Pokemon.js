import React from "react";
import { useLoaderData, Form, Link, redirect } from "react-router-dom";
import myImg from "../images/img.jpg";
import "../index.css";
export default function Pokemon() {
  const pokemon = useLoaderData();
  const list = pokemon.map(item => (
    
    <Link key={item.id} to={""+item.id}>
      <div className="card max-w-sm rounded shadow-lg transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-200">
        <div className="h-52 w-52 bg-slate-200">
          <img src={myImg} alt="a"></img>
        </div>
        <div className="p-3">
          <p className="text-lg font-bold ">{item.name}</p>
          <div className="flex flex-row gap-1">
            {item.typeList.map((type) => (
              (type === 'Fire' ? <p className="text-red-500 font-semibold">{type}</p> : 
                type === 'Water' ? <p className="text-blue-400 font-semibold">{type}</p> :
                  type === 'Grass' ? <p className="text-green-500 font-semibold" >{type}</p> :
                    type === 'Poison' ? <p className="text-purple-500 font-semibold">{type}</p> :
                      type === 'Flying' ? <p className="text-blue-300 font-semibold">{type}</p> :
                        type === 'Bug' ? <p className="text-green-700 font-semibold">{type}</p> :
                          <p className="font-semibold">{type}</p>)
            ))}
          </div>
        </div>
      </div>
    </Link>
  ));
  return (
    <>
      <div className="flex items-center border-b border-orange-500 my-6">
        <Form id="search-form" role="search" >
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="appearance-none bg-transparent border-none w-full text-orange-500  mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search for..."
          />
        </Form>


        <Form method="post">
          <button
            className="flex-shrink-0 bg-orange-500  hover:bg-orange-500 border-orange-500 hover:border-orange-500 text-sm border-4 text-white ml-4 rounded"
            type="submit"
          >
            Add Pokemon
          </button>
        </Form>
      </div>
      <div className="pokemon-card container w-4/5 grid gap-3 justify-center">
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
export const addAction = () =>{
  const id = Math.floor(Math.random() * 9000) + 1000;
  return redirect(`/pokemon/${id}/add`)
}
