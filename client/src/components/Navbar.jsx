import React, { useContext } from 'react';
import {assets} from '../assets/assets';
import {useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContext);
  
  const sendVerificationOtp = async ()=> {
    try {
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp');

      if(data.success) {
        navigate('/email-verify');
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const {data} = await axios.post(backendUrl + '/api/auth/logout')
      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
      navigate('/');
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0 bg-[#1A1A1A]'>
        <img src={assets.logo} alt="" className='w-28 sm:w-32  h-[50px]' />
        {userData ? <div className='text-white hover:text-[#00D1A1] cursor-pointer transition-all w-8 h-8 flex justify-center items-center rounded-full bg-black relative group'>
          {userData.name[0].toUpperCase()}
          <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
            <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
              {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify Email</li>}
              <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
            </ul>
          </div>
        </div>:<p className='text-white hover:text-[#00D1A1] cursor-pointer transition-all' onClick={()=>{navigate('/login')}}>Login </p>}
        
    </div>
  )
}

export default Navbar