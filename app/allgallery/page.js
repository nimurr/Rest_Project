import React from 'react'
import Image from 'next/image';
import Gallery from '@/components/Gallery'

export default function page() {
  return (
    <div>
      <div className="max-w-7xl my-20 mx-auto">
      <div className="">
        <div className="my-8 flex  justify-between w-full">
          <div className="">
            <h2 className="sm:text-4xl text-xl font-semibold text-[#262261]">
              Photo & Gallery
            </h2>
            <span className="h-1 sm:w-52 bg-[#EE4036] block mt-2"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-4 ">
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full  hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl max-h-[250px] "
            src="https://i.ibb.co/KKkg4dg/pexels-ella-olsson-1640772-1.png"
            alt="Gallery Image"
          />
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl  max-h-[250px] "
            src="https://i.ibb.co/fkfbwXn/pexels-photo-276681-1.png"
            alt="Gallery Image"
          />
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl  max-h-[250px]"
            src="https://i.ibb.co/0Gjc3vq/pexels-photo-2291599-1.png"
            alt="Gallery Image"
          />
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl  max-h-[250px]"
            src="https://i.ibb.co/LQnx6xX/pexels-photo-1741286-1.png"
            alt="Gallery Image"
          />
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl  max-h-[250px]"
            src="https://i.ibb.co/LQnx6xX/pexels-photo-1741286-1.png"
            alt="Gallery Image"
          />
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl  max-h-[250px]"
            src="https://i.ibb.co/SVzd82S/pexels-photo-376464-1.png"
            alt="Gallery Image"
          />
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl  max-h-[250px]"
            src="https://i.ibb.co/gm87Rwp/pexels-photo-2956952-1.png"
            alt="Gallery Image"
          />
          <Image
            width={500}
            height={300}
            data-aos="zoom-in"
            className="w-full hover:scale-105 duration-300 rounded-lg shadow-md hover:shadow-2xl  max-h-[250px]"
            src="https://i.ibb.co/KKkg4dg/pexels-ella-olsson-1640772-1.png"
            alt="Gallery Image"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
