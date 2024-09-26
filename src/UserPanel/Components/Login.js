import React, { useEffect } from 'react';
import "../CssFiles/login.css";
import { useNavigate } from 'react-router-dom';
// utils/localStorage.js
export const getUserData = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

const Login = () => {
    const loginWithGoogle = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    

    useEffect(() => {
        // Fetch user data after redirect from Google
        const fetchUserData = async () => {
            try {
                const response = await fetch("http://localhost:5000/login/success", {
                    credentials: "include"
                });
                if (response.status === 200) {
                    const data = await response.json();
                    if (data.user) {
                        // Save user data to local storage
                        localStorage.setItem("user", JSON.stringify(data.user));
                        // Log user data to console
                        console.log("User data on login page:", data.user);
                    }
                } else {
                    console.log("User not authorized");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);
    const navigate = useNavigate();

    const handleregister = ()=>{
        navigate('/register')
    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                        <p className="text-left text-3xl font-bold">Welcome back, Olivia</p>
                        <p className="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>
                        <button onClick={loginWithGoogle} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
                            <img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google Icon" /> Log in with Google
                        </button>
                        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
                        </div>
                        <form className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="email" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                                </div>
                            </div>
                            <div className="mb-12 flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="password" id="login-password" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                                </div>
                            </div>
                            <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
                        </form>
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600">
                                Don't have an account?
                                <a onClick={handleregister} className="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free.</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                    <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
                        <p className="mb-8 text-3xl font-semibold leading-10">We work 10x faster than our compeititors and stay consistant. While they're bogged won with techincal debt, we're realeasing new features.</p>
                        <p className="mb-4 text-3xl font-semibold">John Elmond</p>
                        <p className="">Founder, Emogue</p>
                        <p className="mb-7 text-sm opacity-70">Web Design Agency</p>
                    </div>
                    <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Background" />
                </div>
            </div>
        </>
    );
};

export default Login;
