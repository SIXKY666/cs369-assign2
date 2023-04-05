import React,{useState} from "react";
import { useLoaderData,Form } from "react-router-dom";
const Edit = () => {
    const pokemon = useLoaderData();
    const [imgSrc, setImgSrc] = useState('');
    const [data, setData] = useState(pokemon);

    const onInputChange = (event) => {
        console.log(event.target + " : " + event.target.value);
        const { name, value } = event.target;
        if (name === "stocked") {
            setData({ ...data, [name]: value === "true" });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    //handle to display select file image 
    const changeImg = (event) => {
        const file = event.target.files[0];

        if (!file) {
            console.log('Please select an image file');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImgSrc(reader.result);
        };
    };
    return (
        <>
            <Form replace method="post" className="w-full max-w-lg my-6">
            <div className="flex justify-center my-6">
                <p className="text-3xl font-bold">Edit Pokemon</p>
            </div>
            <div className="flex flex-wrap mb-3">
                <div className="w-full">
                    <label className="form-label" >Name</label>
                    <input className="form-input" onChange={event => onInputChange(event)} id="name" value={pokemon.name} required/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="form-label" >Height</label>
                        <input className="form-input" id="height" onChange={event => onInputChange(event)} value={pokemon.height}/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="form-label" >Weight</label>
                        <input className="form-input" id="weight" onChange={event => onInputChange(event)} value={pokemon.weight} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="form-label" >Category</label>
                    <div className="relative">
                            <select className="form-input" name="category" onChange={event => onInputChange(event)} id="category">
                            <option>Seed</option>
                            <option>Flame</option>
                            <option>Poison</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="form-label" >Ability</label>
                        <input className="form-input" name="ability" onChange={event => onInputChange(event)} id="ability" value={pokemon.ability} />
                </div>
            </div>
            <div className="flex flex-wrap mb-3">
                <label className="form-label" >Type</label>
                <div className="w-full ml-4">
                    <div className="flex items-center mb-4">
                        <input type="checkbox" value="Fire" className="form-checkbox " />
                        <label className="ml-2 text-lg font-medium text-red-500 ">Fire</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" value="Water" className="form-checkbox " />
                        <label className="ml-2 text-lg font-medium text-blue-400 ">Water</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" value="Grass" className="form-checkbox " />
                        <label className="ml-2 text-lg font-medium text-green-500 ">Grass</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" value="Poison" className="form-checkbox " />
                        <label className="ml-2 text-lg font-medium text-purple-500 ">Poison</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" value="Flying" className="form-checkbox " />
                        <label className="ml-2 text-lg font-medium text-blue-300 ">Flying</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" value="Bug" className="form-checkbox " />
                        <label className="ml-2 text-lg font-medium text-green-700">Bug</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-3"> 
                <div className="w-full">
                    <label className="form-label" >Detail</label>
                        <textarea className="form-input" name="detail" onChange={event => onInputChange(event)} value={pokemon.detail}/>
                </div>
            </div>
            <div className="flex flex-wrap mb-3">
                <div className="w-full">
                    <label className="form-label" >Image</label>
                    <input onChange={(event) => changeImg(event)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    <div className="w-96 h-96 mt-2">
                        {imgSrc ? <img src={imgSrc} alt="pokemon" /> : null}
                    </div>
                </div>
            </div>
            </Form>
        </>
    );
};
export default Edit;
