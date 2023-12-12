import React from 'react'
import Image from "next/image";

export default function page() {
  return (
    <div className='grid grid-cols-2 gap-4 items-center my-10'>
        <div>
            <form className="max-w-md mx-auto">

            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Google Maps Link</label>
                <input type="text" id="base-input" placeholder='Google Maps Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Address</label>
                <input type="text" id="base-input" placeholder='Full Address' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <button type="submit" className="text-white w-full block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
        {/* <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.8975455692524!2d88.65471639411975!3d25.63215967331449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb5359f15bbd31%3A0xae37d410b7daca8a!2sBURO%20Bangladesh%20-%20Maharaja%20Branch!5e0!3m2!1sen!2sbd!4v1702312261072!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
    </div>
  )
}
