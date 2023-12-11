import Image from 'next/image';
import React from 'react';

const page =() => {
    const orders = [
        { id: 1, name: 'Barger', img: 'https://i.ibb.co/xCJCRYS/chicken-with-sambal-sauce-deep-fried-hot-spicy-menu-indonesia-combination-malaysian-fusion-style-sid.jpg', quatity: 2, price: 40 },
        { id: 2, name: 'Barger', img: 'https://i.ibb.co/FJNqb44/images.jpg', quatity: 2, price: 40 },
        { id: 3, name: 'Barger', img: 'https://i.ibb.co/mDsHJFY/images.jpg', quatity: 2, price: 40 },
        { id: 4, name: 'Barger', img: 'https://i.ibb.co/g6jCxmr/download.jpg', quatity: 2, price: 40 },

    ]
    const totalPrice = orders.reduce((accumulator, order) => accumulator + order.price, 0);


    return (
        <div>
            <div>
                <div>
                    <table className='w-full rounded'>
                        <thead className='bg-red-500 '>
                            <tr>
                                <th className='py-3 text-white'>Id</th>
                                <th className='py-3 text-white'>Image</th>
                                <th className='py-3 text-white'>Name</th>
                                <th className='py-3 text-white'>Quantity</th>
                                <th className='py-3 text-white'>Price</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {orders.map((item) => (
                                <tr className=' gap-20' key={item.id}>
                                    <td className="px-4 border-b">{item.id}.</td>
                                    <td className="px-4 border-b">
                                        <Image width={100} height={100} src={item.img} alt={item.name} className="w-20 h-20 mx-auto rounded-full" />
                                    </td>
                                    <td className="font-semibold px-4 border-b">{item.name}</td>
                                    <td className="font-semibold px-4 border-b">{item.quatity}</td>
                                    <td className="font-semibold px-4 border-b">${item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Total </th>
                                <td className='font-bold'>={totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;