import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="aboutBG">
        <div className="  text-center h-[30vh] flex justify-center items-center ">
          <h2 className="text-5xl text-white font-semibold">About</h2>
        </div>
      </div>
      <div className="max-w-7xl px-4 lg:px-0 mx-auto">
        <div className="">
          <div className="grid md:grid-cols-2 sm:py-20 py-5 sm:pb-32 pb-4 items-center sm:gap-40 gap-4">
            <div className="relative">
              <Image
                width={300}
                height={250}
                className="rounded h-96 object-cover"
                src="https://i.ibb.co/zQ1kNx1/mid-shot-chef-holding-plate-with-pasta-making-ok-sign.jpg"
                alt=""
              />
              <Image
                width={300}
                height={250}
                className="sm:absolute sm:w-72 mt-4 sm:mt-0 rounded -bottom-24 border-8 sm:-right-20  object-cover"
                src="https://i.ibb.co/LdzPLJb/2-3.jpg"
                alt=""
              />
            </div>
            
              <div className="">
                {/* <h2 className="text-4xl font-semibold py-5">About</h2> */}
                <h3 className="text-4xl pb-5">
                  RestaurantX One Of The Best Food Service
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  magnam doloremque repellendus possimus alias molestiae nostrum,
                  illo unde similique expedita ipsam dolore distinctio veritatis
                  porro soluta dicta dolorem exercitationem odio.
                </p>
                <div className="flex gap-5 py-3">
                  {/* <FaFacebook className='text-3xl text-[#262261] cursor-pointer'></FaFacebook>
                            <FaInstagram className='text-3xl cursor-pointer text-[#262261] '></FaInstagram>
                            <FaTwitter className='text-3xl cursor-pointer text-[#262261] '></FaTwitter> */}
                  <Image
                    width={300}
                    height={200}
                    className="w-10 cursor-pointer"
                    src="https://i.ibb.co/TLLhgBh/icons8-facebook-48.png"
                    alt=""
                  />
                  <Image
                    width={300}
                    height={200}
                    className="w-10 cursor-pointer"
                    src="https://i.ibb.co/NSsGkBV/icons8-twitter-48.png"
                    alt=""
                  />
                  <Image
                    width={300}
                    height={200}
                    className="w-10 cursor-pointer"
                    src="https://i.ibb.co/st7X33s/icons8-instagram-48.png"
                    alt=""
                  />
                </div>
                <button className="bg-[#EE4036] text-white py-3 my-5 px-10 text-xl rounded">
                  Contact
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
