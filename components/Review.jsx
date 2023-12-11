
"use client"
import { FaStar } from "react-icons/fa";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Reviews = () => {
    return (
        <div className=' max-w-7xl mx-auto sm:my-40 my-10 px-4 lg:px-0'>
             <div className="my-6">
                    <h2 className="sm:text-4xl text-xl font-semibold text-[#262261]">Reviews</h2>
                    <span className="h-1 sm:w-52 bg-[#EE4036] block mt-2"></span>
                </div>
              
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                // scrollbar={true}
                // navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="my-10 p-3 shadow space-y-3  border">
                        <div className='flex gap-10'>
                            <Image
                                alt='image'
                                height={'500'}
                                width={800}
                                src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'}
                                className="w-32 h-32 object-cover"
                            />
                            <div>
                                <h2 className="text-3xl font-semibold">Janifa Watdon</h2>
                                <h3>CEO of Apple Co.</h3>
                                <div className="flex flex-row items-center text-orange-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span>(5)</span>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique in dolorem harum voluptas magnam rem. Iusto ipsam veritatis voluptatibus debitis magnam harum quibusdam velit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="my-10 p-3 shadow space-y-3  border">
                        <div className='flex gap-10'>
                            <Image
                                alt='image'
                                height={'500'}
                                width={800}
                                src={'https://i.ibb.co/nnX1P2c/Rectangle-29-1.png'}
                                className="w-32 h-32 object-cover"
                            />
                            <div>
                                <h2 className="text-3xl font-semibold">Janifa Watdon</h2>
                                <h3>CEO of Apple Co.</h3>
                                <div className="flex flex-row items-center text-orange-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span>(5)</span>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique in dolorem harum voluptas magnam rem. Iusto ipsam veritatis voluptatibus debitis magnam harum quibusdam velit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="my-10 p-3 shadow space-y-3  border">
                        <div className='flex gap-10'>
                            <Image
                                alt='image'
                                height={'500'}
                                width={800}
                                src={'https://i.ibb.co/nnX1P2c/Rectangle-29-1.png'}
                                className="w-32 h-32 object-cover"
                            />
                            <div>
                                <h2 className="text-3xl font-semibold">Janifa Watdon</h2>
                                <h3>CEO of Apple Co.</h3>
                                <div className="flex flex-row items-center text-orange-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span>(5)</span>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique in dolorem harum voluptas magnam rem. Iusto ipsam veritatis voluptatibus debitis magnam harum quibusdam velit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="my-10 p-3 shadow space-y-3  border">
                        <div className='flex gap-10'>
                            <Image
                                alt='image'
                                height={'500'}
                                width={800}
                                src={'https://i.ibb.co/nnX1P2c/Rectangle-29-1.png'}
                                className="w-32 h-32 object-cover"
                            />
                            <div>
                                <h2 className="text-3xl font-semibold">Janifa Watdon</h2>
                                <h3>CEO of Apple Co.</h3>
                                <div className="flex flex-row items-center text-orange-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span>(5)</span>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique in dolorem harum voluptas magnam rem. Iusto ipsam veritatis voluptatibus debitis magnam harum quibusdam velit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="my-10 p-3 shadow space-y-3  border">
                        <div className='flex gap-10'>
                            <Image
                                alt='image'
                                height={'500'}
                                width={800}
                                src={'https://i.ibb.co/nnX1P2c/Rectangle-29-1.png'}
                                className="w-32 h-32 object-cover"
                            />
                            <div>
                                <h2 className="text-3xl font-semibold">Janifa Watdon</h2>
                                <h3>CEO of Apple Co.</h3>
                                <div className="flex flex-row items-center text-orange-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span>(5)</span>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique in dolorem harum voluptas magnam rem. Iusto ipsam veritatis voluptatibus debitis magnam harum quibusdam velit.</p>
                    </div>
                </SwiperSlide>
              
            </Swiper>
        </div>
    );
};

export default Reviews;