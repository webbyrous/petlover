import React from 'react'
import HeroImage from '../assets/hero-img.jpg'

const FormDog = () => {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-3 font-montserrat bg-gray'>
        <img src={HeroImage} alt="Perro marrón con la lengua sacada mirando al frente" className='w-full h-64 sm:h-96 lg:h-full object-cover object-center' />
        <div className=' col-span-1 lg:col-span-2 px-4 sm:px-8'>
            <h1 className='text-3xl sm:text-4xl font-semibold text-hero-text mt-8 lg:mt-12'>Your Next Best Friend Is Waiting for You</h1>
            <p className='mt-4'>Fill out this form to apply for adoption. We will get in touch with you as soon as possible.</p>
            <form action="" className='my-10'>
                <fieldset className='mt-4 p-2'>
                    <div className='bg-form-orange p-6 w-full'>
                        <legend className='font-semibold mb-2'>Personal Information</legend>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-4'>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>First Name</label>
                                <input type="text" name="" id="" className='bg-white p-2 w-full rounded-xl shadow-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60 ' />
                            </div>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>Last Name</label>
                                <input type="text" name="" id="" className='bg-white p-2 w-full rounded-xl shadow-lg  focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60 ' />
                            </div>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>Age</label>
                                <input type="number" name="" id="" className='bg-white p-2  w-full rounded-xl shadow-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60'/>
                            </div>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>Phone Number</label>
                                <input type="tel" name="" id="" className='bg-white p-2 w-full rounded-xl shadow-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60'/>
                            </div>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>Address</label>
                                <input type="text" name="" id="" className='bg-white p-2 w-full rounded-xl shadow-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60'/>
                            </div>
                             <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>Postal Code</label>
                                <input type="text" name="" id="" className='bg-white p-2 w-full rounded-xl shadow-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60'/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='mt-4 p-2'>
                    <div className='bg-form-orange p-4 sm:p-6 w-full'>
                        <legend className='font-semibold  mb-2'>My Home</legend>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-4'>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>Type of home</label>
                                <select name="" id="" className='bg-white p-3 rounded-xl mt-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60 shadow-lg'>
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                </select>
                            </div>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1 '>
                                <label htmlFor="" className='font-medium'>Do You Have a Garden?</label>
                                <select name="" id="" className='bg-white p-3 rounded-xl mt-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60 shadow-lg'>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1 '>
                                <label htmlFor="" className='font-medium'> Are There Other Pets at Home?</label>
                                <select name="" id="" className='bg-white p-3 rounded-xl mt-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60 shadow-lg'>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className='flex flex-col px-2 sm:px-4 py-2 gap-1'>
                                <label htmlFor="" className='font-medium'>Are There Children at Home?</label>
                                <select name="" id="" className='bg-white p-3 rounded-xl mt-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/60 shadow-lg w-full'>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className='flex justify-center mt-6'>
                    <button className='bg-orange text-white text-bold py-2 px-8 sm:py-3 sm:px-10 max-w-max rounded-2xl cursor-pointer transition-all duration-300 hover:bg-orange/80 hover:scale-105 hover:shadow-lg text-base sm:text-xl '>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormDog