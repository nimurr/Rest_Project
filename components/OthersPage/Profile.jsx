"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export default function Profile() {


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Display the selected file
    setSelectedFile(file);
  };

  const handleFrom = (e) => {
    e.preventDefault()
  }




  return (
    <div>
      <form action="#" className='flex flex-col space-y-6' onSubmit={handleFrom}>
        <h2 className='text-lg font-semibold underline'>Profile</h2>
        <fieldset className='border'>
          <legend>Name</legend>
          <input defaultValue={'Mr. jos Batler'} className='border-none w-full outline-none active:border-none' type="text" name="name" />
        </fieldset>
        <fieldset className='border'>
          <legend>Email</legend>
          <input defaultValue={'abc@abc.com'} className='border-none w-full outline-none active:border-none' type="text" name="email" />
        </fieldset>
        <fieldset className='border'>
          <legend>Phone</legend>
          <input defaultValue={'+880177453455'} className='border-none w-full outline-none active:border-none ' type="text" name="number" />
        </fieldset>
      
        <fieldset className=' border'>
          <legend>Profile image</legend>
          <input className='border-none w-full pt-3 border-2 border-gray-200' placeholder='Chose profile image' onChange={handleFileChange} type="file" name="number" />
        </fieldset>
        <div>
          {selectedFile && (
            <div>
              <h2>Selected File:</h2>
              <p>{selectedFile.name}</p>
              <Image height={300} width={300} src={URL.createObjectURL(selectedFile)} alt="Selected Image" />
            </div>
          )}
        </div>

        <div>
          <input className='bg-red-500 hover:bg-red-600 transition py-2 w-36 rounded font-semibold text-white' type="submit" value="Update Profile" />
        </div>
      </form>
    </div>
  )
}
