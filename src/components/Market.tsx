'use client'
import FatCactus from '../../public/images/FatCactus.png'
import Profile from '../../public/images/Profile.png'
import SeachIcon from '../../public/icons/Search.svg'
import QuestionIcon from '../../public/icons/QuestionIcon.svg'
import ReportIcon from '../../public/icons/ReportIcon.svg'
import {  Anton_SC,  } from 'next/font/google'
import { useState } from 'react';
import DropDown from "./DropDown";
import { Card } from './Cards'
import { projects } from '../data/projects';
import { motion } from 'framer-motion'

const anton = Anton_SC({
    subsets: ['latin'], // Include the appropriate subsets
    weight: '400', // Specify the font weight if necessary
    display: 'swap',
  });



export const Market = () => {
    const [token, setToken] = useState('All')
    const [country, setCountry] = useState('India')
    const [vintage, setVintage] = useState('2025')



    return (
        <div>
            <div className='flex w-full justify-between items-center'>
                <div className='inline-flex gap-2 bg-[#232228] rounded-full outline outline-[1.5px] outline-white/20 px-2  items-center justify-between '>
                    <div className='size-10 p-2 opacity-75 inline-flex items-center justify-center'>
                        <img src={SeachIcon.src} alt="Search Icon" />
                    </div>
                    <input type="text" name="search" id="search" className='w-40' placeholder='Search'/>
                </div>
                <div className='flex gap-4'>
                    <div className='size-12 bg-[#232228]  border-[1px] border-zinc-600 rounded-full p-3'>
                        <img className='opacity-80' src={QuestionIcon.src} alt="Question Icon" />
                    </div>
                    <div className='size-12 bg-[#232228]  border-[1px] border-zinc-600 rounded-full p-3'>
                        <img className='opacity-80' src={ReportIcon.src} alt="Report Icon" />
                    </div>
                    <div className='size-12 bg-[#232228]  border-[1px] border-zinc-600 rounded-full '>
                        <img className='opacity-80' src={Profile.src} alt="Report Icon" />
                    </div>
                </div>
            </div>
        <div className="w-full flex flex-col justify-between items-start rounded-2xl pb-4 px-6 bg-[#232228] h-[92%] mt-4 outline outline-[1.5px] outline-white/20">
            <div className='  flex w-full flex-col '>
                <h3 className={`tracking-tight mt-2 p-1 ${anton.className}  uppercase font-extrabold   text-4xl text-[#CDCDCD]`}>Manage Carbon Credit</h3>
                <div className='text-zinc-500 font-medium text-sm'>
                    <p>The world’s first and <span className='uppercase text-sm text-zinc-300 font-medium'>LARGEST CARBON CREDIT MARKETPLACE</span> for crypto collectibles and non-fungible token (NFTs). Trade, Trust, and Transform Our Planet</p>
                </div>
            </div>
            <div className="mt-3">
                    <DropDown />
            </div>

            <motion.div
            className="w-full h-full mt-5 outline  outline-[1.5px] outline-white/10 flex items-center justify-start bg-zinc-950 rounded-lg  flex-col overflow-y-scroll">
            { false ?   <div>
                    <div className='w-80 h-72   inline-flex items-center'>
                            <img src={FatCactus.src} alt="Fat Cactus" />
                        </div>
                        <div className='inline-flex flex-col items-center justify-center'>
                            <h3 className='text-zinc-400 text-lg font-medium'>No Projects Found</h3>
                            <p className='text-[10px] text-zinc-700 '>There are no project for the selected category or filter</p>
                        </div>
                    </div> :
                    <div className='grid grid-cols-4 gap-2 py-3 '>
                    {projects.map((project, index) => (
                        <Card key={index} {...project} />
                    ))}
                    </div>
                    }
            </motion.div>
        </div>
        </div>
    )
}
