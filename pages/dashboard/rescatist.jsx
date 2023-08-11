import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Navbar from '@/components/Navbar'
import styles from '@/styles/DashRescatist.module.scss'
import dogFingerprint from '@/public/icon-dog-fingerprint.svg'
import dogs from '@/public/dogs-dashboard-rescatist.png'
import iconUser from '@/public/icon-user.svg'
import { useAuth } from '@/contexts/auth.context'

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
    active: true
  },
  {
    label: 'Estado',
    name: 'phone',
    type: 'text',
    placeholder: 'Introduce tu estado',
    active: true
  },
  {
    label: 'Correo electrónico',
    name: 'email',
    type: 'email',
    placeholder: 'Introduce tu código postal',
  },
]

export default function Rescatist() {

  const { user } = useAuth()
  
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm()

  const onSubmit = () => {
    console.log('ENVIADO');
    console.log(getValues());
  }

  return (
    <>
      <Navbar />
      <main
        className={`vw-100 mt-4 d-flex justify-content-evenly ${styles.main}`}
      >
        <aside className={`${styles.lateral_menu} bg-color-secondary col-lg-2 text-white rounded-4 px-5 py-5`}>
          <h4 className='w-700 mb-5'>
            <i className='bi bi-pencil-square me-2'></i>
            Mi perfil
          </h4>
          <p className='fs-5'>
            <i className='bi bi-people me-2'></i>
            Menú
          </p>
          <div className='d-flex flex-column ms-2'>
            <button className='ms-1 my-2 ps-2 py-1 rounded-2'>Publicar</button>
            <button className='ms-1 my-2 ps-2 py-1 rounded-2'>Solicitudes</button>
            <button className='ms-1 my-2 ps-2 py-1 rounded-2'>Mascotas</button>
          </div>
        </aside>

        <section className='bg-white-1 col-lg-8 rounded-4 px-5 py-3 shadow'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='w-500'>
              Hola <span className='w-700 color-primary'>Rescatista!</span>
            </h1>
            <p className='w-600 text-black-50'>
              *Tu cuenta ha sido creada. Para continuar con el proceso de
              publicación de tus adoptables primero requerimos algunos datos
              tuyos como rescatista.
            </p>

            <div className='row d-flex'>
              <article className='col-5 d-flex flex-column'>
                {inputs.map(({ name, type, label, placeholder, active }, i) => (
                  <div
                    className='form-group mt-3'
                    key={`input-${name}-${i}`}
                  >
                    <label className='fw-normal' htmlFor={name}>
                      {label}
                    </label>
                    <input
                      type={type}
                      className='form-control'
                      id={name}
                      placeholder={placeholder}
                      disabled={active}
                      { ...register(name, { required: true }) }
                    />
                  </div>
                ))}
              </article>

              <article className='col-4 d-flex flex-column justify-content-between'>
                <div className='form-group'>
                  <p className='text-justify'>
                    Sube una foto tuya sosteniendo tu identificación oficial
                    vigente para corroborar tu identidad.
                  </p>
                  <input type='file' className='form-control my-2' { ...register('photoIdUrl', { required:true } ) } />
                  <div className={`${styles.logo_user_container} rounded-4 p-3`}>
                    <img
                      src={iconUser.src}
                      alt='user-image'
                    />
                  </div>
                </div>
                <div className='form-check'>
                  <input
                    id='privacy'
                    type='checkbox'
                    className='form-check-input'
                    { ...register('privacy', { required: true }) } 
                  />
                  <label htmlFor='privacy' className='form-check-label'>
                    Acepto el aviso de privacidad y los términos y condiciones
                    de Yali
                  </label>
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='bg-color-primary text-white w-100 rounded-2 py-2 px-2 btn_validation fw-bold border-0'
                    onClick={ (e) => console.log(isValid) }
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
