import React, { useEffect, useState } from 'react'
import {Store} from "../Foodstore/Store"
import { Add, featchStore } from '../rtk/RStore'
import { useDispatch,useSelector } from 'react-redux'
export const TopRated = () => {
    const [Menu,setMenu] = useState(Store)
    const Typefilter = (category) => {
            setMenu( 
                Store.filter((item) => {
                    return item.category  === category 
                }) 
            )
    }
    const pricefilter = (price) =>{
        setMenu(
            Store.filter((item) => {
                return item.price < price
            })
        )
    }
    const pricefilterbiger = (price) =>{
        setMenu(
            Store.filter((item) => {
                return item.price > price
            })
        )
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(featchStore());
        }, []);


    return (
        <div className='py-12 max-w-[1600px] mx-auto '>
            <h1 className='text-center font-bold text-orange-500 text-3xl md:text-3xl lg:text-4xl 2xl:text-[43px]'>Top Rated Menu Items</h1>
            <div className='flex items-center flex-col text-center  justify-between py-4 p-4 md:flex-row md:text-left'>
                <div>
                    <h2 className='text-[18px]'>Filter Type</h2>
                    <div className='flex mt-2'>
                    <button onClick={() => setMenu(Store)} className='py-1 text-[16px] px-2  border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>All</button>
                    <button onClick={() => Typefilter("burger")} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>Burgers</button>
                    <button onClick={() => Typefilter("pizza")} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>Pizza</button>
                    <button onClick={() => Typefilter("salad")} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>Salads</button>
                    <button onClick={() => Typefilter("chicken")} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>Chicken</button>
                    </div>
                </div>
                <div className='mt-2 '>
                    <h2 className='text-[18px] mt-2'>Filter Price</h2>
                    <div className='flex mt-2'>
                    <button onClick={() => pricefilter(50)} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>-50</button>
                    <button onClick={() => pricefilter(80)} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>-80</button>
                    <button onClick={() => pricefilter(150)} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>-150</button>
                    <button onClick={() => pricefilterbiger(150)} className='py-1 text-[16px] px-2 ml-2 border border-orange-400 text-orange-500 rounded-lg duration-300 hover:text-white hover:bg-orange-400'>+150</button>
                    </div>
                </div>
            </div>
            {/* Food Menu*/}
            <div className='grid grid-cols-2 lg:grid-cols-4  gap-1 sm:gap-4 sm:p-4'>
            {Menu.map((meal) => (
                <div className=' rounded-lg shadow-lg duration-300 hover:scale-105 hover:shadow-xl' key={meal.id}>
                    <img src={meal.image} className="object-cover w-full rounded-t-lg max-h-[150px]" alt="/" />
                    <div className='flex items-center justify-between py-3 sm:px-2'>
                        <h2 className='font-bold text-sm sm:text-base'>{meal.name}</h2>
                        <div className='flex'>
                            <button className=' bg-orange-400 text-white rounded-2xl p-0.5 px-1.5 text-right text-[12px] sm:text-base' onClick={() => dispatch(Add(meal))}>{meal.price}$ Add </button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
