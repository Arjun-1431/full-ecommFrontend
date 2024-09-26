import { useState } from "react";
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate()
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        mobileno: "",
        email: "",
        password: "",
        isAdmin: false
    });

    const loginWithGoogle = () => {
        window.open("https://full-ecombackend.onrender.com/auth/google", "_self");
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("mobileno", formData.mobileno);
        data.append("email", formData.email);
        data.append("password", formData.password);
        data.append("isAdmin", formData.isAdmin);
        if (image) {
            data.append("image", image);
        }

        try {
            const response = await fetch("https://full-ecombackend.onrender.com/register", {
                method: "POST",
                body: data
            });

            if (response.ok) {
                console.log("User registered successfully");
                Swal.fire({
                    icon: "success",
                    title: "Success...",
                    text: "User Register Successfully!",
                  });
                  navigate('/login')
            } else {
                const errorData = await response.json();
                console.error("Error:", errorData.error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a>Why do I have this issue?</a>'
                  });
            }
            
              
        } catch (error) {
            console.error("Error during registration:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a>Why do I have this issue?</a>'
              });
        }
    };

    return (
        <div>
            <div className="flex w-screen flex-wrap text-slate-800">
                <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
                    <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
                        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span>
                        <p className="my-6 text-3xl font-semibold leading-10">
                            Create animations with
                            <span className="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">drag and drop</span>
                        </p>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab totam.</p>
                        <a  className="font-semibold tracking-wide text-white underline underline-offset-4">Learn More</a>
                    </div>
                </div>
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
                        <a  className="text-2xl font-bold text-blue-600"> Wobble . </a>
                    </div>
                    <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
                        <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
                        <p className="mt-6 text-center font-medium md:text-left">
                            Already using wobble?
                            <a  className="whitespace-nowrap font-semibold text-blue-700">Login here</a>
                        </p>
                        <button onClick={loginWithGoogle} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
                            <img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google Icon" /> sign up with Google
                        </button>
                        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
                        </div>
                        <form className="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={handleSubmit}>
                            <div className="flex flex-col pt-4">
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="text" id="login-name" name="name" value={formData.name} onChange={handleChange} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
                                </div>
                            </div>

                            <div className="flex flex-col pt-4">
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="text" id="login-mobileno" name="mobileno" value={formData.mobileno} onChange={handleChange} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Mobile Number" />
                                </div>
                            </div>

                            <div className="flex flex-col pt-4">
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="email" id="login-email" name="email" value={formData.email} onChange={handleChange} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col pt-4">
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="password" id="login-password" name="password" value={formData.password} onChange={handleChange} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
                                </div>
                            </div>

                            <div className="flex flex-col pt-4">
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input
                                        type="file"
                                        id="image-upload"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                    <label
                                        htmlFor="image-upload"
                                        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 cursor-pointer focus:outline-none"
                                    >
                                        {image ? (
                                            <img src={URL.createObjectURL(image)} alt="Uploaded" className="h-10 w-10 rounded-full object-cover" />
                                        ) : (
                                            "Upload Image"
                                        )}
                                    </label>
                                </div>
                            </div>

                            <div className="block mt-4">
                                <input className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow" type="checkbox" id="remember-me" name="isAdmin" checked={formData.isAdmin} onChange={handleChange} />
                                <label className="inline-block" htmlFor="remember-me"> I agree to the <a className="underline">Terms and Conditions</a></label>
                            </div>
                            <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
