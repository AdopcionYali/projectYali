import React from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
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
    label: 'Código postal',
    name: 'zipcode',
    type: 'text',
    placeholder: 'Introduce tu código postal',
  },
  {
    label: 'Municipio',
    name: 'town',
    type: 'select',
    placeholder: 'Introduce tu municipio',
  },
  {
    label: 'Estado',
    name: 'phone',
    type: 'text',
    placeholder: 'Introduce tu telefono',
  },
  {
    label: 'Correo electrónico',
    name: 'email',
    type: 'email',
    placeholder: 'Introduce tu código postal',
  },
]

export default function Rescatist() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm()
  console.log(styles)
  return (
    <>
      <Navbar />
      <main
        className={`vw-100 mt-4 d-flex justify-content-evenly ${styles.main}`}
      >
        <aside className='bg-color-secondary col-lg-2 text-white rounded-4 px-5 py-5'>
          <h4 className='w-700 mb-5'>
            <i className='bi bi-pencil-square me-2'></i>
            Mi perfil
          </h4>
          <p className='fs-5'>
            <i className='bi bi-people me-2'></i>
            Menú
          </p>
          <div className='d-flex flex-column'>
            <button>Publicar</button>
            <button>Solicitudes</button>
            <button>Mascotas</button>
          </div>
        </aside>

        <section className='bg-white-1 col-lg-8 rounded-4 px-5 py-3 shadow'>
          <form>
            <h1 className='w-500'>
              Hola <span className='w-700 color-primary'>Rescatista!</span>
            </h1>
            <p className='w-600 text-black-50'>
              *Tu cuenta ha sido creada. Para continuar con el proceso de
              publicación de tus adoptables primero requerimos algunos datos
              tuyos como rescatista.
            </p>

            <div className='row d-flex'>
              <article className='col-5'>
                {inputs.map((input, i) => (
                  <div
                    className='form-group mb-3'
                    key={`input-${input.name}-${i}`}
                  >
                    <label for={input.name}>{input.label}</label>
                    <input
                      type={input.type}
                      className='form-control'
                      id={input.name}
                      placeholder={input.placeholder}
                    />
                  </div>
                ))}
              </article>

              <article className='col-4 d-flex flex-column justify-content-between'>
                <div className='form-group position-relative'>
                  <p>
                    Sube una foto tuya sosteniendo tu identificación oficial
                    vigente para corroborar tu identidad.
                  </p>
                  <input type='file' className='form-control' />
                  <Image
                    src={iconUser.src}
                    width={170}
                    height={170}
                    objectFit='contain'
                    alt='user-image'
                  />
                </div>
                <div className='form-check'>
                  <input
                    id='privacy'
                    type='checkbox'
                    className='form-check-input'
                  />
                  <label htmlFor='privacy' className='form-check-label'>
                    Acepto el aviso de privacidad y los términos y condiciones
                    de Yali
                  </label>
                </div>
                <div className='form-group'>
                  <button
                    className='bg-color-primary text-white w-100 btn'
                    id='btn_validation'
                  >
                    Solicitar validación
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
