import Image from "next/image";

export default function Offers() {
  return (
    <div className="bg-gray-100 text_family px-4 my-10 lg:px-0"> 
    <div className="max-w-7xl mx-auto py-20">
      <div className="lg:grid grid-cols-2 flex flex-col-reverse justify-center items-center">
        <div>
          <div>
            <h2 className="sm:text-5xl text-2xl font-semibold text-red-500">
              All Burger
            </h2>
            <span className="sm:text-[200px]  text-black text-[100px] font-semibold leading-[1.2]">
              50%<span className="sm:text-5xl text-3xl">off</span>
            </span>
            <p className="text-[18px] text-gray-600">It seems like you are looking for someone to provide a food offer in exchange for work. If you have a specific request or job you need assistance with, please provide more details so that I can better understand your needs and offer guidance. Whether it is a specific type of work, skills required, or the nature of the food offer, providing more information will help me assist you more effectively.</p>
            <button className="bg-red-500 p-3 mt-4 rounded hover:bg-blue-500 duration-500 text-white font-semibold block">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image
            className="w-full"
            src={
              "https://res.cloudinary.com/dav9mftpk/image/upload/v1701847180/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas-2829-9119-removebg-preview_kqw3s5.png"
            }
            alt=""
            width={350}
            height={300}
          />
        </div>
      </div>
    </div> 
  </div>
  );
}
