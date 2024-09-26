import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
    const navigate = useNavigate();

    const handleCheckout = (product) => {
        navigate('/checkout', { state: { product } });
    }

    const products = [
        {
            id: 1,
            name: "USTRAA Perfume",
            image: require('../Assets/allproduct.jpg'),
            price: 449,
            originalPrice: 599
        },
        {
            id: 2,
            name: "Nike Air MX Super 5000",
            image: require('../Assets/allproduct1.jpg'),
            price: 249,
            originalPrice: 299
        }
    ];

    return (
        <div>
            <div style={{ width: "100vw", height: 'auto', display: 'flex', justifyContent: 'center' }}>
                <div class="m-10 w-screen max-w-screen-lg">
                    <div class="flex flex-col">
                        <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                            <form class="">
                                <div class="relative mb-10 w-full flex  items-center justify-between rounded-md">
                                    <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8" class=""></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                                    </svg>
                                    <input type="name" name="search" class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
                                </div>

                                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    <div class="flex flex-col">
                                        <label for="name" class="text-sm font-medium text-stone-600">Name</label>
                                        <input type="text" id="name" placeholder="Raspberry juice" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                                    </div>

                                    <div class="flex flex-col">
                                        <label for="manufacturer" class="text-sm font-medium text-stone-600">Manufacturer</label>

                                        <select id="manufacturer" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                            <option>Cadberry</option>
                                            <option>Starbucks</option>
                                            <option>Hilti</option>
                                        </select>
                                    </div>

                                    <div class="flex flex-col">
                                        <label for="date" class="text-sm font-medium text-stone-600">Date of Entry</label>
                                        <input type="date" id="date" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                                    </div>

                                    <div class="flex flex-col">
                                        <label for="status" class="text-sm font-medium text-stone-600">Status</label>

                                        <select id="status" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                            <option>Dispached Out</option>
                                            <option>In Warehouse</option>
                                            <option>Being Brought In</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                                    <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
                                    <button class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-row items-center">
                {products.map(product => (
                    <div key={product.id} class="relative m-6 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                        <a>
                            <img class="h-60 rounded-t-lg object-cover" src={product.image} alt="product image" />
                        </a>
                        <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                        <div class="mt-4 px-5 pb-5">
                            <a>
                                <h5 class="text-xl font-semibold tracking-tight text-slate-900">{product.name}</h5>
                            </a>
                            <div class="mt-2.5 mb-5 flex items-center">
                                <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                <div class="flex">
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <p>
                                    <span class="text-3xl font-bold text-slate-900">₹{product.price}</span>
                                    <span class="text-sm text-slate-900 line-through">₹{product.originalPrice}</span>
                                </p>
                                <a onClick={() => handleCheckout(product)} class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
