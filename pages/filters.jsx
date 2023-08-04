import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "@/styles/Filters.module.scss";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Filters = () => {
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedEnergyLevel, setSelectedEnergyLevel] = useState("");
  const [selectedPersonality, setSelectedPersonality] = useState("");
  const [selectedVaccinationStatus, setSelectedVaccinationStatus] =
    useState("");
  const [selectedSterilizationStatus, setSelectedSterilizationStatus] =
    useState("");
  const [selectedLeucemia, setSelectedLeucemia] = useState("");
  const [isLeucemiaVisible, setIsLeucemiaVisible] = useState(false);
  const [pets, setPets] = useState([]);

  const getPets = useCallback(async () => {
    try {
      //Solicitud a MongoDB
      const response = await axios.get("https://api-mongo", {
        params: {
          petSpecies: selectedPet,
          petSex: selectedSex,
          petAge: selectedAge,
          petSize: selectedSize,
          petEnergy: selectedEnergyLevel,
          petPersonality: selectedPersonality,
          petVaccination: selectedVaccinationStatus,
          petSterilization: selectedSterilizationStatus,
          leucemia: isLeucemiaVisible ? "libre" : null,
          petLocation: selectedLocation,
        },
      });
      setPets(response.data);
    } catch (error) {
      console.error("Error al obtener los detalles de:", error);
    }
  }, [
    selectedPet,
    selectedLocation,
    selectedSex,
    selectedAge,
    selectedSize,
    selectedEnergyLevel,
    selectedPersonality,
    selectedVaccinationStatus,
    selectedSterilizationStatus,
    isLeucemiaVisible,
  ]);

  useEffect(() => {
    getPets();
  }, [getPets]);

  const handleFilterChange = (filter, value) => {
    switch (filter) {
      case "pet":
        setSelectedPet(value);
        setIsLeucemiaVisible(value === "gato");
        break;
      case "sex":
        setSelectedSex(value);
        break;
      case "age":
        setSelectedAge(value);
        break;
      case "size":
        setSelectedSize(value);
        break;
      case "energy":
        setSelectedEnergyLevel(value);
        break;
      case "personality":
        setSelectedPersonality(value);
        break;
      case "vaccination":
        setSelectedVaccinationStatus(value);
        break;
      case "sterilization":
        setSelectedSterilizationStatus(value);
        break;
      default:
        break;
    }
  };

  const applyFilters = () => {
    getPets();
  };

  return (
    <div>
      <Head>
        <title>Filtros de Adopción</title>
      </Head>
      <Navbar />
      <div className='container'>
        <aside className={`col-lg-3 ${styles.aside}`}>
          <div className={`${styles.filterGroup}`}>
            <h3>BUSCO</h3>
            <label className='d-block'>
              <input
                type='radio'
                value='perro'
                checked={selectedPet === "perro"}
                onChange={() => handleFilterChange("pet", "perro")}
              />
              Perro
            </label>
            <label className='d-block'>
              <input
                type='radio'
                value='gato'
                checked={selectedPet === "gato"}
                onChange={() => handleFilterChange("pet", "gato")}
              />
              Gato
            </label>
          </div>
          {isLeucemiaVisible && (
            <div className={`${styles.filterGroup}`}>
              <label htmlFor='leucemia'>¿Libre de leucemia felina?</label>
              <select
                id='leucemia'
                className='form-select'
                value={isLeucemiaVisible}
                onChange={(e) => setSelectedLeucemia(e.target.value)}
              >
                <option value='libre'>Libre de leucemia</option>
                <option value='presenta-leucemia'>Presenta leucemia</option>
                <option value='sin-prueba'>
                  No se le ha realizado la prueba
                </option>
              </select>
            </div>
          )}
          <div className={`${styles.filterGroup}`}>
            <label htmlFor='sexo'>Sexo</label>
            <select
              id='sexo'
              className='form-select'
              value={selectedSex}
              onChange={(e) => setSelectedSex(e.target.value)}
            >
              <option value='hembra'>Hembra</option>
              <option value='macho'>Macho</option>
            </select>
          </div>
          <div className={`${styles.filterGroup}`}>
            <label htmlFor='edad'>Edad</label>
            <select
              id='edad'
              className='form-select'
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
            >
              <option value='cachorro'>Cachorro</option>
              <option value='joven'>Joven</option>
              <option value='adulto'>Adulto</option>
              <option value='adulto-mayor'>Adulto Mayor</option>
            </select>
          </div>
          <div className={`${styles.filterGroup}`}>
            <label htmlFor='tamano'>Tamaño</label>
            <select
              id='tamano'
              className='form-select'
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value='pequeno'>Pequeño</option>
              <option value='mediano'>Mediano</option>
              <option value='grande'>Grande</option>
              <option value='gigante'>Gigante</option>
            </select>
          </div>
          <div className={`${styles.filterGroup}`}>
            <label htmlFor='nivel-actividad'>Nivel de Actividad</label>
            <select
              id='nivel-actividad'
              className='form-select'
              value={selectedEnergyLevel}
              onChange={(e) => setSelectedEnergyLevel(e.target.value)}
            >
              <option value='alta'>Alta</option>
              <option value='moderada'>Moderada</option>
              <option value='baja'>Baja</option>
            </select>
          </div>
          <div className={`${styles.filterGroup}`}>
            <label htmlFor='personalidad'>Personalidad</label>
            <select
              id='personalidad'
              className='form-select'
              value={selectedPersonality}
              onChange={(e) => setSelectedPersonality(e.target.value)}
            >
              <option value='timido'>Tímido</option>
              <option value='apegado'>Apegado</option>
              <option value='relajado'>Relajado</option>
              <option value='jugueton'>Juguetón</option>
              <option value='sociable'>Sociable</option>
              <option value='dominante'>Dominante</option>
              <option value='independiente'>Independiente</option>
            </select>
          </div>
          <div className={`${styles.filterGroup}`}>
            <label htmlFor='vacunacion'>Vacunación</label>
            <select
              id='vacunacion'
              className='form-select'
              value={selectedVaccinationStatus}
              onChange={(e) => setSelectedVaccinationStatus(e.target.value)}
            >
              <option value='carnet-completo'>
                Todas las vacunas y desparasitado
              </option>
              <option value='desparasitado'>Únicamente desparasitado</option>
              <option value='rabia'>Únicamente vacuna de rabia</option>
              <option value='vacunas-anuales'>Vacunas anuales</option>
            </select>
          </div>
          <div className={`${styles.filterGroup}`}>
            <label htmlFor='esterilizacion'>Esterilización</label>
            <select
              id='esterilizacion'
              className='form-select'
              value={selectedSterilizationStatus}
              onChange={(e) => setSelectedSterilizationStatus(e.target.value)}
            >
              <option value='esterilizado'>Esterilizado</option>
              <option value='sin-esterilizar'>Sin esterilizar</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <button onClick={applyFilters} className={styles.applyBtn}>
              BUSCAR
            </button>
          </div>
        </aside>

        <main className={`col-lg-9 ${styles.main}`}>
          <div className='row'>
            {pets.map((pet) => (
              <div key={pet._id} className='col-md-4 mb-4'>
                <div className='card'>
                  <Image
                    src={pet.image}
                    className='card-img-top'
                    alt={pet.name}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{pet.name}</h5>
                    <p className='card-text'>Edad: {pet.age}</p>
                    <p className='card-text'>Personalidad: {pet.personality}</p>
                    <div className='d-grid gap-2'>
                      <Link href={`/post/${pet._id}`}>
                        <a className='btn btn-primary'>Ver más</a>
                      </Link>
                      <Link href='/signup'>
                        <a className='btn btn-success'>Adoptar</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Filters;
