import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import styles from '@/styles/AdopterProfile.module.scss'
import { useForm } from 'react-hook-form'
import WebcamImage from '@/components/WebCamImage'
import { BASE_URl_API } from '@/libs/baseUrl'

const adopterProfile = () => {



  const { register, handleSubmit, formState: { errors }, setValue, getValues} = useForm()
  const [zipcode, setZipcode] = useState('')
  

  useEffect(() => {
    const getCitys = async () => {
      let request = await fetch(
        `https://codigos-postales-mx.p.rapidapi.com/cp/${zipcode}`,
        {
          headers: {
            'X-RapidAPI-Key':
              'e24b67acd4mshc4ce90dd02cf333p14ab85jsnf8c3dd65bfdb',
            'X-RapidAPI-Host': 'codigos-postales-mx.p.rapidapi.com',
          },
        },
      )
      let response = await request.json()
      let { estado, municipio } = response[1]
      setValue('state', estado.nombre)
      setValue('city', municipio.nombre)
      
      
    }
    if (zipcode?.length === 5) getCitys()
    
  }, [zipcode])

  const customSubmit = (async (data) => {
console.log(data)

    // const authorDataString = localStorage.getItem('token').split('.')[1];
    // const { _id } = JSON.parse(atob(authorDataString));
    // data['user'] = _id;
    // const token = localStorage.getItem('token')


    // try {
    //   const response = await fetch(`${BASE_URl_API}users/${_id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Authorization': `Bearer ${token}`,
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
      
    //   console.log(data)



    // } catch (error) {
    //   alert('Something went wrong');
    //   console.log(error)


    // }

  })







  return (
    <>
      <Navbar></Navbar>

      <div className='m-5 d-flex row justify-content-center'>
        <aside className={`col-lg-2 col-sm-12 me-4 ${styles.asideProfile} `}>
          <h5><img src='pencil.svg' alt='pencil'></img> Mi Perfil</h5>
          <p>Cel:</p>
        </aside>
        <main className={`col-lg-9 col-sm-12 bg-light ${styles.form} `} >
          <p><b>Tu cuenta ha sido creada. Para continuar con el proceso de adoptar a tu futuro animal de compañía por favor llena la siguiente solicitud de adopción.</b></p>

          <form onSubmit={handleSubmit(customSubmit)} onChange={() => setZipcode(getValues().zipcode)} className='d-flex row gx-5'>
            <div className='col-lg-6 col-sm-12'>Solicitud de adopción:
              <input type='text' className='form-control mt-4' {...register('name', { required: true })} placeholder='Nombre' aria-describedby='basic-addon1' />
              {errors.name?.type === 'required' && <small className='text-danger'>
                Por favor escriba su nombre</small>}
              <input type='text' className='form-control mt-2' {...register('lastName', { required: true })} placeholder='Apellidos' aria-describedby='basic-addon1' />
              {errors.lastName?.type === 'required' && <small className='text-danger'>Por favor escriba su Apellido</small>}
              <input type='text' className='form-control mt-2' {...register('occupation', { required: true })} placeholder='Ocupación' aria-describedby='basic-addon1' />
              {errors.occupation?.type === 'required' && <small className='text-danger'>Por favor escriba su ocupación</small>}
              <p className='mt-3'>Fecha de nacimiento: </p>
              <input type='date' className='form-control ' {...register('dateOfBirth', { required: true })} max='2023-12-31' />
              {errors.dateOfBirth?.type === 'required' && <small className='text-danger'>Por favor seleccione una fecha</small>}
              <input type='text' className='form-control mt-2' name='zipcode'  {...register('zipcode')} placeholder='Código Postal' aria-describedby='basic-addon1' />
              {errors.zip?.type === 'required' && <small className='text-danger'>Por favor escriba su código Postal</small>}
              <input type='text' className='form-control mt-2'  placeholder='Estado' aria-describedby='basic-addon1' disabled/>
              <input type='text' className='form-control mt-2' {...register('street', { required: true })} placeholder='Calle y número' aria-describedby='basic-addon1' />
              {errors.street?.type === 'required' && <small className='text-danger'>Por favor escriba su Calle y número de residencia</small>}
              <input type='text' className='form-control mt-2'  placeholder='municipio' aria-describedby='basic-addon1' disabled />
              <div className='input-group mt-2'>
                <input type='email' className='form-control' {...register('email', { required: true })} placeholder='Correo electrónico' aria-describedby='basic-addon2' />

              </div>
              {errors.email?.type === 'required' && <small className='text-danger'>Por favor escriba un correo electrónico @ejemplo.com</small>}
              <p className='mt-3'>Sube una foto tuya sosteniendo tu identificación oficial vigente: </p>
              <WebcamImage setValue={setValue} />
              <p className='mt-3'>Sube un comprobante de domicilio reciente (menor a 3 meses de vigencia) </p>
              <input type='file' className='form-control' name='addressDoc' {...register('addressDoc')} />
              <p className='mt-3'>Sube fotos del espacio en el que estará y dormirá tu animal de compañía (máx. 5 imágenes) </p>
              <input type="file" id="files" className='form-control' name='housePhotos' {...register('housePhotos')} multiple />

            </div>


            <div className='col-lg-6 col-sm-12'>
              <p className='mt-3'>¿Vives en casa o departamento?</p>
              <select className='form-select mt-2 mb-3' {...register('livingPlace', { required: true })} aria-label='Large select example'>
                <option value='casa'>Casa</option>
                <option value='departamento'>Departamento</option>
              </select>
              {errors.livingPlace?.type === 'required' && <small className='text-danger'>Por favor seleccione su tipo de vivienda</small>}
              <p>¿Cuántas personas más viven contigo?</p>
              <input type='number' className='form-control mt-2' {...register('roomies', { required: true })} min='0' max='10' />
              {errors.roomies?.type === 'required' && <small className='text-danger'>Por favor seleccione o escriba cuantas personas viven con usted</small>}
              <p className='mt-3'>¿Todos están de acuerdo con la adopción?</p>
              <div className='d-flex'>
                <div className='form-check'>
                  <input className={`form-check-input ${styles.formCheck}`} {...register('roomiesAgreement', { required: true })} type='radio' value='si' id='flexRadioDefault' />
                  <label className='form-check-label' htmlFor='flexRadioDefault'> si </label>
                </div>
                {errors.roomiesAgreement?.type === 'required' && <small className='text-danger'>Por favor seleccione una de las dos opciones</small>}
                <div className='form-check ms-3'>
                  <input className={`form-check-input ${styles.formCheck}`} {...register('roomiesAgreement', { required: true })} type='radio' value='no' id='flexRadioDefault' />
                  <label className='form-check-label' htmlFor='flexRadioDefault'> No </label>
                </div>
                {errors.roomiesAgreement?.type === 'required' && <small className='text-danger'>Por favor seleccione una de las dos opciones</small>}
              </div>
              <p className='mt-3'>¿Ya tienes o has tenido animales de compañía?</p>
              <div className='d-flex'>
                <div className='form-check'>
                  <input className={`form-check-input ${styles.formCheck}`} {...register('pastPets', { required: true })} type='radio' value='si' id='flexRadioDefault2' />
                  <label className='form-check-label' htmlFor='flexRadioDefault2'> si </label>
                </div>
                {errors.pastPets?.type === 'required' && <small className='text-danger'>Por favor seleccione una de las dos opciones</small>}
                <div className='form-check ms-3'>
                  <input className={`form-check-input ${styles.formCheck}`} {...register('pastPets', { required: true })} type='radio' value='no' id='flexRadioDefault2' />
                  <label className='form-check-label' htmlFor='flexRadioDefault2'> No </label>
                </div>
                {errors.pastPets?.type === 'required' && <small className='text-danger'>Por favor seleccione una de las dos opciones</small>}
              </div>
              <p className='mt-3'>Si ya no lo tienes ¿qué pasó con él?</p>
              <input type='text' className='form-control' {...register('petStorie')} aria-describedby='addon-wrapping' />
              <p className='mt-3'>Si te cambias de casa, estado o país ¿qué harías con tu animal de compañía?</p>
              <input type='text' className='form-control' {...register('moveInScenario', { required: true })} aria-describedby='addon-wrapping' />
              {errors.moveInScenario?.type === 'required' && <small className='text-danger'>Por favor escriba su respuesta</small>}
              <p className='mt-3'>Si cambiara tu situación económica actual donde se te dificulte pagar lo mismo que puedes costear ahora ¿qué harías con tu animal de compañía?</p>
              <input type='text' className='form-control' {...register('hardEconomicSituationScenario', { required: true })} aria-describedby='addon-wrapping' />
              {errors.hardEconomicSituationScenario?.type === 'required' && <small className='text-danger'>Por favor escriba su respuesta</small>}
              <div className="form-check mt-3">
                <input className={`form-check-input ${styles.formCheck}`} {...register('commitment', { required: true })} type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">La vida media de un animal de compañía es de 15 años ¿Te comprometes a cuidarlo y atenderlo durante toda su vida?</label>
              </div>
              {errors.commitment?.type === 'required' && <small className='text-danger'>Necesitará  comprometerse marcando esta casilla</small>}

              <div className="form-check mt-3">
                <input className={`form-check-input ${styles.formCheck}`} {...register('temrsAndConditions', { required: true })} type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault"> Acepto el aviso de privacidad y los términos y condiciones de Yali </label>
                {errors.temrsAndConditions?.type === 'required' && <small className='text-danger'>Favor de leer y aceptar los términos y condiciones marcando esta casilla </small>}
              </div>

              <button type='submit' className={`btn btn-secondary mt-3 ${styles.btnOrange}`}><img alt='pet-paw' src='pet_paw.svg' width={25} className='me-2'></img> Solicitar validación</button>

            </div>
          </form>
        </main>

      </div>
    </>
  )
}

export default adopterProfile