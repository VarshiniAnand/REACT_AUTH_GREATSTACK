import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const {userData} = useContext(AppContext);

  return (
    <div className='flex flex-col items-center mt-40 px-4 text-center text-gray-800'>
        <img src={assets.developer_icon} alt="" className='w-36 h-36 rounded-full mb-6'/>
        
        <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>Hey {userData ? userData.name : 'Developer'} <img className='w-8 aspect-square' src={assets.hand_wave} alt="" /></h1>
        
        <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to our app</h2>
        <p className='mb-8 max-w-md'>Let's start with a quick product tour and we will have you up and running in no time!</p>
        <button className='bg-[#1A1A1A] border rounded-full px-8 py-2.5 text-white hover:text-[#00D1A1] cursor-pointer transition-all transitioin-all'>Get Started</button>
    </div>
  )
}

export default Header