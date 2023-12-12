"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaRegHeart, FaStar } from "react-icons/fa";

export default function SingleCategory({params}) {
    
  console.log(params)

  const [category, setCategory] = useState([]);
  const [allproduct, setAllproduct] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5002/restaurant");
      const product = await res.json();
      setAllproduct(product);
    };
    fetchData();
  }, []);


    useEffect(()=>{
  const filterProduct = allproduct.filter(item=>item.category==params)
  setCategory(filterProduct);
  console.log(filterProduct);

},[allproduct])




  return (
    <div>
      <div className="grid grid-cols-3 gap-6 ">
        {category.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer border rounded p-2 group delay-[2000]"
            data-aos="zoom-in"
          >
            <div className=" flex flex-col ">
              <div className="h-[250px] relative flex-grow">
                <Link href={`/checkout/${product.id}`}>
                  <Image
                    width={250}
                    height={250}
                    className="rounded-t w-full h-full 
                              group-hover:scale-105 transition  z-0"
                    src={product.image}
                    alt=""
                  />
                </Link>
                <span className="absolute top-2 left-2 bg-red-500 text-white rounded-xl px-2 ">
                  {/* -{product?.discount ? product?.discount : ''} % */}
                  {product?.discount && <span>-{product?.discount}%</span>}
                </span>
                <div className="absolute top-2 right-0 group-hover:right-2 group-hover:flex flex-col justify-center gap-3 hidden">
                  <FaCartArrowDown
                    onClick={() => addToCartLocalhost(product.id)}
                    className="cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded"
                  />
                  <FaRegHeart
                    onClick={() => handleFavorite(product.id)}
                    className="cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded"
                  />
                </div>
              </div>

              <div className="p-4 flex-grow">
                <div className=" flex justify-between">
                  <h4 className="font-semibold py-1 my-2 flex-grow text-[16px]">
                    {product.title}
                  </h4>

                  <div className="flex text-[12px] text-orange-400 pt-2">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <span className="ml-2"> ({product.review})</span>
                  </div>
                  {/* <FaHeart className="cursor-pointer text-red-500 text-xl"></FaHeart> */}
                </div>
                <div className="flex gap-2 justify-between text-white">
                  {product?.discount ? (
                    <h3 className="text-[#EE4036] font-semibold text-2xl">
                      <span>
                        {product.price -
                          (product.price * product?.discount) / 100}
                        ৳
                      </span>{" "}
                      <del className="text-[12px]">{product.price}৳</del>
                    </h3>
                  ) : (
                    <h3 className="text-[#EE4036] font-semibold text-2xl">
                      {product.price}৳
                    </h3>
                  )}
                  {/* <button className="bg-gradient-to-r from-red-500 to-[#1f1c4e] py-2 w-1/2 = rounded-md">Add to Cart</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
