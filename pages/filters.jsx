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
  const [petSpecies, setPetSpecies] = useState('')
  const [filters, setFilters] = useState('')


  useEffect(() => {
    const getPosts = async(data) => {   

      return fetch(`http://localhost:8080/post?petSex=${data[0]}&petAge=${data[1]}&actLevel=${data[2]}&vacc=${data[3]}&isNeutered=${data[4]}&petSpecies=${data[5]}`)
      .then((response) => {
        return response.json()
      }).then((obj) =>{
        let posts = obj.data
        setApiData(posts)
      })
    }
   getPosts(filters)
  }, [filters])

  const { register, handleSubmit, getValues, setValue } = useForm()

  const onSubmit = (e)=>{
    const inputValues = getValues()
    const valueArray = Object.values(inputValues)
       return setFilters(valueArray)
  }
  console.log(filters, apiData)

  return (
    <div>
      <Head>
        <title>Filtros de Adopción</title>
      </Head>
      <Navbar />
      <div className='container-lg'>
        <aside className={`col-lg-3 ${styles.aside}`}>
          <form
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className={`${styles.filter_group}`}>
            <h3 className={`${styles.h3}`}>BUSCO:</h3>
            <div className={`form-check form-check-inline ${styles.radio_block}`}>
              <input
                name='petSpecies'
                type='radio'
                value='perro'
                onChange={(e)=> {
                  setValue('petSpecies', e.target.value)
                  setPetSpecies(e.target.value)
                }}

              />
              Perro</div>
            <div className={`form-check form-check-inline ${styles.radio_block}`}>
              <input
                name='petSpecies'
                type='radio'
                value='gato'
                onChange={(e)=>{
                  setValue('petSpecies', e.target.value)
                  setPetSpecies(e.target.value)
                }}
              />
              Gato
            </div>
            <div className={`form-check form-check-inline ${styles.radio_block}`}>
              <input
                name='petSpecies'
                type='radio'
                value=''
                onChange={(e)=>{
                  setValue('petSpecies', e.target.value)
                  setPetSpecies(e.target.value)
                }}
              />
              Todos
            </div>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='sexo'>Sexo</label>
            <select {...register('petSex')}
              id='sexo'
              className='form-select'
            >
              <option value=''>Todos</option>
              <option value='hembra'>Hembra</option>
              <option value='macho'>Macho</option>
            </select>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='edad'>Edad</label>
            <select  {...register('petAge')}
              id='edad'
              className='form-select'
            >
              <option value=''>Todos</option>
              <option value='cachorro'>Cachorro</option>
              <option value='joven'>Joven</option>
              <option value='adulto'>Adulto</option>
              <option value='adulto mayor'>Adulto Mayor</option>
            </select>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='nivel-actividad'>Nivel de Actividad</label>
            <select  {...register('actLevel')}
              id='nivel-actividad'
              className='form-select'
            >
              <option value=''>Todos</option>
              <option value='alta'>Alta</option>
              <option value='moderada'>Moderada</option>
              <option value='baja'>Baja</option>
            </select>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='vacunacion'>Vacunación</label>
            <select  {...register('vacc')}
              id='vacunacion'
              className='form-select'
            >
              <option value=''>Todos</option>
              <option value='desparasitado'>Desparasitado/a</option>
              <option value='desparasitado y vacunado'>Desparacitado/a y vacubnado/a</option>
              <option value='ninguna'>Ninguna</option>
            </select>
          </div>
          <div className={`${styles.filter_group}`}>
            <label htmlFor='esterilizacion'>Esterilización</label>
            <select  {...register('isNeutered')}
              id='esterilizacion'
              className='form-select'
            >
              <option value=''>Todos</option>
              <option value='si'>Esterilizado</option>
              <option value='no'>Sin esterilizar</option>
            </select>
          </div>

        
          <div className={styles.filter_group}>
            <button 
              type='submit'
              className={`btn_orange btn-lg ${styles.apply_btn}`}>
              BUSCAR
            </button>
          </div>
          </form>
        </aside>

        <div className={`col-lg-9 ${styles.main}`}>
          <div className='row'>
          {apiData.map((post) => (
              <div key={post._id} className='col-md-4 mb-4'>
                <div className='card'>
                  <Image
                    fill='true'
                    src={post.photoUrls[0]}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Filters;
