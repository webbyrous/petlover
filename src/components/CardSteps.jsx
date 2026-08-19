import React from 'react'
import { IoSearch  } from "react-icons/io5";
import { FaPen, FaHandsHelping, FaHome   } from "react-icons/fa";
import Paw from '../assets/paw-print.svg'

const CardSteps = () => {
  return (
    <div className='text-center grid grid-cols-1'>
        <div className='bg-white relative overflow-hidden py-6 text-black'>
              {/* Fondo de huellas */}
            <div
                className="absolute inset-0 opacity-5 z-0 hidden md:block"
               style={{
                backgroundImage: `
                    url("${Paw}"),
                    url("${Paw}"),
                    url("${Paw}"),
                    url("${Paw}")
                `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "80px, 60px, 100px, 70px",
                backgroundPosition: "10% 30%, 80% 10%, 25% 70%, 90% 80%",
            }}
            />
            <h1 className='relative text-3xl md:text-4xl font-montserrat z-10 font-bold mt-2 text-orange'>How Does Adoption Work?
</h1>
            <p className='relative font-montserrat mt-4 mb-6 z-10 text-base  md:text-xl'>Just follow these four simple steps</p>
        </div>
        <div className=' bg-yellow-soft'>
            <div className='py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto justify-items-center'>
                <div className='py-10 md:py-14 px-6 md:px-8 w-72 flex flex-col gap-3 bg-white rounded-2xl shadow-2xl text-center'>
                    <div className='flex flex-col gap-6 items-center'>
                        <div className='bg-orange rounded-full p-2.5'>
                            <IoSearch className='text-xl md:text-2xl text-white text-bold'/>
                        </div>
                        <h2 className='text-2xl font-montserrat font-semibold'> 1. Choose Your Pet</h2>
                    </div>
                    <p className='font-montserrat text-base md:text-lg '>Explore dogs and cats looking for a home. Discover their story, personality, and find the perfect companion for you.</p>
                </div>
                <div className='py-10 md:py-14 px-6 md:px-8 w-72 flex flex-col gap-3 bg-white rounded-2xl shadow-lg text-center'>
                    <div className='flex flex-col gap-6 items-center'>
                        <div className='bg-orange rounded-full p-2.5'>
                            <FaPen className='text-xl md:text-2xl text-white text-bold'/>
                        </div>
                        <h2 className='text-2xl font-montserrat font-semibold'>2. Fill Out the Form</h2>
                    </div>
                    <p className='font-montserrat text-base md:text-lg '>Fill out a simple adoption application with your details. This will help us get to know you better and find the perfect pet for your home.</p>
                </div>
                <div className='py-10 md:py-14 px-6 md:px-8 w-72 flex flex-col gap-3 bg-white rounded-2xl shadow-lg text-center'>
                    <div className='flex flex-col gap-6 items-center justify-center'>
                        <div className='bg-orange rounded-full p-2.5'>
                            <FaHandsHelping className='text-xl md:text-2xl text-white text-bold'/>
                        </div>
                        <h2 className='text-2xl font-montserrat font-semibold'> 3. Meet Us</h2>
                    </div>
                    <p className='font-montserrat text-base md:text-lg '>We will arrange a visit so you can meet the animal. It will be the perfect opportunity to ask questions and create your first bond.</p>
                </div>
                <div className='py-10 md:py-14 px-6 md:px-8 w-72 flex flex-col gap-3 bg-white rounded-2xl shadow-lg text-center'>
                    <div className='flex flex-col gap-6 items-center justify-center'>
                        <div className='bg-orange rounded-full p-2.5'>
                            <FaHome className='text-xl md:text-2xl text-white text-bold'/>
                        </div>
                        <h2 className='text-2xl font-montserrat font-semibold'>4. Take Them Home</h2>
                    </div>
                    <p className='font-montserrat text-base md:text-lg '>Once the adoption process is approved, the big day will arrive. Give them a second chance and start a new life together with your best friend.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardSteps