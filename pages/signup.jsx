import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { postRequest, postVerifyCode, postSignUp } from "./api/libs/twilioReqs";
import styles from "@/styles/Signup.module.scss";

import logo from "@/public/logo.svg";
import dogFinger from "@/public/icon-dog-fingerprint.svg";

export default function Signup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState(null);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch
  } = useForm();

  const onSubmit = (data) => {
    postRequest({ phoneNumber: `+52${data.phoneNumber}` });
    setFormData(data);
  };

  const handleOnClick = () => {
    isValid && setIsVisible(true);
  };

  return (
    <section className="vh-100 vw-100 px-lg-5 d-flex align-items-center justify-content-center">
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        formData={formData}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-10 col-md-6 col-lg-4 bg-white d-flex flex-column justify-content-between px-4 py-3 rounded-4 shadow"
      >
        <Image
          src={logo}
          width={70}
          height={'auto'}
          alt="logo"
          className="align-self-center mb-3"
        />
        <h3 className="text-center fs-4 mb-3 w-700">Crea una cuenta</h3>

        <div className="form-group mb-3">
          <label htmlFor="phoneNumber">Número de teléfono</label>
          <input
            type="number"
            className={`form-control mt-2 ${styles.input__arrows}`}
            id="phoneNumber"
            placeholder="El número debe ser de 10 digitos"
            {...register("phoneNumber", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
          {errors.phoneNumber?.type === "required" && (
            <small className="text-warning">Campo obligatorio</small>
          )}
          {errors.phoneNumber?.type === "minLength" && (
            <small className="text-warning">
              El número debe ser de 10 dígitos
            </small>
          )}
          {errors.phoneNumber?.type === "maxLength" && (
            <small className="text-warning">
              El número debe ser de 10 dígitos
            </small>
          )}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control mt-2"
            id="password"
            placeholder="Contraseña de minimo 6 caracteres"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password?.type === "required" && (
            <small className="text-warning">Campo requerido</small>
          )}
          {errors.password?.type === "minLength" && (
            <small className="text-warning">
              La contraseña debe ser de mínimo 6 carácteres
            </small>
          )}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirma tu contraseña</label>
          <input
            type="password"
            className="form-control mt-2"
            id="confirmPassword"
            placeholder="Tu contraseña debe coincidir"
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "match";
                }
                return true;
              }
            })}
          />
          {errors.confirmPassword?.message === "match" && (
            <small className="text-warning">Las contraseñas no coinciden</small>
          )}
        </div>

        <button
          type="submit"
          className={`btn border bg-color-primary w-100 text-white ${styles.btn_nothover}`}
          onClick={isValid ? handleOnClick : handleSubmit}
        >
          Continuar
        </button>
      </form>
    </section>
  );
}

// MODAL
function Modal({ isVisible, setIsVisible, formData }) {
  const [code, setCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  const { push } = useRouter();

  const validateCode = async () => {
    try {
      const response = await postVerifyCode({
        phoneNumber: `+52${formData.phoneNumber}`,
        code,
      });

      if (response.success) {
        setIsValidCode(true);
        const { phoneNumber, password } = formData
        await postSignUp({ 
          phoneNumber: `+52${phoneNumber}`,
          password
        })
        push("/dashboard");
      }

    } catch (error) {
      setIsValidCode(false);
    }
  };

  useEffect(() => {
    if (code.length === 6) {
      validateCode();
    } else {
      setIsValidCode(false);
    }
  }, [code]);

  const codeFormater = (code) => code.replace(/[^\d]/g, '').slice(0,6)

  const handleOnChange = (e) => {
    let value = codeFormater(e.target.value)
    setCode(value)
  }

  return (
    <div
      className={`modal bg-black-70 d-flex align-items-center justify-content-center ${isVisible ? "d-block" : "d-none"} ${
        styles.modal
      }`}
    >
      <div className="modal-dialog">
        <div className="modal-content bg-white-2">
          <div className="modal-header bg-color-primary py-0 text-white">
          <Image src={dogFinger} width={'auto'} height={22} alt="logo" />
            <h5 className="modal-title ms-2 me-4">Valida el código que llegó a tu teléfono</h5>
            <button
              type="button"
              className="btn p-0"
              onClick={() => {
                setIsVisible(false);
                setIsValidCode(false);
                setCode('');
              }}
            >
              <i className="bi bi-x fs-2 text-white"></i>
            </button>
          </div>
          <div className="modal-body bg--white-1">
            <div className="d-flex justify-content-between align-items-center">
              
              <input
                type="text"
                className='text-center fs-4 form-control'
                name="code"
                onChange={handleOnChange}
                value={ codeFormater(code) }
              />

              {isValidCode ? (
                <i
                  className="bi bi-check-circle fs-2 ms-3"
                  style={{ color: "orange" }}
                ></i>
              ) : (
                <i className="bi bi-x-circle fs-2 ms-3"></i>
              )}
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center pt-0">
            <button
              type="button"
              className="btn bg-color-primary text-white w-500"
              onClick={() => {
                setIsVisible(false);
                setIsValidCode(false);
                setCode('');
              }}
            >
              Cerrar
              <Image src={dogFinger} width={'auto'} height={22} alt="logo" className='ms-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
