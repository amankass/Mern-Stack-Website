import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
  <div className='m-10 max-w-lg mx-auto'>
    <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-15 relative'>
      <h1 className='text-4x1 text-center font-bold mb-6'>Login</h1>
        <form className='flex flex-col gap-6'>
          <div className='relative my-4'>
               <input type="username" placeholder="" id="username" className='block w-72 text-sm text-white 
               bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none 
               focus:ring-0 focus:text-white focus:border-blue-600 peer'/>
               <label htmlFor="" className='absolute text-sm text-red-900 duration-300 -transform -translate-y-6 scale-75 top-3 -z-10 
               origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-110 
               peer-placeholder-shown:translate-y-3 peer-focus:scale-85 peer-focus:-translate-y-10'>Your Username</label>   
          </div>
          <div className='relative my-4'>
               <input type="password" placeholder="" id="username" className='block w-72 text-sm text-white bg-transparent 
               border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white
              focus:border-blue-600 peer'/>
               <label htmlFor="" className='absolute text-sm text-red-900 duration-300 -transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
               peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-3 
               peer-focus:scale-85 peer-focus:-translate-y-10'>Your Password</label>   
          </div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                 <input type="checkbox" name='' id='' />
                 <label htmlFor="Remamber Me">Remember Me</label>
              </div>
                 <Link> <span className='text-blue-900'>Forgot Password?</span> </Link>
            </div>
            <div>
              <span className='m-4'> New Here? <Link to='/Sign-Up' className='text-blue-900'> Create an account </Link> </span>  
            </div> 
              <button type='submit' className='mb-4 w-64 text-[18px] mx-20 mt-6 rounded-full bg-red-800 font-bold text-orange-100 
              hover:bg-emerald-600 duration-600 hover:text-white py-2 transition-colors duration-300'>Login</button>
        </form>
    </div>
  </div>
  )
}
