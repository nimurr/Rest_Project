"use client"
import React from 'react';

const page = () => {
    const handleUpdatePassword = (e) =>{
        e.preventDefault()
    }
    return (
        <div className='bg-gray-100 p-10 text-gray-700  h-full'>
            <form action="#" className='space-y-5' onSubmit={handleUpdatePassword}>
                <h2 className='text-lg font-semibold'>Update Password</h2>
                <div className='space-y-2 rounded'>
                    <h3>Type Old Password</h3>
                    <input className='shadow rounded border-none w-full outline-none active:border-none' type="password" required name="name" />
                </div>
                <div className='space-y-2 rounded'>
                    <h3>New Password</h3>
                    <input className='shadow rounded border-none w-full outline-none active:border-none' type="password" required name="email" />
                </div>
                <div className='space-y-2 rounded'>
                    <h3>Retype New Password</h3>
                    <input className='shadow rounded border-none w-full outline-none active:border-none ' type="password" required name="number" />
                </div>
                <input  className='bg-red-500 hover:bg-red-600 text-center transition text-lg w-36 py-2 text-cnter text-white rounded outline-none' type='Update Password' value={'Submit'} />
            </form>
        </div>
    );
};

export default page;