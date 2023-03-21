import React from 'react'

export const LandingCards = () => {
    return (
        <div className=' mx-auto max-w-[1600px] grid gap-4  sm:grid-cols-2 lg:grid-cols-3'>
            <div className=' relative rounded-2xl w-full p-4'>
                <div className=' p-2 lg:p-3 text-white absolute z-10  '>
                    <h3 className='text-xl lg:text-[22px] font-bold'>Sun's Out,BOGO's Out</h3>
                    <p>Though 8/26</p>
                </div>
                <div className='relative  rounded-2xl'>
                <img 
                className='max-h-[160px] w-full lg:max-h-[200px] object-cover rounded-2xl'
                src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                alt="" />
                    <span className=' absolute w-full h-full bg-black/40 top-0 rounded-2xl'></span>
                </div>
                    <button className='bottom-8 left-6 py-1 px-2 bg-white text-black font-bold rounded-lg text-[14px] absolute duration-300  hover:bg-orange-500 hover:text-white '>Order Now</button>
            </div>
            <div>
            <div className=' relative rounded-2xl w-full p-4'>
                <div className=' p-2 lg:p-3 text-white absolute z-10  '>
                    <h3 className='text-xl lg:text-[22px] font-bold'>New Restaurants</h3>
                    <p>Added Daily</p>
                </div>
                <div className='relative  rounded-2xl'>
                <img 
                className='max-h-[160px] w-full lg:max-h-[200px] object-cover rounded-2xl'
                src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                alt="" />
                    <span className=' absolute w-full h-full bg-black/40 top-0 rounded-2xl'></span>
                </div>
                    <button className='bottom-8 left-6 py-1 px-2 bg-white text-black font-bold rounded-lg text-[14px] absolute duration-300  hover:bg-orange-500 hover:text-white '>Order Now</button>
            </div>
            </div>
            <div>
            <div className=' relative rounded-2xl w-full p-4'>
                <div className=' p-2 lg:p-3 text-white absolute z-10  '>
                    <h3 className='text-xl lg:text-[22px] font-bold'>We Deliver Desserts Too</h3>
                    <p>Tasty Treats</p>
                </div>
                <div className='relative  rounded-2xl'>
                <img 
                className='max-h-[160px] w-full lg:max-h-[200px] object-cover rounded-2xl'
                src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                alt="" />
                    <span className=' absolute w-full h-full bg-black/40 top-0 rounded-2xl'></span>
                </div>
                    <button className='bottom-8 left-6 py-1 px-2 bg-white text-black font-bold rounded-lg text-[14px] absolute duration-300  hover:bg-orange-500 hover:text-white '>Order Now</button>
            </div>
            </div>
        </div>
    )
}
