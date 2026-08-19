import React from 'react'
import { FaDog, FaBirthdayCake  } from "react-icons/fa";
import { TbGenderFemale  } from "react-icons/tb";
import { CgGenderMale } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const AnimalCard = ({ animal }) => {

    console.log(animal);
    const navigate = useNavigate();

    const attributes = animal?.attributes || {};
    const name = attributes.name || 'Sin nombre';
    const breed = attributes.breedPrimary || 'Raza desconocida';
    const age = attributes.ageString || 'Edad desconocida';
    const sex = attributes.sex || 'Desconocida';
    const picture = animal.picture.attributes.large.url;

  return (
    <div className='bg-white w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[340px] rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
        <img src={picture} alt={breed} className='w-full object-cover object-center h-64 sm:h-68 lg:h-72 rounded-t-2xl' />
        <div className='p-5 sm:p-6 font-montserrat h-70 min-h-[280px]'>
            <h2 className='font-bold text-xl sm:text-2xl mb-6 text-gray-800'>{name}</h2>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    {sex === "Male" ? (
                                 <CgGenderMale className='text-orange text-3xl'/>
                    ): (
                                 <TbGenderFemale className='text-orange text-3xl'/>
                     )}
                    <p>{sex}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaDog className='text-orange text-2xl' />
                    <p>{breed}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaBirthdayCake  className='text-orange text-2xl'/>
                    <p>{age}</p>
                </div>
                <button className='bg-orange text-white text-bold py-1 px-4 self-center max-w-max rounded-2xl cursor-pointer transition-all duration-300 hover:bg-orange/80 hover:scale-105 hover:shadow-lg text-xl my-5 'onClick={() => navigate(`/animal/${animal.id}`)}>Ver más</button>
            </div>
        </div>
    </div>
  )
}

export default AnimalCard