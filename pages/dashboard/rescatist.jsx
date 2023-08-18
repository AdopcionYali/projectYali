import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/contexts/auth.context'
import { saveProfile } from '@/services/rescatist.services'
import Navbar from '@/components/Navbar'
import styles from '@/styles/DashRescatist.module.scss'
import loader from '@/styles/Loader.module.scss'
import dogFingerprint from '@/public/icon-dog-fingerprint.svg'
import dogs from '@/public/dogs-dashboard-rescatist.png'
import iconUser from '@/public/icon-user.svg'
import WebcamCapture from '@/components/WebCamCapture'

const inputs = [
  {
    label: 'Nombre completo',
    name: 'name',
    type: 'text',
    placeholder: 'Escribe tu nombre completo',
    errorMessage: 'Campo obligatorio',
  },
  {
    label: 'Fecha de nacimiento',
    name: 'birthdate',
    type: 'date',
    placeholder: 'Introduce tu fecha de nacimiento',
    errorMessage: 'Dato obligatorio',
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
  const [isLoading, setIsLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [zipcode, setZipcode] = useState('')
  const [useCam, setUseCam] = useState(false)
  const { user, updateToken } = useAuth()
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
        `https://apis.forcsec.com/api/codigos-postales/20230815-f2e1af4e8b366cc9/${zipcode}`,
      )

      let response = await request.json()
      let { estado, municipio } = response.data

      setValue('state', estado)
      setValue('city', municipio)
    }
    zipcode?.length === 5 && getCitys()
  }, [zipcode])

  const onSubmit = async () => {
    setIsLoading(true)
    setValue('photoIdUrl', file)
    const data = await saveProfile(
      getValues(),
      user._id,
      localStorage.getItem('token'),
    )

    if (data.token) {
      setIsLoading(false)
      updateToken(data.token)
    } else {
      setIsLoading(false)
      alert('Ocurrió un error, intenta de nuevo por favor')
    }
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
            className='h-100'
          >
            <h1 className='w-400'>
              Hola <span className='w-700 color-primary'>Rescatista! </span>
            </h1>
            <p className='w-600 text-black-50'>
              *Tu cuenta ha sido creada. Para continuar con el proceso de
              publicación de tus adoptables primero requerimos algunos datos
              tuyos como rescatista.
            </p>

            <div className={`row d-flex ${styles.inputs_container}`}>
              <article className='col-12 col-lg-5 d-flex flex-column justify-content-between'>
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
                        disabled={disabled || user?.documents?.[0]?.profileInfo}
                        value={
                          user?.documents &&
                          user.documents[0]?.profileInfo &&
                          user.documents[0].profileInfo[name]
                        }
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
                <p className='mt-4 mt-lg-4'>
                  Sube una foto tuya sosteniendo tu identificación oficial
                  vigente para corroborar tu identidad.
                </p>
                <div
                  className={`${styles.input_file_container} rounded-2 mb-2 d-flex align-items-center justify-content-center`}
                >
                  <label
                    htmlFor='photoIdUrl'
                    className={`${
                      user?.isVerificationSent && 'text-black-50'
                    } fs-6 d-flex align-items-center`}
                  >
                    Seleccionar archivo
                    <i className='bi bi-plus-circle ms-2' />
                  </label>
                  <input
                    id='photoIdUrl'
                    type='file'
                    className='form-control'
                    disabled={user?.documents?.[0]?.profileInfo}
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
                  className={`${styles.input_file_container} rounded-2 mb-2 d-flex align-items-center justify-content-center w-700 fs-6`}
                  type='button'
                  onClick={() => setUseCam(true)}
                  disabled={user?.documents?.[0]?.profileInfo}
                >
                  Tomar foto
                  <i className='bi bi-camera ms-2' />
                </button>
                <div className={`${styles.logo_user_container} p-2 rounded-4`}>
                  {!file && !user?.documents?.[0]?.profileInfo.photoIdUrl && (
                    <small className='text-warning'>Imagen requerida</small>
                  )}
                  <img
                    src={
                      user?.documents?.[0]?.profileInfo.photoIdUrl ||
                      previewImg ||
                      iconUser.src
                    }
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
                    disabled={user?.documents?.[0]?.profileInfo}
                    value={user?.documents?.[0]?.profileInfo.privacy}
                  />
                  <label htmlFor='privacy' className='form-check-label'>
                    Acepto el aviso de privacidad y los términos y condiciones
                    de Yali
                  </label>
                  {errors?.privacy && (
                    <small className='text-warning d-block'>
                      Debes aceptar los términos y condiciones
                    </small>
                  )}
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='d-flex justify-content-center bg-color-primary text-white w-100 rounded-2 py-1 px-2 btn_validation fw-bold border-0'
                    style={user?.documents && { cursor: 'not-allowed' }}
                    disabled={user?.documents?.[0]?.profileInfo}
                  >
                    {user?.isVerificationSent
                      ? 'Solicitud en proceso'
                      : 'Solicitar verificación'}
                    {!isLoading ? (
                      <Image
                        src={dogFingerprint.src}
                        width={25}
                        alt='dog-finger'
                        height={25}
                        className='ms-2'
                      />
                    ) : (
                      <div className={`${loader.lds_ring} ms-2`}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    )}
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