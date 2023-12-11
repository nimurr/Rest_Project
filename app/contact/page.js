import React from "react";
import { BiSolidUser, BiSend } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiFillMessage, AiOutlineCloseCircle } from "react-icons/ai";

export default function page() {
  return (
    <div>
      <div className="allContactGradint flex items-center justify-center  ">
        <h3 className="text-5xl font-bold text-center  text-white">
          Contact US
        </h3>
      </div>

      <div className="mb-20 max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
        <div>
          <div className="my-5">
            <h2 className="sm:text-4xl text-2xl text-[#262261]">CONTACT US</h2>
            <span className="h-1 md:w-2/12 sm:w-3/12 w-4/12 bg-[#EE4036] block mt-2"></span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2138.8850520974183!2d88.65572747319919!3d25.63276340978749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb52ea962e46f1%3A0xc625d11b06fa3bb6!2sJMJ3%2BQPM%2C%20Dinajpur%205200!5e0!3m2!1sen!2sbd!4v1699166093909!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                className="w-full md:h-full h-[30vh]"
              ></iframe>
            </div>
            <div>
              <form>
                <label className="mb-5 block">
                  <span className="flex gap-2 items-center text-2xl mb-2">
                    <BiSolidUser></BiSolidUser>{" "}
                    <span className="text-[18px]">Your Name</span>
                  </span>
                  <input
                    className="w-full border-gray-300 border-2 p-2 rounded-md "
                    type="text"
                    placeholder="Your name"
                  />
                </label>
                <label className="mb-5 block">
                  <span className="flex gap-2 items-center text-2xl mb-2 ">
                    <MdEmail></MdEmail>{" "}
                    <span className="text-[18px]">Your Email</span>
                  </span>
                  <input
                    className="w-full border-gray-300 border-2 p-2 rounded-md "
                    type="email"
                    placeholder="Your Email"
                  />
                </label>
                <label className="mb-5 block">
                  <span className="flex gap-2 items-center text-2xl mb-2">
                    <AiFillMessage></AiFillMessage>{" "}
                    <span className="text-[18px]">Your Message</span>
                  </span>
                  <textarea
                    className="w-full border-gray-300 border-2 p-2 rounded-md h-28"
                    type="text"
                    placeholder="Your Message"
                  />
                </label>
                <label className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white  rounded-md p-2 text-xl w-1/2 items-center flex justify-center gap-4"
                  >
                    {" "}
                    <BiSend></BiSend> <span>Send</span>
                  </button>
                  <button className="text-white bg-red-500 rounded-md p-2 text-xl w-1/2 items-center flex justify-center gap-4">
                    {" "}
                    <AiOutlineCloseCircle></AiOutlineCloseCircle>{" "}
                    <span>Clear</span>
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
