import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, } from 'react-icons/fa';
import { BiSolidRightArrow } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';



export default function Footer() {
  return (
    <div>
      <div className='bg-[#1B1B1B] '>
            <div className='max-w-7xl mx-auto lg:px-0 sm:px-10 px-4'>
                <div className='grid md:grid-cols-2 justify-center xl:grid-cols-4 xl:gap-20'>
                    <div className='bg-[#282828] py-10 px-5'>
                        <Image width={150} height={100} src="https://i.ibb.co/JCTxGy0/Restuarant-X-2-1.png" alt="" />
                        <p className='text-white py-4 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio distinctio ea quo nihil a.</p>
                        <h3 className='text-white pb-5 text-xl'>FOLLOW US</h3>
                        <div className='text-white gap-2 flex text-3xl cursor-pointer'>
                            <div className='bg-[#D9D9D9] p-2 rounded-full'><FaFacebook className='text-black text-xl'></FaFacebook></div>
                            <div className='bg-[#D9D9D9] p-2 rounded-full'><FaTwitter className='text-black text-xl'></FaTwitter></div>
                            <div className='bg-[#D9D9D9] p-2 rounded-full'><FaInstagram className='text-black text-xl'></FaInstagram></div>
                            <div className='bg-[#D9D9D9] p-2 rounded-full'><FaYoutube className='text-black text-xl'></FaYoutube></div>
                        </div>
                    </div>
                    <div className='py-10'>
                        <h3 className='text-white text-2xl'>Usefull Link</h3>
                        <div className='text-white space-y-3 mt-5'>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <Link href='/'>Home</Link>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <Link href='/shop'>Shop</Link>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <Link href='/pages'>Pages</Link>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <Link href='/about'>About</Link>
                            </div>
                        </div>
                    </div>
                    <div className='py-10'>
                        <h3 className='text-white text-2xl'>Help & Information</h3>
                        <div className='text-white space-y-3 mt-5'>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <Link href='/contact'>Contact</Link>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <Link href='/help'>Help</Link>
                            </div>
                            
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <Link href='/about'>Privacy & Policy</Link>
                            </div>

                        </div>
                    </div>
                    <div className='py-10'>
                        <h3 className='text-white text-2xl'>Location</h3>
                        <div className='text-white space-y-3 mt-5'>

                            <p>
                                Medda para Mure , <br/>
                                Dinajpur Sadar , Dinajpur 
                            </p>

                            {/* <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <h3>Gift & Bonuses</h3>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <h3>50% off sale</h3>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <h3>Mid-Season sale</h3>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BiSolidRightArrow className='text-[#EE4036]'></BiSolidRightArrow>
                                <h3>Delivery Information</h3>
                            </div> */}

                        </div>
                    </div>
                </div>
                <div className='bg-[#282828]  py-5 px-5 flex text-white justify-between'>
                    <h3>@2023, <span className='text-[#EE4036]'>Restuarant X</span>. All rights reserved</h3>
                    <div className='flex gap-10'>
                        <h2>PAYMENT METHOD</h2>
                        <div>
                            <Image className='cursor-pointer' width={200} height={100} src="https://i.ibb.co/0JGc8pm/images-2-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
