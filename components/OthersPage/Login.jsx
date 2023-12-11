import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div>
        <div className=" my-20 flex w-11/12 mx-auto items-center" >
           
           <div className=" bg-gray-100 rounded md:flex gap-5 mx-auto">
           <div className="hidden md:block md:w-2/4">
               <Image width={550} height={300}  className="h-full w-full object-cover rounded-l" src="https://i.ibb.co/dB5DTJM/6333050-removebg-preview.png" alt="food" />
           </div>
              <div className=" md:w-2/4 p-10">
              <h2 className="text-3xl py-5 font-semibold">Login IN NOW</h2>
               <form  className="text-xl space-y-4" action="#">
   
                   <label htmlFor="email" className="flex gap-2 flex-col">
                       <span className="text-start">Email</span>
                       <input  id="email" className="p-3 shadow-md  rounded outline-none text-sm" type="email" placeholder="email here..." name="email" required />
                   </label>
   
                   <label htmlFor="password" className="flex gap-2 flex-col">
                       <span className="text-start">Password</span>
                       <input  id="password" className=" shadow-md p-3 rounded outline-none text-sm" type="password" placeholder="password here..." name="password" required />
                   </label>
                   <div >
                       <input className="text-white py-2 block rounded bg-[#EE4036] w-full cursor-pointer" type="submit" value="Sign In" />
                       <p className="text-lg mt-4"> Do not have a account? <Link className="font-semibold text-blue-600" href={'/register'}><span>Please Register</span></Link> </p>
                   </div>
               </form>
              </div>
           </div>
       </div>
    </div>
  )
}
