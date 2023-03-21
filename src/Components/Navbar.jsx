import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { Link, useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Navbar = () => {
  const [open , setopen] = useState(false)
  const cartItems = useSelector((state) => state.Cart);
  const location = useLocation(); // Get current location
  const isCartPage = location.pathname === "/Cart";

  return (
    <div className='w-full'>
          <div className='p-4 mx-auto max-w-[1600px] flex items-center justify-between '>
      <div className='flex items-center'>
        <AiOutlineMenu onClick={() => setopen(!open)}  className='mb-[-2px] cursor-pointer' size={25} />
        <Link to={"/"} className='ml-1 text-[19px] md:text-xl lg:text-3xl 2xl:text-4xl '>Best <Link to={"/"} className='font-bold'>East</Link></Link>
        <div className='hidden sm:flex items-center bg-slate-300 rounded-full ml-2'>
          <p className='px-3 cursor-pointer h-full text-[14px] py-1 rounded-full bg-black text-white'>Delivery</p>
          <p className='px-3  cursor-pointer h-full w-full text-[14px] py-1 rounded-full text-black bg-gray-300 '>Pickup</p>
        </div>
      </div>
      {/* search bar*/}
      <div className=' relative flex items-center'>
        <AiOutlineSearch className=' absolute left-[5px]  z-10' size={25}/>
        <input type="search" className='  px-8 sm:px-9 py-1 duration-300  bg-gray-200 rounded-full focus:placeholder:opacity-0 focus:outline-none lg:w-[400px] 2xl:w-[500px] 2xl:py-2' placeholder='Search Food' />
      </div>
      {/* Cart button */}
      <div className="hidden md:block ">
      {!isCartPage && (
        <Link to={"/Cart"} className='flex items-center py-1.5 px-4 rounded-full bg-black text-white cursor-pointer '>
          <BsFillCartFill className='mr-1' size={18} />
          Cart - {cartItems.length }
        </Link>
      )}
      </div>
      {/* create the slide bar*/}
      
    </div>
    <div className={open ? "fixed top-0 w-full h-full bg-black/60 z-20" :"hidden"}></div>
    <div className={open ? "fixed left-0 duration-300 top-0 bg-white z-40 p-4 h-full w-[350px] lg:w-[450px]":"fixed left-[-100%] duration-300 top-0 bg-white z-40 p-4 h-full w-[350px] lg:w-[450px]"}>
      
      <div className='flex justify-between items-center'>
      <Link to={"/"} className='ml-1 text-[25px] lg:text-3xl pb-5 '> Best <Link className='font-bold' to={"/"}>East</Link></Link>
      <AiOutlineClose size={25} onClick={() => setopen(!open)} className="cursor-pointer mt-[-15px] mr-5" />
      </div>
      <ul>
        <li className='flex mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
        <li className='flex mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100'><MdFavorite size={25} className='mr-4' />Favorites</li>
        <li className='flex mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100'><FaWallet size={25} className='mr-4' />Wallet</li>
        <li className='flex mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100'><MdHelp size={25} className='mr-4' />Help</li>
        <li className='flex mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100'><AiFillTag size={25} className='mr-4' />Promotions</li>
        <li className='flex mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100'><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>
        <li className='flex mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
        <li className='flex items-center mb-3 text-[17px] p-2 cursor-pointer duration-300 rounded-lg  w-[70%] hover:bg-gray-100 md:hidden'>{!isCartPage && (
        <Link to={"/Cart"} className='flex items-center px-1 '>
          <BsFillCartFill className='mr-3' size={18} />
          Cart - {cartItems.length }
        </Link>
      )}</li>
      </ul>
    </div>
  </div>
  )
}
export default Navbar;