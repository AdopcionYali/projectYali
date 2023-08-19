import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import styles from "@/styles/DashRescatist.module.scss";
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import savePostObject from "@/services/post.services";
import 'dotenv/config'

const submitPost = () => {

  const [petName, setPetName] = useState('')
  const [petSpecies, setPetSpecies] = useState('')
  const [petSex, setPetSex] = useState('')
  const [petAge, setPetAge] = useState('')
  const [actLevel, setActLevel] = useState('')
  const [vacc, setVacc] = useState('')
  const [background, setBackground] = useState('')
  const [isNeutered, setIsNeutered] = useState('')
  const [isFelvPositive, setIsFelvPositive] = useState('')
  const [images, setImages] = useState([])
  const [error, setError] = useState('')

  const fileOnChange = (e) =>{
    return setImages(e.target.files)
   }
   
   let formData = new FormData()
    for (let i = 0 ; i < images.length ; i++) {
      formData.append("pet-images", images[i]);
   }

  
  const { register, handleSubmit, getValues, setValue } = useForm()

  const onSubmit = async (e) => {
    if (!petName) {
      return setError(<p className='required'>Campo de Nombre vacio. Introduzca un nombre</p>)
    } else { setError('') }
    if (petName.length < 3 || petName.length > 10) {
      return setError(<p className='required'>Introduzca un nombre valido de 2 a 10 caracteres.</p>)
    } else { setError('') }
    if (!petSpecies) {
      return setError(<p className='required'>Elige la especie del adoptable</p>)
    } else { setError('') }
    if (!petSex) {
      return setError(<p className='required'>Elige el sexo del adoptable</p>)
    } else { setError('') }
    if (!petAge) {
      return setError(<p className='required'>Elige el rango de edad del adoptable</p>)
    } else { setError('') }
    if (!actLevel) {
      return setError(<p className='required'>Elige el nivel de actividad del adoptable</p>)
    } else { setError('') }
    if (!vacc) {
      return setError(<p className='required'>Elige el estado de vacunacion del adoptable</p>)
    } else { setError('') }
    if (!background) {
      return setError(<p className='required'>Escribe una descripcion del adoptable</p>)
    } else { setError('') }
    if (background.length < 30 || background.length > 120) {
      return setError(<p className='required'>Introduzca una descripcion de 30 a 120 caracteres</p>)
    } else { setError('') }
    if (!isNeutered) {
      return setError(<p className='required'>Elige el estado de esterilizacion del adoptable</p>)
    } else { setError('') }
    if (!isFelvPositive) {
      return setError(<p className='required'>Elige el estado de leucemia del adoptable</p>)
    } else { setError('') }

  savePostObject(getValues(), formData)
}
return (
  <>
    <Head>
      <title>Crear publicación</title>
      <meta name="description" content="Adopción de mascotas" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Navbar />
    <main
      className={`vw-100 my-lg-4 d-flex flex-column flex-lg-row justify-content-evenly ${styles.main}`}
    >
      <aside
        className={`${styles.lateral_menu} bg-color-secondary col-12 px-3 py-3 col-lg-2 text-white rounded-4 px-lg-5 py-lg-5`}
      >
        <h4 className="w-700 mb-lg-5">
          <i className="bi bi-pencil-square me-2"></i>
          Mi perfil
        </h4>
        <p className="fs-5 m-0 m-lg-auto text-center text-lg-start">
          <i className="bi bi-people me-2"></i>
          Menú
        </p>
        <div className="d-flex flex-lg-column mt-2 pt-2 mt-lg-auto pt-lg-auto ms-lg-2">
          <button className="ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2">
            Publicar
          </button>
          <button className="ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2">
            Solicitudes
          </button>
          <button className="ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2">
            Mascotas
          </button>
        </div>
      </aside>

      <section className={`col-12 col-lg-8 px-4 py-3 ${styles.customSection}`}>
      <form
            onSubmit={handleSubmit(onSubmit)}
            className='h-100'
          >
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mb-3">Nombre de la mascota</h4>
            <input {...register('petName')}
              type="text"
              className={`form-control ${styles.smallInput}`}
              placeholder="Nombre de la mascota"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />

            <h4>Especie</h4>
            <div className="mt-3">
              <div className="d-flex">
                <div className="form-check me-3">
                  <input {...register('petSpecies')}
                    className="form-check-input"
                    type="radio"
                    name="species-input"
                    value='perro'
                    onChange={(e) => {
                      setValue('petSpecies', e.target.value)
                      setPetSpecies(e.target.value)
                    }
                    }
                  />
                  <label className="form-check-label" htmlFor="option1">
                    Perro
                  </label>
                </div>
                <div className="form-check">
                  <input {...register('petSpecies')}
                    className="form-check-input"
                    type="radio"
                    name="species-input"
                    value='gato'
                    onChange={(e) => {
                      setValue('petSpecies', e.target.value)
                      setPetSpecies(e.target.value)
                    }
                  }
                  />
                  <label className="form-check-label" htmlFor="option2">
                    Gato
                  </label>
                </div>
              </div>
            </div>

            <h4>Sexo</h4>
            <div className="mt-3">
              <div className="d-flex">
                <div className="form-check me-3">
                  <input {...register('petSex')}
                    className="form-check-input"
                    type="radio"
                    name="sex-input"
                    id="macho"
                    value='macho'
                    onChange={(e) => {
                      setValue('petSex', e.target.value)
                      setPetSex(e.target.value)
                    }
                  }
                  />
                  <label className="form-check-label" htmlFor="option1">
                    Macho
                  </label>
                </div>
                <div className="form-check">
                  <input {...register('petSex')}
                    className="form-check-input"
                    type="radio"
                    name="sex-input"
                    id="hembra"
                    value='hembra'
                    onChange={(e) => {
                      setValue('petSex', e.target.value)
                      setPetSex(e.target.value)
                    }
                  }
                  />
                  <label className="form-check-label" htmlFor="option2">
                    Hembra
                  </label>
                </div>
              </div>
            </div>

            <h4>Rango de edad</h4>
            <select {...register('petAge')}
              className="form-control mt-3"
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}>
              <option value=''> Elige una opcion </option>
              <option value='cachorro'>Cachorro</option>
              <option value='joven'>Joven</option>
              <option value='adulto'>Adulto</option>
              <option value='adulto mayor'>Adulto mayor</option>
            </select>

            <h4>Nivel de actividad</h4>
            <select 
              {...register('actLevel')}
              className="form-control mt-3"
              value={actLevel}
              onChange={(e) => setActLevel(e.target.value)}>
              <option value=''> Elige una opcion </option>
              <option value='baja'> Baja</option>
              <option value='moderada'> Moderada</option>
              <option value='alta'> Alta</option>
            </select>

            <h4>Vacunas</h4>
            <select 
              {...register('vacc')}
              className="form-control mt-3"
              value={vacc}
              onChange={(e) => setVacc(e.target.value)}>
              <option value=''> Elige una opcion </option>
              <option value='desparasitado'> Desparasitado/a</option>
              <option value='desparasitado y vacunado'> Desparasitado/a y vacunado/a</option>
              <option value='ninguna'> Ninguna</option>
            </select>
          </div>

          <div className="col-lg-6">
            <h4>Historia</h4>
            <textarea {...register('background')}
              className={`form-control ${styles.customTextarea}`}
              placeholder="Escribe tu publicación"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
            ></textarea>

            <h4>¿La mascota esta esterilizada?</h4>
            <div className="mt-3">
              <div className="d-flex">
                <div className="form-check me-3">
                  <input {...register('isNeutered')}
                    className="form-check-input"
                    type="radio"
                    name="neutered"
                    id="neutered1"
                    value="si"
                    onChange={(e) => {
                      setValue('isNeutered', e.target.value)
                      setIsNeutered(e.target.value)
                    }
                  }
                  />
                  <label className="form-check-label" htmlFor="option1">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input {...register('isNeutered')}
                    className="form-check-input"
                    type="radio"
                    name="neutered"
                    id="neutered2"
                    value="no"
                    onChange={(e) => {
                      setValue('isNeutered', e.target.value)
                      setIsNeutered(e.target.value)
                    }
                  }
                  />
                  <label className="form-check-label" htmlFor="option2">
                    No
                  </label>
                </div>
              </div>
            </div>

            <h4>En caso de ser gato, ¿es positivo a Leucemia?</h4>
            <div className="mt-3">
              <div className="d-flex">
                <div className="form-check me-3">
                  <label className="form-check-label"htmlFor='felv-si'>
                  <input {...register('isFelvPositive')}
                    className="form-check-input"
                    type="radio"
                    id="felv-si"
                    value='si'
                    onChange={(e) => {
                      setValue('isFelvPositive', e.target.value)
                      setIsFelvPositive(e.target.value)
                    }
                  }                    
                  />
                    Si
                  </label>
                </div>
                <div className="form-check">
                <label className="form-check-label" htmlFor="felv-no">
                  <input {...register('isFelvPositive')}
                    className="form-check-input"
                    type="radio"
                    id='felv-no'
                    value='no'
                    onChange={(e) => {
                      setValue('isFelvPositive', e.target.value)
                      setIsFelvPositive(e.target.value)
                    }
                  }
                  />
                    No
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="felv"
                    id="felv3"
                    value="no aplica"
                    onChange={(e) => {
                      setValue('isFelvPositive', e.target.value)
                      setIsFelvPositive(e.target.value)
                    }
                  }
                  />
                  <label className="form-check-label" htmlFor="option2">
                    No Aplica
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <label>Cargar archivo:</label>
                <input type="file" className="form-control"
                  name='pet-images'
                  onChange={fileOnChange}
                  multiple
                />
                {error}
                <button
                  type='submit'
                  className={`btn btn-primary ${styles.customButton} w-70`}
                >Publicar</button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </section>
    </main>
    <Footer />
  </>
);
}

export default submitPost