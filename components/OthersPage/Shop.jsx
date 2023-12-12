"use client";
import Image from "next/image";
// import React, { useState } from 'react'
import { LiaTableSolid } from "react-icons/lia";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaStar, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function Shop() {
  const [allproduct, setAllproduct] = useState([]);
  const [product, setProduct] = useState([]);

// paginaiton 

const [currentPage,setCurrentPage]=useState(1)
const [newsPerPage,setNewsPerPage]=useState(4);
const dataLength = product.length;
const totalPages =Math.ceil(dataLength/newsPerPage)
const startIndex =((currentPage-1)*newsPerPage);
const endIndex = startIndex + newsPerPage;
const sliceddata = product.slice(startIndex,endIndex);
const numbers =[...Array(totalPages).keys()]
const [ser, setSer] = useState([]);
const [tru, setTru] = useState(true);

// console.log(numbers, sliceddata)




  useEffect(() => {
    async function products() {
      await fetch("http://localhost:5002/restaurant")
        .then((res) => res.json())
        .then((data) => {
          setAllproduct(data);
          setProduct(data);
        });
    }
    products();
  }, []);

  const updateRangePrice = useRef();
  const [updateRangePriceValue, setupdateRangePriceValue] = useState(0);
  const updateselectPrice = useRef();

  const handelFilterProduct = () => {
    const priceRange = updateRangePrice.current.value;
    setupdateRangePriceValue(priceRange);
    const filterproduct = allproduct.filter(
      (product) => product.price <= priceRange
    );
    setProduct(filterproduct);
  };
  const handleSelectPriceOpiton = () => {
    const pricetype = updateselectPrice.current.value;
    if (pricetype == "low") {
      const filterproduct = product.sort((a, b) => a.price - b.price);
      setProduct(filterproduct);
      console.log(filterproduct);
    }
    if (pricetype == "heigh") {
      const filterproduct = product.sort((a, b) => b.price - a.price);
      setProduct(filterproduct);
      console.log(filterproduct);
    }

    console.log(pricetype);
  };

  useEffect(() => {
    async function products() {
      await fetch(" http://localhost:5002/restaurant")
        .then((res) => res.json())
        .then((data) => {
          setAllproduct(data);
          setProduct(data);
        });
    }
    products();
  }, []);

  const addToCartLocalhost = (id) => {
    const cartItem = localStorage.getItem("addToCart");
    const pars = JSON.parse(cartItem);

    if (pars && pars.find((d) => d == id)) {
      return Swal.fire({
        icon: "error",
        title: "Already Added !",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else if (pars) {
      const data = [id, ...pars];
      Swal.fire({
        title: "Add To Card Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("addToCart", JSON.stringify(data));
    } else {
      Swal.fire({
        title: "Add To Card Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("addToCart", JSON.stringify([id]));
    }
    // const data = [id, ...pars];
  };

  const handleFavorite = (id) => {
    const cartItem = localStorage.getItem("favorite");
    const pars = JSON.parse(cartItem);
    if (pars && pars.find((d) => d == id)) {
      return Swal.fire({
        icon: "error",
        title: "Already Added !",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else if (pars) {
      const data = [id, ...pars];
      Swal.fire({
        title: "Fovorite Add Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("favorite", JSON.stringify(data));
    } else {
      Swal.fire({
        title: "Fovorite Add Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("favorite", JSON.stringify([id]));
    }
  };

  const [column, setColumn] = useState(true);
  const handleColumn3 = () => {
    setColumn(true);
  };
  const handleColumn1 = () => {
    setColumn(false);
  };

  const handelProductCategoryFilter = (value) => {
    console.log(value);
    console.log(allproduct);

    const categoryFilter = allproduct.filter((item) => item.category == value);
    setProduct(categoryFilter);
  };

  return (
    <div className="">
      <div className="allShopGradint">
        <div className="  text-center h-[30vh] flex justify-center items-center ">
          <h2 className="text-5xl text-white font-semibold">Shop</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
        {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
        <div className="md:grid md:grid-cols-2 xl:grid-cols-4 justify-between gap-7 my-10">
          <div className="lg:col-span-1 w-full">
            <div>
              <div className="p-4 bg-gray-100 my-4">
                <h2 className="font-semibold mb-4 text-xl">Categories</h2>
                <div>
                  <ul>
                    <li onClick={() => handelProductCategoryFilter("barger")} className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      <button>
                        Barger
                      </button>
                    </li>
                    <li  onClick={() => handelProductCategoryFilter("pizza")} className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      <button>
                        Pizza
                      </button>
                    </li>
                    <li onClick={() => handelProductCategoryFilter("sanduage")} className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      <button>
                        Sanduage
                      </button>
                    </li>
                    <li onClick={() => handelProductCategoryFilter("pizza")} className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      <button>
                        Pizza
                      </button>
                    </li>
                    <li onClick={() => handelProductCategoryFilter("sanduage")} className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      <button>
                        Sanduage
                      </button>
                    </li>
                    <li onClick={() => handelProductCategoryFilter("barger")} className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      <button>
                        Barger
                      </button>
                    </li>
                    <li onClick={() => handelProductCategoryFilter("sanduage")} className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      <button>
                        Sanduage
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-gray-100 my-4">
                <h2 className="text-xl bg-gray-100 font-semibold">
                  BY Range{" "}
                  {updateRangePriceValue ? updateRangePriceValue : "250"}
                </h2>
                <input
                  type="range"
                  min={100}
                  max={400}
                  ref={updateRangePrice}
                  onChange={handelFilterProduct}
                  className="w-full my-2 "
                />
                <span className="mx-2">100$</span>
                to
                <span className="mx-2">400$</span>
              </div>
              <form>
                {/* <h3 className="text-xl p-4 bg-gray-100 font-semibold">
                  Price Range
                </h3> */}

                {/* <div className="p-4 my-4 bg-gray-100">
                  <h3 className="text-xl mb-2 font-semibold">Price</h3>
                  <label htmlFor="id" className="block my-2">
                    <input type="checkbox" name="" id="id" />
                    <span> $10 to $20</span>
                  </label>
                  <label htmlFor="id1" className="block my-2">
                    <input type="checkbox" name="" id="id1" />
                    <span> $20 to $30</span>
                  </label>
                  <label htmlFor="id2" className="block my-2">
                    <input type="checkbox" name="" id="id2" />
                    <span> $30 to $40</span>
                  </label>
                </div> */}
                <div className="flex justify-between gap-2 p-4 my-4  bg-gray-100">
                  <button className="border-red-500 border rounded font-semibold hover:bg-red-500 hover:text-white w-1/2 p-2">
                    Best Selling
                  </button>
                  <button className="border-red-500 border rounded font-semibold hover:bg-red-500 hover:text-white w-1/2 p-2">
                    Hot Product
                  </button>
                </div>
                <button
                  type="submit"
                  className="p-2 w-full bg-red-500 text-white font-semibold rounded my-4"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
          <div className="md:col-span-3 mt-4">


                

            <div className="bg-gray-100 p-4 sm:flex justify-between items-center">
              <p>{product.length} Products Found </p>
              <div className="flex items-center gap-4">
                {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                <select
                  ref={updateselectPrice}
                  onChange={handleSelectPriceOpiton}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected ><span className="py-2 block">Heigh To Low</span></option>
                  <option value="US">Low To Heigh</option>
                </select>
                <LiaTableSolid
                  onClick={handleColumn3}
                  className="text-5xl cursor-pointer text-gray-700"
                />
                <TfiMenuAlt
                  onClick={handleColumn1}
                  className="text-4xl cursor-pointer text-gray-700"
                />
              </div>
            </div>

            {product.length < 1 && (
              <div className="w-20 mx-auto my-10" role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}

              <div>
                  {
                 tru ?
                    <div className="w-full my-4 mx-auto " >
                     <div className="my-10 md:w-full gap-4 mx-auto">
                            <div className="col-span-3 md:col-span-2  grid md:grid-cols-3 gap-4">
                                {
                                    sliceddata.map((prod) => (
                                      <div data-aos="fade-up" key={prod.id}>
                                        <div
                                          className=" border rounded p-2 group delay-[2000]"
                                          data-aos="zoom-in"
                                        >
                                          <div className={`${column ? "" : "flex"}`}>
                                            <div
                                              className={`${
                                                column ? "" : "flex"
                                              } h-[250px] relative flex-grow`}
                                            >
                                              <Link href={`/checkout/${prod.id}`}>
                                                <Image
                                                  width={250}
                                                  height={250}
                                                  className="rounded-t w-full h-full 
                                                  group-hover:scale-105 transition  z-0"
                                                  src={prod.image}
                                                  alt=""
                                                />
                                              </Link>
                                              <span className="absolute top-2 left-2 bg-red-500 text-white rounded-xl px-2 ">
                                                {/* -{product?.discount ? product?.discount : ''} % */}
                                                {product?.discount && (
                                                  <span>-{product?.discount}%</span>
                                                )}
                                              </span>
                                              <div className="absolute top-2 right-0 group-hover:right-2 group-hover:flex flex-col justify-center gap-3 hidden">
                                                <FaCartArrowDown
                                                  onClick={() => addToCartLocalhost(prod.id)}
                                                  className="cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded"
                                                />
                                                <FaRegHeart
                                                  onClick={() => handleFavorite(prod.id)}
                                                  className="cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded"
                                                />
                                              </div>
                                            </div>
                      
                                            <div className="p-4 flex-grow">
                                              <div className=" flex justify-between">
                                                <h4 className="font-semibold py-1 my-2 flex-grow text-[16px]">
                                                  {prod.title}
                                                </h4>
                      
                                                <div className="flex text-[12px] text-orange-400 pt-2">
                                                  <FaStar></FaStar>
                                                  <FaStar></FaStar>
                                                  <FaStar></FaStar>
                                                  <FaStar></FaStar>
                                                  <FaStar></FaStar>
                                                  <span className="ml-2"> ({prod.review})</span>
                                                </div>
                                                {/* <FaHeart className="cursor-pointer text-red-500 text-xl"></FaHeart> */}
                                              </div>
                                              <div className="flex gap-2 justify-between text-white">
                                                {product?.discount ? (
                                                  <h3 className="text-[#EE4036] font-semibold text-2xl">
                                                    <span>
                                                      {prod.price -
                                                        (prod.price * product?.discount) / 100}
                                                      ৳
                                                    </span>{" "}
                                                    <del className="text-[12px]">{prod.price}৳</del>
                                                  </h3>
                                                ) : (
                                                  <h3 className="text-[#EE4036] font-semibold text-2xl">
                                                    {prod.price}৳
                                                  </h3>
                                                )}
                                                {/* <button className="bg-gradient-to-r from-red-500 to-[#1f1c4e] py-2 w-1/2 = rounded-md">Add to Cart</button> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    : <h2 className="text-4xl text-center my-10 font-bold text-red-500"> {ser ? '' : 'Search Result Data Not Found... !'} </h2>
                }
           
                </div>
                <div>
                    {numbers.map((number) => (
                      <button
                        className={`${
                          currentPage === number + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-300"
                        } py-2 px-4 mx-2 rounded`}
                        key={number}
                        onClick={() => setCurrentPage(number + 1)}
                      >
                        {number + 1}
                </button>
              ))}
            </div>
          <div>
              {/* {numbers.map((number) => (
                <button
                  className={`${
                    currentPage === number + 1
                      ? "bg-red-700 text-white"
                      : "bg-gray-300"
                  } px-2 mx-1 rounded`}
                  key={number}
                  onClick={() => setCurrentPage(number + 1)}
                >
                  {number + 1}
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
