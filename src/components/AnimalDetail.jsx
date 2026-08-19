import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdPlace, MdOutlineBolt  } from "react-icons/md";
import { FaDog, FaBirthdayCake  } from "react-icons/fa";
import { CgGenderMale } from "react-icons/cg";
import { TbGenderFemale, TbRulerMeasure  } from "react-icons/tb";
import { RiWeightFill } from "react-icons/ri";
import { fetchAnimalById } from '../services/api';
import  cleanDescription  from '../services/cleanDescription';

const AnimalDetail = () => {

    const { id } = useParams();
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getAnimal = async () => {
      try {
        const animal = await fetchAnimalById(id);
        console.log(animal);
        setAnimal(animal);
      } catch (error) {
        setAnimal(null);
      } finally {
        setLoading(false);
      }
    };
    getAnimal();
  }, [id]);
      

    
      const name = animal?.data[0]?.attributes?.name || 'Sin nombre';
      const energy = animal?.data[0]?.attributes?.activityLevel || 'Desconocida';
      const breed = animal?.data[0]?.attributes?.breedPrimary || 'Raza desconocida';
      const age = animal?.data[0]?.attributes?.ageString || 'Edad desconocida';
      const gender = animal?.data[0]?.attributes?.sex || 'Desconocido';
      const size = animal?.data[0]?.attributes?.sizeGroup || 'Desconocido';
      const weight = animal?.data[0]?.attributes?.sizeCurrent
      ? Number(animal.data[0].attributes.sizeCurrent).toFixed(2): 'Desconocido';  
       const description = cleanDescription(animal?.data[0]?.attributes?.descriptionText) || 'Desconocido';
      const pictureId = animal?.data[0]?.relationships?.pictures?.data?.[0]?.id;
      const picture = animal?.included?.find((pic) => pic.id === pictureId);
      console.log(picture);
      const image = picture?.attributes?.large.url;

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-orange rounded-full animate-spin"></div>
        </div>
      );
  }

  return (
    <div className='py-4 bg-bg-gray min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-3 w-11/12 lg:w-5/6 py-6 lg:py-10 px-4 sm:px-6 lg:px-8 bg-new-white mx-auto shadow-lg gap-6 lg:gap-8 rounded-2xl'>
        <div className='w-full aspect-square max-w-xs lg:max-w-xl mx-auto flex items-center justify-center overflow-hidden rounded-xl'>
          <img src={image} alt={name} className='w-full h-full object-cover object-center' />
        </div>
        <div className='p-2 sm:p-6 flex flex-col justify-center lg:col-span-2 font-montserrat'>
            <h2 className='font-bold text-2xl sm:text-3xl text-gray-800 mb-8 sm:mb-10 text-center'>{name}</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-6'>
              <div className='flex flex-col  text-center items-center'>
                 <p className='text-lg font-medium mb-2'>Energy Level</p>
                <div className='flex items-center'>
                  <MdOutlineBolt  className='text-orange text-2xl sm:text-3xl'/>
                  <p>{energy}</p>
                </div>
              </div>
              <div className='flex flex-col  text-center items-center'>
                 <p className='text-lg font-medium mb-2 '>Breed</p>
                <div className='flex items-center gap-2'>
                  <FaDog  className='text-orange text-2xl sm:text-3xl'/>
                  <p>{breed}</p>
                </div>
              </div>
              <div className='flex flex-col  text-center items-center'>
                 <p className='text-lg font-medium mb-2'>Age</p>
                <div className='flex items-center gap-2'>
                  <FaBirthdayCake  className='text-orange text-2xl sm:text-3xl'/>
                  <p>{age}</p>
                </div>
              </div>
              <div className='flex flex-col  text-center items-center'>
                 <p className='text-lg font-medium mb-2'>Gender</p>
                <div className='flex items-center gap-2'>
                 {/* añadir icono de hembra o macho segun el valor */}
                {gender === "Macho" ? (
                  <CgGenderMale className='text-orange text-2xl sm:text-3xl'/>
                ): (
                  <TbGenderFemale className='text-orange text-2xl sm:text-3xl'/>
                )}
                <p>{gender}</p>
                </div>
              </div>
              <div className='flex flex-col  text-center items-center'>
                 <p className='text-lg font-medium mb-2'>Size</p>
                <div className='flex items-center gap-2'>
                  <TbRulerMeasure  className='text-orange text-2xl sm:text-3xl'/>
                  <p>{size}</p>
                </div>
              </div>
             <div className='flex flex-col  text-center items-center'>
                 <p className='text-lg font-medium mb-2'>Weight</p>
                <div className='flex items-center gap-2'>
                  <RiWeightFill  className='text-orange text-2xl sm:text-3xl'/>
                  <p>{weight}</p>
                </div>
              </div>
            </div>
        </div>
        <div className='flex flex-col col-span-1 lg:col-span-3 border-t border-gray-300 gap-2 mt-2 lg:mt-5 pt-4'>
              <p className='font-semibold text-lg mt-4'>About me</p>
              <p className='leading-7 text-gray-700'>{description}</p>
            </div>
      </div>
    </div>
  )
}

export default AnimalDetail