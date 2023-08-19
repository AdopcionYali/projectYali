import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "@/styles/Filters.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Filters = () => {

  const [apiData, setApiData] = useState([])
  useEffect(() => {
    const getPosts = async() => {
      return fetch('http://localhost:8080/post'
      ).then((response) => {
        return response.json()
      }).then((obj) =>{
        let posts = obj.data
        setApiData(posts)
      })
    }
   getPosts()
  }, [])

  const { register, handleSubmit } = useForm()

  const onSubmit = async(e)=>{


  }
console.log(apiData)
  return (
    <div>
      <Head>
        <title>Filtros de Adopción</title>
      </Head>
      <Navbar />
      <div className='container'>
        <aside className={`col-lg-3 ${styles.aside}`}>
          <form
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className={`${styles.filter_group}`}>
            <h3 className={`${styles.h3}`}>BUSCO:</h3>
            <div className={`form-check form-check-inline ${styles.radio_block}`}>
              <input
                type='radio'
                value='perro'
              />
              Perro</div>
            <div className={`form-check form-check-inline ${styles.radio_block}`}>
              <input
                type='radio'
                value='gato'
              />
              Gato
            </div>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='sexo'>Sexo</label>
            <select
              id='sexo'
              className='form-select'
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
            >
              <option value='true'>Esterilizado</option>
              <option value='false'>Sin esterilizar</option>
            </select>
          </div>
          {(
            <div className={`${styles.filter_group}`}>
              <label htmlFor='felv'>¿Libre de leucemia felina?</label>
              <select
                id='felv'
                className='form-select'
              >
                <option value='false'>Libre de leucemia/No se ha realizado prueba</option>
                <option value='true'>Presenta leucemia</option>
              </select>
            </div>
          )}
          <div className={styles.filter_group}>
            <button className={`btn_orange btn-lg ${styles.apply_btn}`}>
              BUSCAR
            </button>
          </div>
          </form>
        </aside>

        <main className={`col-lg-9 ${styles.main}`}>
          <div className='row'>
          {apiData.map((post) => (
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
