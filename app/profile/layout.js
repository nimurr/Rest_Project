"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ProfileLayout = ({ children }) => {
    const pathName = usePathname()

    return (
        <div className='max-w-7xl mx-auto py-10 min-h-[80vh] gap-10 flex flex-col md:flex-row'>
            <div className='md:w-1/4 p-5 rounded flex justify-center bg-gray-100'>
                <div className='space-y-2'>
                    <Image
                        alt='profie image'
                        width={300}
                        height={200}
                        className='w-40 h-40 rounded-full object-cover p-2 border border-gray-400'
                        src={'https://i.ibb.co/TLNKqt4/images.jpg'}
                    />
                    <small className='text-center block'>abc@abc.com</small>
                    <h3 className='text-center text-xl font-semibold text-gray-600'>Mr. Jos Batler</h3>
                    <div className='flex flex-col justify-center text-center py-5 gap-2 text-lg'>
                        <div className='text-start flex flex-col text-gray-700'>
                            <Link className={`hover:text-red-500 p-2 ${pathName == '/profile' ? 'text-red-600 ' : ''} hover:bg-gray-200`} href={'/profile'}>Profile</Link>
                            <hr className='border-[1.2px] border-gray-200' />
                            <Link className={`hover:text-red-500 p-2 ${pathName == '/profile/orders' ? 'text-red-600 ' : ''} hover:bg-gray-200`} href={'/profile/orders'}>Orders</Link>
                            <hr className='border-[1.2px] border-gray-200' />

                            <Link className={`hover:text-red-500  p-2 ${pathName == '/profile/passwordupdate' ? 'text-red-600 ' : ''} hover:bg-gray-200`} href={'/profile/passwordupdate'}>Password Update</Link><hr/>
                            <Link className={`hover:text-red-500  p-2 ${pathName == '/profile/favorite' ? 'text-red-600 ' : ''} hover:bg-gray-200`} href={'/profile/favorite'}>Favorite</Link>
                            <hr className='border-[1.2px] border-gray-200' />

                        </div>
                    </div>
                </div>

            </div>
            <div className='md:w-3/4'>{children}</div>
        </div>
    );
};

export default ProfileLayout;