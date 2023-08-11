import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  petAge: { type: String, required: true },
  petSpecies: { type: String, required: true },
  petLocation: { type: String, required: true },
  petEnergy: { type: String, required: true },
  petSex: { type: String, required: true },
  petSize: { type: String, required: true },
  petVaccination: { type: String, required: true },
  leucemia: { type: String, required: false },
  petSterilization: { type: String, required: true },
});

const Pet = mongoose.model('Pet', petSchema);

export async function getPetsByFilters(filters){
  const pets = await Pet.find(filters);
  return pets;
}