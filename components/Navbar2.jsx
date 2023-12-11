"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { FaHeart } from "react-icons/fa";

export default function Navbar2() {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);
  const handleMenuClicked = () => {
    console.log("clicked");
    setMenu(!menu);
  };

  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="bg-gray-100 sticky top-0 z-50 text_family">
      <div className="max-w-7xl mx-auto lg:w-full px-4 lg:px-0">
        <nav className="flex justify-between items-center py-5 lg:py-0 ">
          <div className="hidden sm:block">
            <Link
              href={"/"}
              className="md:text-4xl text-2xl font-bold text-blue-500"
            >
              <Image
                width={150}
                height={55}
                className="w-20 sm:w-40"
                src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701838233/Screenshot_9-removebg-preview_iqqrld.png"
                alt=""
              />
            </Link>
          </div>

          <div className="flex  items-center w-full lg:justify-end sm:gap-5 gap-2 relative">
            <div onClick={handleMenuClicked} className="lg:hidden block">
              {!menu ? (
                <IoMdMenu className="sm:text-3xl text-2xl" />
              ) : (
                <AiOutlineClose className="sm:text-3xl text-2xl" />
              )}
            </div>
            <div
              className={`lg:block ${
                !menu ? "hidden" : "absolute top-14 w-full p-2 bg-gray-100"
              } `}
            >
              <ul
                className={` ${
                  !menu ? "block" : ""
                } lg:flex items-center gap-5 font-semibold`}
              >
                <Link
                  href={"/"}
                  className={`py-8 text-[16px] cursor-pointer ${
                    pathname == "/" ? "text-red-500 font-semibold" : ""
                  } cursor-pointer bg-transparent`}
                >
                  Home
                </Link>
                <Link
                  href={"/shop"}
                  className={`md:py-8 text-[16px]  ${
                    !menu ? "" : "block py-3"
                  } cursor-pointer ${
                    pathname == "/shop" ? "text-red-500 font-semibold" : ""
                  } cursor-pointer bg-transparent`}
                >
                  Shop
                </Link>
                <div
                  className={`md:py-8 text-[16px]  ${
                    !menu ? "" : "block py-3"
                  } group cursor-pointer  `}
                >
                  Menu <FaAngleDown className="inline" />
                  <ul className="absolute hidden group-hover:block mt-8 z-50 ">
                    <div className="">
                      
                      <Link href={'/category/barger'}  className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2">
                        <Image
                          className=" cursor-pointer w-10 h-10 rounded-full"
                          src={"https://i.ibb.co/FJNqb44/images.jpg"}
                          alt="user"
                          width={40}
                          height={40}
                        />{" "}
                        Barger
                      </Link>
                      <Link
                        href={"/category/pizza"}
                        className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2"
                      >
                        <Image
                          className=" cursor-pointer w-10 h-10 rounded-full"
                          src={"https://i.ibb.co/g6jCxmr/download.jpg"}
                          alt="user"
                          width={40}
                          height={40}
                        />{" "}
                        Pizza
                      </Link>
                      <Link
                        href={"/category/sanduage"}
                        className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2"
                      >
                        <Image
                          className=" cursor-pointer w-10 h-10 rounded-full"
                          src={"https://i.ibb.co/f8LWj1b/images.jpg"}
                          alt="user"
                          width={40}
                          height={40}
                        />{" "}
                        Sanduage
                      </Link>
                    </div>
                  </ul>
                </div>
                <Link
                  href={"/pages"}
                  className={`md:py-8 text-[16px]  ${
                    !menu ? "" : "block py-3"
                  } cursor-pointer ${
                    pathname == "/pages" ? "text-red-500 font-semibold" : ""
                  } cursor-pointer bg-transparent`}
                >
                  Pages
                </Link>
                <Link
                  href={"/about"}
                  className={`md:py-8 text-[16px]  ${
                    !menu ? "" : "block py-3"
                  } cursor-pointer ${
                    pathname == "/about" ? "text-red-500 font-semibold" : ""
                  } cursor-pointer bg-transparent`}
                >
                  About
                </Link>
                <Link
                  href={"/contact"}
                  className={`md:py-8 text-[16px]  ${
                    !menu ? "" : "block py-3"
                  } cursor-pointer ${
                    pathname == "/contact" ? "text-red-500 font-semibold" : ""
                  } cursor-pointer bg-transparent`}
                >
                  Contact
                </Link>
              </ul>
            </div>
            <label className=" bg-transparent cursor-pointer rounded-md overflow-hidden flex items-center gap-2 bg-white pr-1">
              <input
                className="border-0 outline-0 p-2 outline-none"
                type="text"
                placeholder="Search Item .."
              />
              <IoSearch className="text-2xl" />
            </label>

            <Link
              href={"/favorite"}
              className={`${
                pathname == "/favorite" ? "text-red-500" : ""
              } cursor-pointer bg-transparent`}
            >
              <FaHeart
                onClick={handleSearch}
                className="sm:text-3xl text-xl bg-transparent "
              />
            </Link>

            <Link
              href={"/addproduct"}
              className={`${
                pathname == "/addproduct" ? "text-red-500" : ""
              } cursor-pointer bg-transparent`}
            >
              <MdShoppingCart
                onClick={handleSearch}
                className="sm:text-3xl text-xl bg-transparent "
              />
            </Link>
            

            <Link href={"/profile"}>
              <Image
                className=" cursor-pointer sm:w-10 w-8 h-8 sm:h-10"
                src={
                  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                }
                alt="user"
                width={40}
                height={40}
              />
            </Link>
            {/* {search && (
              <input
                type="text"
                placeholder="search now"
                className="absolute border-0 shadow-md rounded-md top-16 sm:right-20 right-10 md:top-20 md:right-[100px] lg:w-[500px] z-50"
              />
            )} */}
          </div>
        </nav>
      </div>
    </div>
  );
}
