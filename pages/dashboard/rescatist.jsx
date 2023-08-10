import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/contexts/auth.context'
import Navbar from '@/components/Navbar'
import styles from '@/styles/DashRescatist.module.scss'
import dogFingerprint from '@/public/icon-dog-fingerprint.svg'
import dogs from '@/public/dogs-dashboard-rescatist.png'
import iconUser from '@/public/icon-user.svg'

const inputs = [
  {
    label: 'Nombre completo',
    name: 'name',
    type: 'text',
    placeholder: 'Escribe tu nombre completo',
  },
  {
    label: 'Fecha de nacimiento',
    name: 'birthdate',
    type: 'date',
    placeholder: 'Introduce tu fecha de nacimiento',
  },
  {
    label: 'Correo electrónico',
    name: 'email',
    type: 'email',
    placeholder: 'Introduce tu código postal',
  },
  {
    label: 'Código postal',
    name: 'zipcode',
    type: 'text',
    placeholder: 'Introduce tu código postal',
  },
  {
    label: 'Municipio',
    name: 'town',
    type: 'select',
    placeholder: 'De acurdo a código postal',
    active: true,
  },
  {
    label: 'Estado',
    name: 'phone',
    type: 'text',
    placeholder: 'De acurdo a código postal',
    active: true,
  },
]

export default function Rescatist() {
  const [previewImg, setPreviewImg] = useState('')
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm()

  const onSubmit = () => {
    console.log('ENVIADO')
    console.log(getValues())
  }

  return (
    <>
      <Navbar />
      <main
        className={`vw-100 mt-lg-4 d-flex flex-column flex-lg-row justify-content-evenly ${styles.main}`}
      >
        <aside
          className={`${styles.lateral_menu} bg-color-secondary col-12 px-3 py-3 col-lg-2 text-white rounded-4 px-lg-5 py-lg-5`}
        >
          <h4 className='w-700 mb-lg-5'>
            <i className='bi bi-pencil-square me-2'></i>
            Mi perfil
          </h4>
          <p className='fs-5 m-0 m-lg-auto text-center text-lg-start'>
            <i className='bi bi-people me-2'></i>
            Menú
          </p>
          <div className='d-flex flex-lg-column mt-2 pt-2 mt-lg-auto pt-lg-auto ms-lg-2'>
            <button className='ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2'>
              Publicar
            </button>
            <button className='ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2'>
              Solicitudes
            </button>
            <button className='ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2'>
              Mascotas
            </button>
          </div>
        </aside>

        <section className='bg-white-1 col-lg-8 rounded-4 mx-3 mx-lg-0 px-4 px-lg-5 py-3 shadow'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='w-400'>
              Hola <span className='w-700 color-primary'>Rescatista! </span>
            </h1>
            <p className='w-600 text-black-50'>
              *Tu cuenta ha sido creada. Para continuar con el proceso de
              publicación de tus adoptables primero requerimos algunos datos
              tuyos como rescatista.
            </p>

            <div className='row d-flex'>
              <article className='col-12 col-lg-5 d-flex flex-column'>
                {inputs.map(({ name, type, label, placeholder, active }, i) => (
                  <div className='form-group mt-3' key={`input-${name}-${i}`}>
                    <label className='fw-normal mb-2 mb-lg-auto' htmlFor={name}>
                      {label}
                    </label>
                    <input
                      type={type}
                      className='form-control'
                      id={name}
                      placeholder={placeholder}
                      disabled={active}
                      {...register(name, { required: true })}
                    />
                  </div>
                ))}
              </article>

              <article className='col-12 col-lg-4 d-flex flex-column justify-content-between'>
                <p className='mt-4 mt-lg-auto'>
                  Sube una foto tuya sosteniendo tu identificación oficial
                  vigente para corroborar tu identidad.
                </p>
                <div className={`${styles.input_file_container} rounded-2 mb-2 d-flex align-items-center justify-content-center`}>
                  <label htmlFor="photoIdUrl">Seleccionar archivo</label>
                  <i className="bi bi-plus-circle ms-2" />
                  <input
                    id='photoIdUrl'
                    type='file'
                    className='form-control'
                    {...register('photoIdUrl', { required: true })}
                    onChange={(e) => {
                      setPreviewImg(URL.createObjectURL(e.target.files[0]))
                    }}
                  />
                </div>
                <div
                  className={`${styles.logo_user_container} p-2 rounded-4`}
                >
                  <img
                    src={previewImg || iconUser.src}
                    alt='user-image'
                    className='rounded-4'
                  />
                </div>
                <div className='form-check my-4 my-lg-auto'>
                  <input
                    id='privacy'
                    type='checkbox'
                    className='form-check-input'
                    {...register('privacy', { required: true })}
                  />
                  <label htmlFor='privacy' className='form-check-label'>
                    Acepto el aviso de privacidad y los términos y condiciones
                    de Yali
                  </label>
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='bg-color-primary text-white w-100 rounded-2 py-1 px-2 btn_validation fw-bold border-0'
                    onClick={(e) => console.log(isValid)}
                  >
                    Solicitar verificación
                    <Image
                      src={dogFingerprint.src}
                      width={30}
                      alt='dog-finger'
                      height={30}
                      className='ms-2'
                    />
                  </button>
                </div>
              </article>
            </div>
          </form>
        </section>
        <aside className='col-lg-1 position-relative z-n2'>
          <img
            src={dogs.src}
            alt='dogs image'
            className={`${styles.dogs_image}`}
          />
        </aside>
      </main>
    </>
  )
}
