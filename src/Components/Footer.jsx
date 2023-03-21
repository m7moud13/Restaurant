import React, { useState } from 'react'
import { categories } from '../Foodstore/Store'

const Footer = () => {
    const [categorie,setcategories] = useState(categories)
    return (
        <div className='max-w-[1600px] mx-auto py-5'>
            <h1 className='text-center font-bold text-orange-500 text-3xl md:text-3xl lg:text-4xl 2xl:text-[43px]'>Top Rated Menu Items</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 py-9'>
            {categorie.map((categorie) => (
                <div className='flex items-center justify-between px-4 bg-gray-100 rounded-lg'>
                    <h1 className='font-bold  '>{categorie.name}</h1>
                    <img src={categorie.image} className="max-h-[80px]" alt="" />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Footer