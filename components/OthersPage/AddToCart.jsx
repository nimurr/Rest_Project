"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect , useState } from 'react'

 function AddToCart() {
    
    const [addTocart, setAddtoCart] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            
            const cartItem = localStorage.getItem('addToCart');
            const pars = JSON.parse(cartItem);
            const res = await fetch('http://localhost:5003/restaurant')
            const product = await res.json();
            setAddtoCart(product.filter(d => pars?.includes(d.id)));

        }
        fetchData()
    },[])

    const handleAddToCartDelete = (id) => {

        const localData = localStorage.getItem('addToCart');
        const deleteDataById = JSON.parse(localData);
        const filter = deleteDataById.filter(d => d != id)
        localStorage.setItem('addToCart', JSON.stringify(filter))
        const filterProduct2 = addTocart.filter(i => i.id !== id)
        setAddtoCart(filterProduct2)

    }
    const totalPrice = addTocart.reduce((d , i) => (d + parseFloat(i.price)) , 0)



    // const [totalPricein , setTotalPrice] = useState([])
 

    const handleDecressAddToCart =(price)=>{
        console.log('dicress', price)
    }
    const handleIncressAddToCart =(price) =>{
        console.log('clicked incoress ' , price)
    }

    // console.log(addTocart)


  return (
    <div>
        <div className="allAddToCartGradint">
        <div className="  text-center h-[30vh] flex justify-center items-center ">
          <h2 className="text-5xl text-white font-semibold">Add to Cart</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
            <div className="grid lg:grid-cols-3 my-10 gap-4">
                <div className="lg:col-span-2">
                    <div className="flex justify-between p-5 bg-gray-100 mb-4 font-bold rounded">
                        <h2>Price & Name</h2>
                        <h2>Quantity</h2>
                        <h2>Action</h2>
                    </div>
                    <div>
                    {addTocart.length < 1 && (
                <div className="w-20 mx-auto my-10" role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
                    </div>
                    {
                        addTocart?.map(products =>
                            <div data-aos="zoom-in" className="sm:flex rounded-md justify-between items-center gap-4 mb-5 bg-gray-100 p-4" key={products.id}>
                                <div className="sm:flex items-center gap-4">
                                    <Image width={350} height={250} className="sm:w-32 " src={products.image} alt="" />
                                    <div>
                                        <h3 className="text-xl  my-2 sm:my-0 font-semibold">{products.title}</h3>
                                        <h3 className="text-4xl my-2 sm:my-0  text-red-500">{products.price} ৳</h3>
                                    </div>
                                </div>
                                {/* onClick={() => handleDecressAddToCart(products.id)}
                                    onClick={handleIncressAddToCart}
                                    {quantity}
                                */}
            
                                <div className="flex ">
                                    <button onClick={() => handleDecressAddToCart(products.price)} className="text-2xl font-semibold bg-gray-200 px-2">-</button>
                                    <span id="productQuantity" className="bg-white px-2 flex items-center" >1</span>
                                    <button onClick={()=>handleIncressAddToCart(products.price)} className="text-2xl font-semibold bg-gray-200 px-2">+</button>
                                </div>
                                <div>
                                    <button onClick={() => handleAddToCartDelete(products.id)} className="px-6 py-2 bg-red-500 text-white font-semibold rounded">Delete</button>
                                    {/* <button className="px-6 py-2 bg-blue-500 rounded ml-2 font-semibold text-white">Buy Now</button> */}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="bg-gray-100 p-4 w-full xl:h-[30vh]">
                    <h2 className="text-center text-4xl text-[#262261]">Order Summary</h2>
                    <div className="my-5">
                        <h3 className="my-1">Quantity :  {addTocart?.length} </h3>
                        <h3 className="my-1">Total Price : {totalPrice} ৳ </h3>
                        <h3 className="my-1">Discount :  00  ৳</h3>
                        <h3 className="my-1">Discount Price :  {totalPrice}৳ </h3>
                    </div>
                    <Link href='/order' className="p-2 bg-red-500 font-semibold text-white rounded w-full block text-center">Order Now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddToCart;