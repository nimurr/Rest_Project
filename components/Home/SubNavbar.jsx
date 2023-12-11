import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";




export default function SubNavbar() {
  return (
    <div className='max-w-7xl mx-auto py-3 flex justify-between items-center px-4 lg:px-0'>
      <div className='sm:flex items-center gap-2'>
        <div className='font-semibold text-sm mb-1'><CiLocationOn className='inline  text-blue-500 text-xl mr-2' />Dinajpur Sadar , Dinajpur</div>
        <div className='font-semibold text-sm '><MdLocalPhone className='inline text-blue-500 text-xl mr-2' />+88 017********</div>
      </div>
      <div className='flex items-center gap-2'>
        <IoLogoFacebook className='text-2xl text-blue-600' />
        <IoLogoInstagram className='text-2xl text-yellow-400' />
        <FaYoutube className='text-2xl text-red-600' />
      </div>
    </div>
  )
}
