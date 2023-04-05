import React from "react";
import { useLoaderData,Form,redirect } from "react-router-dom";
const Detail = () => {
  const pokemon = useLoaderData();
  return (
    <>
    {/* header */}
      <div className="flex flex-row gap-2 my-4 justify-center">
        <p className="text-4xl font-bold">{pokemon.name}</p>
        <p className="text-4xl font-bold text-gray-400">#{pokemon.id}</p>
      </div>
      {/* detail */}
      <div className="flex flex-row gap-4 justify-center">
        <div className="w-96 h-96 bg-gray-100">
          <img src={pokemon.imgUrl} alt=""></img>
        </div>
        <div className="flex flex-col w-1/3">
          <div>
            <p className="text-lg font-normal">{pokemon.detail}</p>
          </div>
          <div className="grid grid-cols-2 gap-y-2 border p-2 my-4 border-blue-500 rounded">
            <div>
              <p className="text-lg font-bold">Height</p>
              <p>{pokemon.height}</p>
            </div>
            <div>
              <p className="text-lg font-bold">Category</p>
              <p>{pokemon.category}</p>
            </div>
            <div>
              <p className="text-lg font-bold">Weight</p>
              <p>{pokemon.weight}</p>
            </div>
            <div>
              <p className="text-lg font-bold">Ability</p>
              <p>{pokemon.ability}</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-lg font-bold">Type</p>
            {pokemon.typeList.map((type) => (
              (type === 'Fire' ? <p className="text-red-500 font-semibold ml-2"> {type}</p> :
                type === 'Water' ? <p className="text-blue-400 font-semibold ml-2"> {type}</p> :
                  type === 'Grass' ? <p className="text-green-500 font-semibold ml-2"> {type}</p> :
                    type === 'Poison' ? <p className="text-purple-500 font-semibold ml-2"> {type}</p> :
                      type === 'Flying' ? <p className="text-blue-300 font-semibold ml-2"> {type}</p> :
                        type === 'Bug' ? <p className="text-green-700 font-semibold ml-2"> {type}</p> :
                          <p className="ml-2 font-semibold"> {type}</p>)
          ))}
          </div>
          <Form replace action="edit">
            <button type="submit" className="mt-4 w-40 flex-shrink-0 bg-orange-500  hover:bg-orange-500 border-orange-500 hover:border-orange-500 text-sm border-4 text-white rounded">EDIT</button>
          </Form>
          <Form replace method="post" action="remove">
            <button type="submit" className="mt-4 w-40 flex-shrink-0 bg-orange-500  hover:bg-orange-500 border-orange-500 hover:border-orange-500 text-sm border-4 text-white rounded">Delete</button>
          </Form>
        </div>
      </div>
    </>
  );
};
export const detailLoader = async ({ params }) => {
  const id = params.id;
  const res = fetch("/pokemon/" + id);
  if (!(await res).ok) {
    throw new Error("Can't find the pokemon");
  }
  return res;
};
export const remove = async ({ params }) => {
  const { id } = params
  const res = await fetch('/pokemon/' + id, {
    method: "DELETE"
  })
  if (!res.ok) {
    throw Error("Could not delete product")
  }
  return redirect(`/pokemon`)
}
export const edit = ({ params }) => {
  const { id } = params
  return redirect('/pokemon/' + id + "/edit")
}
export default Detail;
