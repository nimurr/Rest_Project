"use client";
import { AiOutlineHeart, AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
// import img from '../../src/assets/Restuarant X-01 1.png'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {

  // const [cartLength, setCartLength] = useState([])
  // useEffect(() => {
  //   const addtocatdata = localStorage.getItem('addToCart');
  //   const data = JSON.parse(addtocatdata);
  //   setCartLength(data)
  // }, [])

  // console.log(cartLength.length)
  const pathname = usePathname();


  const navLink = [
    {name:"Shop" , href:"/shop"},
    {name:"Pages" , href:"/pages"},
    {name:"Contact" , href:"/contact"},
    {name:"About" , href:"/about"}
  ]

  // const li = <div className="sm:flex gap-4 block">
  //   <Link className={`block my-2 '} `} href='/shop'>Shop</Link>
  //   <Link className="block my-2" href='/pages'>Pages</Link>
  //   <Link className="block my-2" href='/contact'>Contact</Link>
  //   <Link className="block my-2" href='/about'>About</Link>
  // </div>


  return (
    <div className="sticky top-0 z-50 shadow-red-100 bg-white shadow">
      <div className=" bg-white max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
        <div className="navbar py-5">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 text-xl p-2 shadow bg-base-100 rounded-box w-56 z-50">
                <li>
                  <a>Menu</a>
                  <ul className="p-2">
                    <Link className="block py-2 px-4" href='/menu1'>menu1</Link>
                    <Link className="block py-2 px-4" href='/'>menu2</Link>
                    <Link className="block py-2 px-4" href='/'>menu3</Link>
                  </ul>
                </li>
                <div className="block">
                  {/* {li} */}
                  {
                  navLink.map(link => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                      <Link className={`block my-2 ${isActive ? 'text-red-500 border-b border-red-500' : ''}`} href={link.href} key={link.name}>
                        {link.name}
                      </Link>
                    )
                  })
                }

                </div>
              </ul>
            </div>
            <Link href='/' className="normal-case text-xl cursor-pointer">
              <Image width={500} height={200} className="md:w-44 w-28" src={'https://res.cloudinary.com/dav9mftpk/image/upload/v1701778898/resturent_logo_ati6bk.png'} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex mr-2">
            <ul className="menu menu-horizontal px-1 z-50 text-xl">
              <li tabIndex={0}>
                <details>
                  <summary>Menu</summary>
                  <ul className="p-1 w-96 grid grid-cols-2">
                    <Link className="block py-2 px-4 hover:bg-gray-100" href='/category/burger'>
                      <div className="flex gap-2 ">
                        <Image width={50} height={20} className="w-10 h-10 rounded-full" src="https://i.ibb.co/LQnx6xX/pexels-photo-1741286-1.png" alt="" /> Burger
                      </div>
                    </Link>
                    <Link className="block hover:bg-gray-100 py-2 px-4 " href='/category/pizza'>
                      <div className="flex gap-2 ">
                        <Image width={50} height={20} className="w-10 h-10 rounded-full" src="https://i.ibb.co/SVzd82S/pexels-photo-376464-1.png" alt="" /> Pizza
                      </div>
                    </Link>
                    <Link className="block hover:bg-gray-100 py-2 px-4 " href='/category/sanduage'>
                      <div className="flex gap-2 ">
                        <Image width={50} height={20} className="w-10 h-10 rounded-full" src="https://i.ibb.co/KKkg4dg/pexels-ella-olsson-1640772-1.png" alt="" /> Sanduage
                      </div>
                    </Link>
                    <Link className="block hover:bg-gray-100 py-2 px-4 " href='/category/sanduage'>
                      <div className="flex gap-2 ">
                        <Image width={50} height={20} className="w-10 h-10 rounded-full" src="https://i.ibb.co/KKkg4dg/pexels-ella-olsson-1640772-1.png" alt="" /> Sanduage
                      </div>
                    </Link>
                    <Link className="block hover:bg-gray-100 py-2 px-4 " href='/category/sanduage'>
                      <div className="flex gap-2 ">
                        <Image width={50} height={20} className="w-10 h-10 rounded-full" src="https://i.ibb.co/KKkg4dg/pexels-ella-olsson-1640772-1.png" alt="" /> Sanduage
                      </div>
                    </Link>

                  </ul>
                </details>
              </li>
              <div className="flex items-center gap-4">
                {/* {li} */}
                {
                  navLink.map(link => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                      <Link className={`${isActive ? 'text-red-500 border-b-2 py-1 border-red-500' : ''}`} href={link.href} key={link.name}>
                        {link.name}
                      </Link>
                    )
                  })
                }
              </div>
            </ul>
          </div>
          <div className="navbar-end flex items-center">
            <div className="sm:flex hidden items-center gap-2 mr-2">
              <form className="flex items-center px-2 py-1 rounded-md border-2 ">
                <input className="outline-none bg-transparent " type="text" placeholder="search now" />
                <button type="submit"><AiOutlineSearch className="cursor-pointer"></AiOutlineSearch></button>
              </form>
              <Link href='/favorite'><AiOutlineHeart className="text-3xl cursor-pointer"></AiOutlineHeart></Link>
              <Link href='/addproduct'><AiOutlineShopping className="text-3xl cursor-pointer relative"></AiOutlineShopping>
                {/* <span className="absolute top-8 bg-red-500 w-4 h-4  text-[10px] flex justify-center items-center rounded-full text-white"> */}
                {/* {cartLength.length} */}
                {/* </span> */}
              </Link>
            </div>
            <Link href='/login' className="md:py-2 p-1 md:px-4 cursor-pointer rounded-md bg-[#EE4036] text-white">Register/Login</Link>
          </div>
        </div>
      </div>
       
      {/* <span className="block h-1 w-full bg-red-500"></span> */}
    </div>
  )
}
