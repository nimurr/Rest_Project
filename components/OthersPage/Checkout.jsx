"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";



import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


function Checkout({ params }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function mainProduct() {
      await fetch(`http://localhost:5002/restaurant/${params.id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
    mainProduct();
  }, []);

  console.log(product.image);

  const [value, setValue] = useState(0);

  const handleQuintity = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      alert("can not dicrease");
    }
  };
  const handleQuintityIncress = () => {
    setValue(value + 1);
  };

  console.log(value);

  return (
    <div>


      <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4 my-20">
        <div className=" flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5 my-5">
          <figure className="flex-1">

          <div className="md:w-[550px] w-[300px] border-2 py-10 rounded-md">
            {
              !product? 'cxcvghdvfcdbcxbvb':
                  <div>
                    <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  loop={true}
                  spaceBetween={1}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                  >

                  <SwiperSlide>
                    <Image alt='' className="w-full" width={500} height={500} src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-full" width={500} height={500} src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-full" width={500} height={500} src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-full" width={500} height={500} src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-full" width={500} height={500} src={product.image} />
                  </SwiperSlide>

                  </Swiper>
                  <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  // spaceBetween={}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper w-6/12 mt-2 mx-auto"
                  >
                  <SwiperSlide>
                    <Image alt='' className="w-50 h-50 rounded-md cursor-pointer" width={50} height={50}  src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-50 h-50 rounded-md cursor-pointer" width={50} height={50} src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-50 h-50 rounded-md cursor-pointer" width={50} height={50} src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-50 h-50 rounded-md cursor-pointer" width={50} height={50} src={product.image} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt='' className="w-50 h-50 rounded-md cursor-pointer" width={50} height={50} src={product.image} />
                  </SwiperSlide>
                  </Swiper>
                  </div>
            }
          </div>
            

          </figure>
          <div className="md:flex-1 text-start">
            <h2 className="text-4xl font-semibold">{product?.title}</h2>
            <div className="py-3 space-y-5">
              <p className="flex items-center gap-2">
                {" "}
                <span className="flex ">
                  <AiFillStar className="text-orange-400" />
                  <AiFillStar className="text-orange-400" />
                  <AiFillStar className="text-orange-400" />
                  <AiFillStar className="text-orange-400" />
                  <AiOutlineStar />
                </span>
                <span>Review : 5</span>
                <span className="font-semibold text-[#EE4036]">Aviable</span>
              </p>
              <div className="space-y-2">
                <p className="text-xl text-[#EE4036] font-semibold">
                  Price: {product?.price}
                </p>
                <p>
                  NIB SIZE: <span className="font-semibold">EXTRA FINE</span>
                </p>
                <p className="flex gap-3 text-white">
                  <del>
                    <span className="py-2 px-4 rounded bg-[#ee3f365e]">
                      Extra
                    </span>
                  </del>
                  <del>
                    <span className="py-2 px-4 rounded bg-[#ee3f365e]">
                      Fine
                    </span>
                  </del>
                  <del>
                    <span className="py-2 px-4 rounded bg-[#ee3f365e]">
                      Medium
                    </span>
                  </del>
                </p>
                <p>Shipping calculated at checkout.</p>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="border p-2 w-20 rounded text-xl"
                >
                  <option disabled value="0">
                    0
                  </option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                </select>
                <span className="ml-2 font-semibold">Enter Your Size</span>
              </div>
              <div className="flex gap-5 items-center">
                <p className="bordered border-2 text-xl px-2 py-2">
                  <button onClick={handleQuintity} className="px-4">
                    -
                  </button>
                  <span>{value}</span>
                  <button onClick={handleQuintityIncress} className="px-4">
                    +
                  </button>
                </p>
                <Link
                  href={`/order`}
                  className="text-xl text-white rounded bg-[#ee3f36e8] hover:bg-[#EE4036] px-4 py-3"
                >
                  Order Now
                </Link>
              </div>
              <p> FREE SHIPPING OVER $50</p>
            </div>
          </div>
        </div>
        <Tabs className="my-20 p-5">
          <TabList>
            <Tab>Description</Tab>
            <Tab>Review</Tab>
          </TabList>

          <TabPanel className="py-10">
            <h2 className="text-xl font-semibold my-3">{product?.title}</h2>
            <p>
              {" "}
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
            </p>
            <p className="mt-4">
              {" "}
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
            </p>
            <h2 className="text-xl font-semibold my-3">Our Best Product </h2>
            <p>
              {" "}
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
            </p>
            <p className="mt-4">
              {" "}
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
              Describe the flavors and textures of a classic Italian dish like
              spaghetti carbonara . What are the key ingredients and cooking
              techniques used in Japanese cuisine? . Explain the differences
              between Neapolitan, New York-style, and Chicago-style pizza.
            </p>
          </TabPanel>
          <TabPanel>
            <div className="p-8 mb-10 rounded border border-gray-200">
              <h1 className="font-medium text-3xl">Add Your Review</h1>
              <form>
                <div className="mt-8 sm:grid lg:grid-cols-3 md:grid-cols-2  gap-4">
                  <div>
                    <label
                      for="name"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      Email Adress
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      placeholder="demo@gmail.com"
                    />
                  </div>
                  <div>
                    <label
                      for="job"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      Rating
                    </label>
                    <select
                      className="w-full bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      name=""
                      id=""
                    >
                      <option disabled value="0">
                        0
                      </option>
                      <option value="1">1</option>
                      <option value="4">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="col-span-3">
                    <label
                      for="brithday"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      Review Comments
                    </label>
                    <textarea
                      className="w-full bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      placeholder="Review Comments"
                      name=""
                      id=""
                      cols="200"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-4 mt-8">
                  <button
                    type="submit"
                    className="py-3 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 font-semibold"
                  >
                    Your Comments
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center gap-2 mb-10">
              <h2 className="text-4xl font-semibold mt-3 flex">
                4.8 <h2 className="text-[16px] font-semibold mt-3">(1.2k)</h2>
              </h2>
              <div className="flex items-center gap-1 mb-2">
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaRegStarHalfStroke className="text-orange-400" />
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex gap-3 items-start">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1380&t=st=1701943486~exp=1701944086~hmac=0fe77dedf75380a91ca19c8c37d2043401d9dee317cb2ef1f3b6732fcc5c6e8d"
                  }
                  className="rounded-full h-14 w-14 block"
                  alt=""
                  width={80}
                  height={80}
                />
                <div>
                  <h2 className="text-xl font-semibold ">Nimur</h2>
                  <div className="flex items-center gap-1 mb-2">
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <p>(5)</p>
                  </div>
                </div>
              </div>
              <p>
                Tucked away on a quiet side street, RestaurantX is a culinary
                gem that should not be missed. From the moment I stepped through
                the door, I was transported to a world of warmth and comfort.
                The aroma of spices and sizzling ingredients filled the air,
                whetting my appetite for the deliciousness to come.
              </p>
            </div>
            <div className="border-b pb-4 my-10">
              <div className="flex gap-3 items-start">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1380&t=st=1701943486~exp=1701944086~hmac=0fe77dedf75380a91ca19c8c37d2043401d9dee317cb2ef1f3b6732fcc5c6e8d"
                  }
                  className="rounded-full h-14 w-14 block"
                  alt=""
                  width={80}
                  height={80}
                />
                <div>
                  <h2 className="text-xl font-semibold ">Dipu</h2>
                  <div className="flex items-center gap-1 mb-2">
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <p>(5)</p>
                  </div>
                </div>
              </div>
              <p>
                Tucked away on a quiet side street, RestaurantX is a culinary
                gem that should not be missed. From the moment I stepped through
                the door, I was transported to a world of warmth and comfort.
                The aroma of spices and sizzling ingredients filled the air,
                whetting my appetite for the deliciousness to come.
              </p>
            </div>
            <div className="border-b pb-4 my-10">
              <div className="flex gap-3 items-start">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1380&t=st=1701943486~exp=1701944086~hmac=0fe77dedf75380a91ca19c8c37d2043401d9dee317cb2ef1f3b6732fcc5c6e8d"
                  }
                  className="rounded-full h-14 w-14 block"
                  alt=""
                  width={80}
                  height={80}
                />
                <div>
                  <h2 className="text-xl font-semibold ">Dipok</h2>
                  <div className="flex items-center gap-1 mb-2">
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <FaStar className="text-orange-400" />
                    <p>(5)</p>
                  </div>
                </div>
              </div>
              <p>
                Tucked away on a quiet side street, RestaurantX is a culinary
                gem that should not be missed. From the moment I stepped through
                the door, I was transported to a world of warmth and comfort.
                The aroma of spices and sizzling ingredients filled the air,
                whetting my appetite for the deliciousness to come.
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Checkout;
