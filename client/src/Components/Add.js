import React, { useState } from "react";
import { Form,redirect,useParams,useNavigate } from "react-router-dom"
import "../index.css"

export default function Add() {
    const [imgSrc, setImgSrc] = useState('');
    const { id } = useParams();

    //handle to display select file image 
    const changeImg = (event) => {
        event.preventDefault()
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

    //post form data function
    async function addPokemon(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        formData.append("id",id)
        try {
            const response = await fetch('/pokemon', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch (error) {
            console.error(error);
        }
        return redirect("/pokemon"+id)
    }
    function testRe(){
        window.location.href = '/pokemon'
    }

    return (
        <div className="flex fex-col justify-center">
            <Form replace method="post"   className="w-full max-w-2xl">
                <div className="flex justify-center my-6">
                    <p className="text-3xl font-bold">Add New Pokemon</p>
                </div>
                {/* name input */}
                <div className="flex flex-wrap mb-3">
                    <div className="w-full">
                        <label className="form-label" >Name</label>
                        <input className="form-input " name="name" id="name" />
                    </div>
                </div>
                {/* height and weight input */}
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="form-label" >Height</label>
                        <input className="form-input" name="height" id="height" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="form-label" >Weight</label>
                        <input className="form-input" name="weight" id="weight" />
                    </div>
                </div>
                {/* cate and ability input */}
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="form-label" >Category</label>
                        <div className="relative">
                            <select className="form-input" name="category" id="category">
                                <option>Seed</option>
                                <option>Flame</option>
                                <option>Poison</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="form-label" >Ability</label>
                        <input className="form-input" name="ability" id="ability" />
                    </div>
                </div>
                {/* type and detail input */}
                <div className="flex flex-row mb-3">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="form-label" >Type</label>
                        <div className="w-full ml-4">
                            <div className="flex items-center mb-4">
                                <input type="checkbox" name="typeList" value="Fire" className="form-checkbox " />
                                <label className="ml-2 text-lg font-medium text-red-500 ">Fire</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" name="typeList" value="Water" className="form-checkbox " />
                                <label className="ml-2 text-lg font-medium text-blue-400 ">Water</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" name="typeList" value="Grass" className="form-checkbox " />
                                <label className="ml-2 text-lg font-medium text-green-500 ">Grass</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" name="typeList" value="Poison" className="form-checkbox " />
                                <label className="ml-2 text-lg font-medium text-purple-500 ">Poison</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" name="typeList" value="Flying" className="form-checkbox " />
                                <label className="ml-2 text-lg font-medium text-blue-300 ">Flying</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" name="typeList" value="Bug" className="form-checkbox " />
                                <label className="ml-2 text-lg font-medium text-green-700">Bug</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <div className="w-full">
                            <label className="form-label" >Detail</label>
                            <textarea name="detail" className="form-input resize" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-3">
                    
                </div>
                <div className="flex flex-wrap mb-3">
                    <div className="w-full justify-center">
                        <label className="form-label" >Image</label>
                        <input name="image" onChange={(event) => changeImg(event)} className="w-full mb-5 text-md text-gray-900 border border-gray-300 " id="file_input" type="file" />
                        <div className="flex w-96 h-auto mt-2 items-center">
                            {imgSrc ? <img src={imgSrc} alt="pokemon" /> : null}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-3 justify-center">
                    <button className="btn h-14 text-3xl" type="button" onClick={testRe()}>Add Pokemon</button>
                </div>
            </Form>
        </div>
    )
}