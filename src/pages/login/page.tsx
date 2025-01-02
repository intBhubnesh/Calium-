"use client"
import Background from '../../public/images/RegisterBackground.jpeg'
import KeyIcon from '../../public/icons/Key.svg'
import { useState } from 'react'
import MetamaskIcon  from '../../public/icons/Metamask.svg'
import  SolanaIcon  from '../../public/icons/Solana.svg'
import  PolygonIcon  from '../../public/icons/Ploygon.svg'
import { motion } from 'framer-motion'
export const LogIn = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    return (
        <div className="container m-auto relative h-full w-full overflow-clip ">
        <div className=' inset-0 absolute bg-pink-50 rounded-3xl  overflow-hidden z-0'><img className='object-cover h-full w-full' src={Background.src} alt="Background" /></div>
        <div className="container  bg-[#232228] h-full w-1/2 rounded-3xl  border border-white/10 z-40 relative">

        <div className="flex flex-col h-full">
        <div className="flex flex-row items-center justify-start p-4 gap-3 pl-12 border-b-[1px] border-white/10">
          <div className="inline-flex justify-center items-center">
            <div className="outline size-10 outline-[1.5px] outline-zinc-600 bg-white/10 p-2 rounded-xl">
              <img src={KeyIcon.src} alt="onBoardingIcon" />
            </div>
          </div>
          <div className="flex flex-col gap-0">
            <h2 className="text-2xl font-normal text-zinc-300">Login to your account</h2>
            <p className="text-[12px] -mt-1 text-zinc-500">
              Choose your sides and contribute accordingly.
            </p>
          </div>
        </div>
        <div className='h-full flex w-full items-start  '>
            <div className='flex w-full item flex-col gap-4  justify-center items-start px-16 py-4'>
                <div className='flex w-full flex-col'>
                    <label
                        className='text-[12px] mb-1 text-zinc-300'
                        htmlFor="userEmail" >Email</label>
                    <input
                        id='userName'
                        className=' p-3  text-zinc-300  outline outline-[1px] text-[12px] outline-white/10 rounded-lg focus:outline focus:outline-[1px]  focus:outline-teal-600 '

                        placeholder='john@gmail.com'
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                        type="email"  />
                </div>
                <div className='flex w-full flex-col'>
                    <label
                        className='text-[12px] mb-1 text-zinc-300'
                        htmlFor="userEmail" >Password</label>
                    <input
                        id='userName'
                        className=' p-3  text-zinc-300  outline outline-[1px] text-[12px] outline-white/10 rounded-lg focus:outline focus:outline-[1px]  focus:outline-teal-600 '

                        placeholder='-------'
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                        type="password"  />
                </div>
                <div className='flex flex-col items-start w-full  mt-20 justify-between gap-4'>
                    <div className='flex items-center mt-2  gap-3'>
                    <input
                        type="checkbox"
                        name="termsAndCondition"
                        id="termsAndCondition"
                        className='size-4 rounded-sm appearance-none focus:outline focus:outline-[1px] focus:outline-white/30 bg-zinc-700 border border-zinc-500 checked:bg-teal-600 checked:border-teal-600 relative'
                        required/>
                    <label htmlFor='termsAndCondition' className='text-[12px] text-zinc-500'>I agree <span className=' text-teal-600'>Terms & Condition</span></label>
                    </div>
                    < motion.div
                    whileTap={{ scale: 0.85 }}
                    className='flex w-full h-10 items-center justify-center bg-teal-600 rounded-[5px] text-zinc-300 font-medium text-sm'>
                        <h3>Log In</h3>
                    </motion.div>
                    <div className='flex w-full items-center justify-center '>
                        <h5 className='text-[12px] text-zinc-500 '>Or Register With</h5>
                    </div>
                    <div className='flex items-center justify-center gap-8 w-full'>
                        <div className='size-12 p-2 outline outline-[1px] outline-zinc-600/30 rounded-[4px] bg-[#202028] inline-flex items-center justify-center'>
                            <img src={PolygonIcon.src} alt="Polygon_icon" />
                        </div>
                        <div className='size-12 p-2 outline outline-[1px] outline-zinc-600/30 rounded-[4px] bg-[#202028] inline-flex items-center justify-center'>
                            <img src={SolanaIcon.src} alt="Solana_icon" />
                        </div>
                        <div className='size-12 p-2 outline outline-[1px] outline-zinc-600/30 rounded-[4px] bg-[#202028] inline-flex items-center justify-center'>
                            <img src={MetamaskIcon.src} alt="Metamask_icon" />
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </ div>
        </div>
        </div>
    )
}
