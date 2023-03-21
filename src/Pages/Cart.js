import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Components/Navbar";
import { Clear, removerpoduct } from '../rtk/RStore';

export const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.Cart);
    return (
        <div className='mx-auto max-w-[1600px] '>
        <Navbar />
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">

    <h1 className='text-2xl lg:text-3xl 2xl:text-5xl text-center py-12 text-orange-500 font-bold'> your Cart</h1>
    <table className="w-full text-base text-left bg-white dark:text-orange-500">
        <thead className="text-xs lg:text-[17px] text-gray-700  bg-gray-50  dark:text-orange-500">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Your Meal
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                Options
                </th>
            </tr>
        </thead>
        <tbody  >
            {cartItems.map((item) => (
                <tr className="bg-white border-b dark:bg-gray-200 text-orange-500" key={item.price}>
                <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap text-orange-700">
                    {item.name}
                </th>
                <td className="px-5 py-3">
                <img src={item.image} alt={item.name} className="w-[50px] h-[50px] rounded-lg" />
                </td>
                <td className="px-5 py-3 text-orange-700">
                    {item.price}$
                </td>
                <td className="px-6 py-2">
                    <button className='py-1 px-2 bg-red-600 c-white rounded-lg text-white hover:bg-red-700' onClick={() => dispatch(removerpoduct(item))}>Delet</button>
                </td>
            </tr>
            ))}
            </tbody>
    </table>
    <div className='pt-10 pb-2 px-3'>
    <button className='bg-orange-400 py-1 px-4 text-white rounded-lg' onClick={() =>dispatch(Clear())}>Delet All</button>
    </div>
</div>

        </div>
    )
}
export default Cart;