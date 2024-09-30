"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaStar, FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import Swal from 'sweetalert2';


export default function Favorite() {


    const [addToFavorite, setAddToFavorite] = useState([])
    useEffect(()=>{
        const fetchData = async () => {

            const cartItem = localStorage.getItem('favorite');
            const pars = JSON.parse(cartItem);
            const res = await fetch('http://localhost:5002/restaurant')
            const product = await res.json();
            setAddToFavorite(product.filter(d => pars?.includes(d.id)));

        }
        fetchData()
    },[])

    
    const handleAddToFavoriteDelete = (id) => {
        console.log(id)
        const localData = localStorage.getItem('favorite');
        const deleteDataById = JSON.parse(localData);
        const filter = deleteDataById.filter(d => d != id)
        localStorage.setItem('favorite', JSON.stringify(filter))
        const filterProduct2 = addToFavorite?.filter(i => i.id !== id)
        setAddToFavorite(filterProduct2)
    }

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

  return (
    <div className="lg:max-w-7xl mx-auto my-10 w-[95%]">
        {
            addToFavorite.length < 1 && <div className='w-20 mx-auto' role="status">
            <svg aria-hidden="true" className="inline w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
        }
      <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-5'>
      {
        addToFavorite?.map(product => 
        <div key={product.id}>
            <div className=" border rounded p-2 group delay-[2000]" data-aos="zoom-in">
                <div className=' flex flex-col '>
                    <div className='h-[250px] relative flex-grow'>
                        <Link href={`/checkout/${product.id}`}>
                            <Image  width={250} height={250} className="rounded-t w-full h-full 
                            group-hover:scale-105 transition  z-0" src={product.image} alt="" />
                        </Link>
                        <span className='absolute top-2 left-2 bg-red-500 text-white rounded-xl px-2 '>
                            {/* -{product?.discount ? product?.discount : ''} % */}
                            {
                                product?.discount && <span>-{product?.discount}%</span>
                            }
                        </span>
                        <div className='absolute top-2 right-0 group-hover:right-2 group-hover:flex flex-col justify-center gap-3 hidden'>
                            <FaCartArrowDown onClick={()=>addToCartLocalhost(product.id)} className='cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded' />
                            <MdDelete onClick={()=>handleAddToFavoriteDelete(product.id)} className='cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded' />
                        </div>
                    </div>
                    <div className='p-4 flex-grow'>
                        <div className=" flex justify-between">
                            <h4 className="font-semibold py-1 my-2 flex-grow text-[16px]">{product.title}</h4>
                            <div className="flex text-[12px] text-orange-400 pt-2">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <span className='ml-2'> ({product.review})</span>
                            </div>
                            {/* <FaHeart className="cursor-pointer text-red-500 text-xl"></FaHeart> */}
                        </div>
                        <div className="flex gap-2 justify-between text-white">
                            {
                                product?.discount ? <h3 className="text-[#EE4036] font-semibold text-2xl"><span>{product.price - (product.price * product?.discount / 100)}৳</span>  <del className='text-[12px]'>{product.price}৳</del></h3> : <h3 className="text-[#EE4036] font-semibold text-2xl">{product.price}৳</h3>
                            }
                            {/* <button className="bg-gradient-to-r from-red-500 to-[#1f1c4e] py-2 w-1/2 = rounded-md">Add to Cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        )
      }
      </div>
    </div>
  )
}
