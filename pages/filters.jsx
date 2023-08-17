import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "@/styles/Filters.module.scss";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Filters = () => {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedActLevel, setSelectedActLevel] = useState("");
  const [selectedVacc, setSelectedVacc] =
    useState("");
  const [selectedIsNeutered, setSelectedIsNeutered] =
    useState(false);
  const [selectedIsFelvPositive, setIsFelvPositive] = useState(false);
  const [isFelvPositiveVisible, setIsFelvPositiveVisible] = useState(false);
  const [pets, setPets] = useState([]);

  const getPets = useCallback(async () => {
    try {
      //Solicitud a MongoDB
      const response = await axios.get("https://api-mongo", {
        params: {
          petSpecies: selectedSpecies,
          petSex: selectedSex,
          petAge: selectedAge,
          actLevel: selectedActLevel,
          vacc: selectedVacc,
          isNeutered: selectedIsNeutered,
          isFelvPositive: selectedIsFelvPositive ? "libre" : null,
          petLocation: selectedLocation,
        },
      });
      setPets(response.data);
    } catch (error) {
      console.error("Error al obtener los detalles de:", error);
    }
  }, [
    selectedSpecies,
    selectedLocation,
    selectedSex,
    selectedAge,
    selectedActLevel,
    selectedVacc,
    selectedIsNeutered,
    selectedIsFelvPositive,
  ]);

  useEffect(() => {
    getPets();
  }, [getPets]);

  const handleFilterChange = (filter, value) => {
    switch (filter) {
      case "petSpecies":
        setSelectedSpecies(value);
        setIsFelvPositiveVisible(value === "gato");
        break;
      case "petSex":
        setSelectedSex(value);
        break;
      case "petAge":
        setSelectedAge(value);
        break;
      case "actLevel":
        setSelectedActLevel(value);
        break;
      case "vacc":
        setSelectedVacc(value);
        break;
      case "isNeutered":
        setSelectedIsNeutered(value);
        break;
        case "petLocation":
        setSelectedLocation(value);
        case "isFelvPositive":
         setIsFelvPositive(value)
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
          <div className={`${styles.filter_group}`}>
            <h3 className={`${styles.h3}`}>BUSCO:</h3>
            <div className={`form-check form-check-inline ${styles.radio_block}`}>
              <input
                type='radio'
                value='perro'
                checked={selectedSpecies === "perro"}
                onChange={() => handleFilterChange("petSpecies", "perro")}
              />
              Perro</div>
            <div className={`form-check form-check-inline ${styles.radio_block}`}>
              <input
                type='radio'
                value='gato'
                checked={selectedSpecies === "gato"}
                onChange={() => handleFilterChange("petSpecies", "gato")}
              />
              Gato
            </div>
          </div>
          <div className={`${styles.filter_group}`}>
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
          <div className={`${styles.filter_group}`}>
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
              <option value='adulto mayor'>Adulto Mayor</option>
            </select>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='nivel-actividad'>Nivel de Actividad</label>
            <select
              id='nivel-actividad'
              className='form-select'
              value={selectedActLevel}
              onChange={(e) => setSelectedActLevel(e.target.value)}
            >
              <option value='alta'>Alta</option>
              <option value='moderada'>Moderada</option>
              <option value='baja'>Baja</option>
            </select>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='vacunacion'>Vacunación</label>
            <select
              id='vacunacion'
              className='form-select'
              value={selectedVacc}
              onChange={(e) => setSelectedVacc(e.target.value)}
            >
              <option value='desparasitado'>Desparasitado/a</option>
              <option value='desparasitado y vacunado'>Desparacitado/a y vacubnado/a</option>
              <option value='ninguna'>Ninguna</option>
            </select>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='esterilizacion'>Esterilización</label>
            <select
              id='esterilizacion'
              className='form-select'
              value={selectedIsNeutered}
              onChange={(e) => setSelectedIsNeutered(e.target.value)}
            >
              <option value='true'>Esterilizado</option>
              <option value='false'>Sin esterilizar</option>
            </select>
          </div>
          {isFelvPositiveVisible && (
            <div className={`${styles.filter_group}`}>
              <label htmlFor='felv'>¿Libre de leucemia felina?</label>
              <select
                id='felv'
                className='form-select'
                value={isFelvPositiveVisible}
                onChange={(e) => setIsFelvPositive(e.target.value)}
              >
                <option value='false'>Libre de leucemia/No se ha realizado prueba</option>
                <option value='true'>Presenta leucemia</option>
              </select>
            </div>
          )}
          <div className={styles.filter_group}>
            <button onClick={applyFilters} className={`btn_orange btn-lg ${styles.apply_btn}`}>
              BUSCAR
            </button>
          </div>
        </aside>

        <main className={`col-lg-9 ${styles.main}`}>
          <div className='row'>
            {pets.map((post) => (
              <div key={post._id} className='col-md-4 mb-4'>
                <div className='card'>
                  <Image
                    src={post.photoURL}
                    className='card-img-top'
                    alt={post.petName}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{post.petName}</h5>
                    <p className='card-text'>Edad: {post.petAge}</p>
                    <p className='card-text'>Personalidad: {post.actLevel}</p>
                    <div className='d-grid gap-2'>
                      <Link href={`/post/${post._id}`}>
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
