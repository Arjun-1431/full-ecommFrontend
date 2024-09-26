import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

export default function Checkout() {
    const [amount, setAmount] = useState(1);
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [productName, setProductName] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const location = useLocation();
    const { product } = location.state || {};

    useEffect(() => {
        setProductName(product ? product.name : "");
    }, [product]);

    useEffect(() => {
        // Check if all fields are filled
        if (email && fullName && mobileNumber && productName) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, fullName, mobileNumber, productName]);

    // handlePayment Function
    const handlePayment = async () => {
        if (!isFormValid) {
            toast.error("Please fill all the details");
            return;
        }

        try {
            const res = await fetch(`http://localhost:5000/api/payment/order`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    amount
                })
            });

            const data = await res.json();
            console.log(data);
            handlePaymentVerify(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handlePaymentVerify = async (data) => {
        const options = {
            key: "rzp_test_6y4ihF8KtZx61t",
            amount: data.amount,
            currency: data.currency,
            name: "Arjun Singh",
            description: "Test Mode",
            order_id: data.id,
            handler: async (response) => {
                console.log("response", response)
                try {
                    const res = await fetch(`http://localhost:5000/api/payment/order/api/payment/verify`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            amount:amount,
                            email:email,
                            fullName:fullName,
                            mobileNumber:mobileNumber,
                            productName:productName,
                        })
                    })

                    const verifyData = await res.json();

                    if (verifyData.message) {
                        toast.success(verifyData.message);
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <div>
            <Toaster />
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {product ? (
                            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.image} alt={product.name} />
                                <div className="flex w-full flex-col px-4 py-4">
                                    <span className="font-semibold">{product.name}</span>
                                    <p className="text-lg font-bold">₹{product.price}</p>
                                </div>
                            </div>
                        ) : (
                            <p>No product details available</p>
                        )}
                    </div>
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    <div>
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="your.email@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="card-holder"
                                name="card-holder"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Your full name here"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                            </div>
                        </div>
                        <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Mobile Number</label>
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="card-no"
                                name="card-no"
                                className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="xxxxx-xxxxx"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                </svg>
                            </div>
                        </div>
                        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Product Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="billing-address"
                                name="billing-address"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Street Address"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Amount</p>
                                <p className="font-semibold text-gray-900">₹{product.price}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Other Charges</p>
                                <p className="font-semibold text-gray-900">₹0.00</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total Amount</p>
                            <p className="text-2xl font-semibold text-gray-900">₹{product.price}</p>
                        </div>
                    </div>
                    <button
                        onClick={handlePayment}
                        className={`mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium text-white ${isFormValid ? "bg-gray-900" : "bg-gray-500 cursor-not-allowed"}`}
                        disabled={!isFormValid}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
