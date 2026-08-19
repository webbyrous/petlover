
export const fetchAnimals = async () => {

    const API_KEY = import.meta.env.VITE_RESCUEGROUPS_API_KEY;
    const API_URL = 'https://api.rescuegroups.org/v5/public/animals/search/available/?include=pictures,species';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Authorization': API_KEY,
      },
      body: JSON.stringify({
       data: {
        filters:[]
        // filters: [
        //   // 1. Filtrar solo los que tienen isAdoptionPending en true
        // //   {
        // //     fieldName: "animals.isAdoptionPending",
        // //     operation: "equals",
        // //     criteria: true
        // //   },
        //   // 2. Filtrar especies: Dog (8), Cat (3), Bird (2)
        //   {
        //     fieldName: "species.id",
        //     operation: "in",
        //     criteria: ["8", "3", "2"]
        //   }
        // ]
      }
      })
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return {
      animals: data.data,
      pictures: data.included
    };
  } catch (error) {
    console.error('Error al obtener animales de RescueGroups:', error);
    throw error;
  }
};

export const fetchAnimalById = async (id) => {
    const API_KEY = import.meta.env.VITE_RESCUEGROUPS_API_KEY;
    const response = await fetch(
        `https://api.rescuegroups.org/v5/public/animals/${id}?include=pictures`,
        {
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Authorization': API_KEY
            }
        }
    );

    if (!response.ok) {
        throw new Error('No se pudo obtener el animal');
    }

    const data = await response.json();

    return data;
};