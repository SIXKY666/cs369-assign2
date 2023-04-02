import React from "react";
import { Form } from "react-router-dom"
import "../index.css"
export default function Add() {
    return (
        <Form replace method="post" className="w-full max-w-lg my-6">
            <div className="flex justify-center my-6">
                <p className="text-3xl font-bold">Add new Pokemon</p>
            </div>
            <div className="flex flex-wrap mb-3">
                <div className="w-full">
                    <label className="form-label" for="grid-first-name">Name</label>
                    <input className="form-input" id="name"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="form-label" for="grid-first-name">Height</label>
                    <input className="form-input" id="height"/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="form-label" for="grid-first-name">Weight</label>
                    <input className="form-input" id="weight"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="form-label" for="grid-first-name">Category</label>
                    <div class="relative">
                        <select class="form-input" id="category">
                            <option>Seed</option>
                            <option>Flame</option>
                            <option>Poison</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="form-label" for="grid-first-name">Ability</label>
                    <input className="form-input" id="ability"/>
                </div>
            </div>
            <div className="flex flex-wrap mb-3">
                <label className="form-label" for="grid-first-name">Type</label>
                <div className="w-full ml-4">
                    <div class="flex items-center mb-4">
                        <input  type="checkbox" value="Fire" class="form-checkbox " />
                        <label  class="ml-2 text-lg font-medium text-red-500 ">Fire</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input  type="checkbox" value="Water" class="form-checkbox " />
                        <label class="ml-2 text-lg font-medium text-blue-400 ">Water</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input  type="checkbox" value="Grass" class="form-checkbox " />
                        <label class="ml-2 text-lg font-medium text-green-500 ">Grass</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="checkbox" value="Poison" class="form-checkbox " />
                        <label class="ml-2 text-lg font-medium text-purple-500 ">Poison</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="checkbox" value="Flying" class="form-checkbox " />
                        <label class="ml-2 text-lg font-medium text-blue-300 ">Flying</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="checkbox" value="Bug" class="form-checkbox " />
                        <label class="ml-2 text-lg font-medium text-green-700">Bug</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-3">
                <div className="w-full">
                    <label className="form-label" for="grid-first-name">Detail</label>
                    <textarea className="form-input" />
                </div>
            </div>
            <div className="flex flex-wrap mb-3">
                <div className="w-full">
                    <label className="form-label" for="grid-first-name">Image</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                </div>
            </div>
        </Form>
    )
}