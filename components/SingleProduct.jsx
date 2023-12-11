"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar, FaHeart, FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import Swal from 'sweetalert2';

export default function SingleProduct({ product }) {

    const { id, image, review, price, title } = product;


    const addToCartLocalhost = (id) => {

        const cartItem = localStorage.getItem('addToCart')
        const pars = JSON.parse(cartItem);

        if(pars && pars.find(d => d == id )){
           return Swal.fire({
            icon: "error",
            title: "Already Added !",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }

        else if(pars){
            const data = [id ,...pars]
            Swal.fire({
                title: "Add To Card Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('addToCart', JSON.stringify(data))
        }
        else{
            Swal.fire({
                title: "Add To Card Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('addToCart', JSON.stringify([id]))
        }
        // const data = [id, ...pars];


    }

    const handleFavorite = (id) =>{

        const cartItem = localStorage.getItem('favorite')
        const pars = JSON.parse(cartItem);
        if(pars && pars.find(d => d == id )){
           return Swal.fire({
            icon: "error",
            title: "Already Added !",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }

        else if(pars){
            const data = [id ,...pars]
            Swal.fire({
                title: "Fovorite Add Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('favorite', JSON.stringify(data))
        }
        else{
            Swal.fire({
                title: "Fovorite Add Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('favorite', JSON.stringify([id]))
        }

    }




    return (
        <div>
            <div className=" border rounded p-2 group delay-[2000]" data-aos="zoom-in">
                <div className=' flex flex-col '>
                    <div className='h-[250px] relative flex-grow'>
                        <Link href={`/checkout/${id}`}>
                            <Image  width={250} height={250} className="rounded-t w-full h-full 
                            group-hover:scale-105 transition  z-0" src={image} alt="" />
                        </Link>
                        <span className='absolute top-2 left-2 bg-red-500 text-white rounded-xl px-2 '>
                            {/* -{product?.discount ? product?.discount : ''} % */}
                            {
                                product?.discount && <span>-{product?.discount}%</span>
                            }
                        </span>
                        <div className='absolute top-2 right-0 group-hover:right-2 group-hover:flex flex-col justify-center gap-3 hidden'>
                            <FaCartArrowDown onClick={()=>addToCartLocalhost(id)} className='cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded' />
                            <FaRegHeart onClick={()=>handleFavorite(id)} className='cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded' />
                        </div>
                    </div>


                    <div className='p-4 flex-grow'>
                        <div className=" flex justify-between">


                            <h4 className="font-semibold py-1 my-2 flex-grow text-[16px]">{title}</h4>

                            <div className="flex text-[12px] text-orange-400 pt-2">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <span className='ml-2'> ({review})</span>
                            </div>
                            {/* <FaHeart className="cursor-pointer text-red-500 text-xl"></FaHeart> */}



                        </div>
                        <div className="flex gap-2 justify-between text-white">
                            {
                                product?.discount ? <h3 className="text-[#EE4036] font-semibold text-2xl"><span>{price - Math.floor((price * product?.discount / 100))}৳</span>  <del className='text-[12px]'>{price}৳</del></h3> : <h3 className="text-[#EE4036] font-semibold text-2xl">{price}৳</h3>
                            }
                            {/* <button className="bg-gradient-to-r from-red-500 to-[#1f1c4e] py-2 w-1/2 = rounded-md">Add to Cart</button> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
