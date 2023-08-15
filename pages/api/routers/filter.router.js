import express from 'express'
const routerPet = express.Router();
const Pet = require('./models/user.model.js'); 

routerPet.get('/pets', async (req, res) => {
  try {
    const { selectedPet, selectedSex, selectedAge, selectedSize, selectedEnergyLevel, selectedPersonality, selectedVaccinationStatus, selectedSterilizationStatus, selectedLeucemia, selectedLocation } = req.query;
    
    const filter = {
      petSpecies: selectedPet,
      petSex: selectedSex,
      petAge: selectedAge,
      petSize: selectedSize,
      petEnergy: selectedEnergyLevel,
      petPersonality: selectedPersonality,
      petVaccination: selectedVaccinationStatus,
      petSterilization: selectedSterilizationStatus,
      leucemia: selectedLeucemia,
      petLocation: selectedLocation,
    };

    const pets = await Pet.find(filter);

    res.json(pets);
  } catch (error) {
    console.error('Error al obtener los detalles de:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos.' });
  }
});

export default routerPet
