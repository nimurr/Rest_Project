"use client"
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function page() {

    const handlePaymentGateway = (e)=>{
        e.preventDefault();
    
        const cardname = e.target.cardname.value;
        const cardnumber = e.target.cardnumber.value;
        const expireDate = e.target.expireDate.value;
        const cvv = e.target.cvv.value;

        if(cardnumber.length < 10){
            return Swal.fire({
                title: "Please Value Name ?",
                text: "That thing is still around?",
                icon: "question"
            });
        }
        const information = {cardname, cardnumber , expireDate , cvv}



        Swal.fire({
            title: "Order Successfully Done!",
            text: "You clicked the button!",
            icon: "success",
          });

        e.target.reset()
    }


  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="container mx-auto px-4 pb-16">
        {/* <h1 className="text-3xl font-bold mb-4">Order Summary</h1> */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <div className="bg-white p-4 rounded shadow_body_order">
              <h2 className="text-xl font-bold mb-4">Your Order</h2>
              <ul className="list-disc space-y-2">
                <li className="flex justify-between items-center font-semibold">Name <span>Quantity</span> <span>Price</span></li>
                <hr />

                <li className="flex justify-between items-center p-2">Pizza
                        <span> 
                            <span  className='mr-2 px-2 rounded bg-gray-100 text-2xl font-semibold cursor-pointer'>- </span>
                             
                            1
                             <span  className="ml-2 px-2 rounded bg-gray-100 text-2xl font-semibold cursor-pointer"> +</span>
                        </span> 
                  <span>$100</span>
                </li>
                <li className="flex justify-between items-center p-2">Pizza
                        <span> 
                            <span  className='mr-2 px-2 rounded bg-gray-100 text-2xl font-semibold cursor-pointer'>- </span>
                             
                            1
                             <span  className="ml-2 px-2 rounded bg-gray-100 text-2xl font-semibold cursor-pointer"> +</span>
                        </span> 
                  <span>$100</span>
                </li>
                <li className="flex justify-between items-center p-2">Pizza
                        <span> 
                            <span  className='mr-2 px-2 rounded bg-gray-100 text-2xl font-semibold cursor-pointer'>- </span>
                             
                            1
                             <span  className="ml-2 px-2 rounded bg-gray-100 text-2xl font-semibold cursor-pointer"> +</span>
                        </span> 
                  <span>$100</span>
                </li>
               

              </ul>
              <hr className="my-4" />
              <div className="flex justify-end">
                <span className="text-gray-700 font-bold">Total:</span>
                <span className="text-gray-700 ml-2">$300</span>
              </div>
            </div>
          </div>


          <div className="w-full md:w-1/3 shadow_body_order rounded-md">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              <form onSubmit={handlePaymentGateway} >
                <div className="mb-4">
                  <label
                    for="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name on Card:
                  </label>
                  <input
                    type="text" 
                    required
                    id="name"
                    name="cardname"
                    placeholder="Card Name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="cardNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Card Number:
                  </label>
                  <input
                    type="number"
                    required
                    name="cardnumber"
                    id="cardNumber"
                    placeholder="Card Number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  />
                </div>
                <div className="flex flex-row mb-4">
                  <div className="w-1/2">
                    <label
                      for="expirationDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Expiration Date:
                    </label>
                    <input
                      type="date"
                      required
                      name="expireDate"
                      id="expirationDate"
                      placeholder="Expire Date"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                  <div className="w-1/2 ml-4">
                    <label
                      for="cvv"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      CVV:
                    </label>
                    <input
                      type="number"
                      required
                      name="cvv"
                      id="cvv"
                      placeholder="CVV"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
                >
                  Place Order
                </button>
                <Image
                  className="mt-3"
                  src={
                    "https://res.cloudinary.com/dav9mftpk/image/upload/v1701862922/Shurjopay-Raj-Web-Host-Banner-Available-Payment-Instruments_xo1go1.png"
                  }
                  alt=""
                  width={500}
                  height={350}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
