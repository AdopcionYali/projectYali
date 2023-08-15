import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/contexts/auth.context'
import { saveProfile } from '@/services/rescatist.services'
import Navbar from '@/components/Navbar'
import styles from '@/styles/DashRescatist.module.scss'
import dogFingerprint from '@/public/icon-dog-fingerprint.svg'
import dogs from '@/public/dogs-dashboard-rescatist.png'
import iconUser from '@/public/icon-user.svg'
import WebcamCapture from '@/components/WebCamCapture'
import { useRouter } from 'next/router'

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
    placeholder: 'Introduce tu correo electrónico',
    rules: {
      pattern:
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    },
    errorMessage: 'Correo no válido',
  },
  {
    label: 'Código postal',
    name: 'zipcode',
    type: 'number',
    placeholder: 'Introduce tu código postal',
    rules: { minLength: 5, maxLength: 5 },
    errorMessage: 'Deben ser 5 digitos',
  },
  {
    label: 'Estado',
    name: 'state',
    type: 'text',
    placeholder: 'De acuerdo a Código Postal',
    disabled: true,
  },
  {
    label: 'Municipio',
    name: 'city',
    type: 'text',
    placeholder: 'De acuerdo a Código Postal',
    disabled: true,
  },
]

export default function Rescatist() {
  const [previewImg, setPreviewImg] = useState('')
  const [file, setFile] = useState(null)
  const [zipcode, setZipcode] = useState('')
  const [useCam, setUseCam] = useState(false)
  const router = useRouter()
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm()

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
      let { estado, municipio } = response[0]
  
      setValue('state', estado.nombre) 
      setValue('city', municipio.nombre)
    }
    zipcode?.length === 5 && getCitys()
  }, [zipcode])

  const onSubmit = async () => { 
    setValue('photoIdUrl', file)
    await saveProfile(
      getValues(),
      user._id,
      localStorage.getItem('token'),
    )
    router.reload()
  }

  return (
    <>
      {useCam && (
        <WebcamCapture
          onCapture={setPreviewImg}
          useCam={useCam}
          setUseCam={setUseCam}
          setFile={setFile}
        />
      )}
      <Navbar />
      <main
        className={`vw-100 my-lg-4 d-flex flex-column flex-lg-row justify-content-evenly ${styles.main}`}
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
            <button
              disabled={!user?.isVerified}
              style={!user?.isVerified && { cursor: 'not-allowed' }}
              className='ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2'
            >
              Publicar
            </button>
            <button
              disabled={!user?.isVerified}
              style={!user?.isVerified && { cursor: 'not-allowed' }}
              className='ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2'
            >
              Solicitudes
            </button>
            <button
              disabled={!user?.isVerified}
              style={!user?.isVerified && { cursor: 'not-allowed' }}
              className='ms-0 text-center text-lg-start ms-lg-1 my-lg-2 ps-lg-2 py-1 rounded-2'
            >
              Mascotas
            </button>
          </div>
        </aside>

        <section className='bg-white-1 col-lg-8 rounded-4 mx-3 mx-lg-0 px-4 px-lg-5 py-3 shadow'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            onChange={() => setZipcode(getValues().zipcode)}
          >
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
                {inputs.map(
                  (
                    {
                      name,
                      type,
                      label,
                      placeholder,
                      disabled,
                      rules,
                      errorMessage,
                    },
                    i,
                  ) => (
                    <div className='form-group mt-3' key={`input-${name}-${i}`}>
                      <label
                        className='fw-normal fs-5 mb-2 mb-lg-auto'
                        htmlFor={name}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        className='form-control'
                        id={name}
                        placeholder={placeholder}
                        disabled={disabled || user?.documents[0]?.profileInfo }
                        value={ user?.documents[0]?.profileInfo[name] }
                        {...register(name, { required: true, ...rules })}
                      />
                      {errors[name] && (
                        <small className='text-warning'> {errorMessage} </small>
                      )}
                    </div>
                  ),
                )}
              </article>

              <article className='col-12 col-lg-5 col-xl-4 d-flex flex-column justify-content-between'>
                <p className='mt-4 mt-lg-auto'>
                  Sube una foto tuya sosteniendo tu identificación oficial
                  vigente para corroborar tu identidad.
                </p>
                <div
                  className={`${styles.input_file_container} rounded-2 mb-2 d-flex align-items-center justify-content-center`}
                >
                  <label htmlFor='photoIdUrl'>Seleccionar archivo</label>
                  <i className='bi bi-plus-circle ms-2' />
                  <input
                    id='photoIdUrl'
                    type='file'
                    className='form-control'
                    disabled={ user?.documents[0]?.profileInfo }
                    {...register('photoIdUrl', { required: true })}
                    onChange={(e) => {
                      setPreviewImg(URL.createObjectURL(e.target.files[0]))
                      let reader = new FileReader()
                      reader.onload = () => {
                        let base64String = reader.result
                        setFile(base64String)
                      }
                      reader.readAsDataURL(e.target.files[0])
                    }}
                  />
                </div>
                <button
                  className={`${styles.input_file_container} rounded-2 mb-2 d-flex align-items-center justify-content-center`}
                  type='button'
                  onClick={() => setUseCam(true)}
                  disabled={ user?.documents[0]?.profileInfo }
                >
                  Tomar foto
                  <i className='bi bi-camera ms-2' />
                </button>
                <div className={`${styles.logo_user_container} p-2 rounded-4`}>
                  <img
                    src={ user?.documents[0]?.profileInfo.photoIdUrl || previewImg || iconUser.src}
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
                    disabled={ user?.documents[0]?.profileInfo }
                    value={ user?.documents[0]?.profileInfo.privacy }
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
                    style={user?.documents && { cursor: 'not-allowed' }}
                    disabled={ user?.documents[0]?.profileInfo }
                  >
                    {user?.documents
                      ? 'Tu solicitud será revisada'
                      : 'Solicitar verificación'}
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
        <aside className='d-none d-lg-block col-lg-1 position-relative z-n2'>
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
