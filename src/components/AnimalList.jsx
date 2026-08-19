import React,{ useState, useEffect } from 'react'
// import dogs from '../data/dogs';
import { fetchAnimals } from '../services/api';
import AnimalCard from './AnimalCard';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAnimals = async() => {
            try{
                const allAnimals = await fetchAnimals();
                console.log(allAnimals);
                const allowedSpecies = ['8', '3', '2'];

                const filteredAnimals = allAnimals.animals
                .filter((animal) => {
                    const speciesId = animal.relationships?.species?.data?.[0]?.id;
                    return allowedSpecies.includes(speciesId);
                })
                .map((animal) => {
                    const pictureId = animal.relationships?.pictures?.data?.[0]?.id;
                    const picture = allAnimals.pictures.find((picture) => picture.id === pictureId);

                    return {
                        ...animal,
                        picture
                    };
                });
                
                console.log(filteredAnimals);
                setAnimals(filteredAnimals);
            } catch (error) {
                setAnimals(null);
            } finally {
                setLoading(false);
            }
        };
        getAnimals();
    }, []);

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-orange rounded-full animate-spin"></div>
        </div>
    );
    }

  return (
    <div className='bg-bg-gray h-dvh'>
        <div className=' max-w-11/12 mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 py-8 justify-items-center'>
                {animals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AnimalList