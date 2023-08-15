import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/DashRescatist.module.scss";

export default function Post() {
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
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mb-3">Nombre de la mascota</h4>
              <input
                type="text"
                className={`form-control ${styles.smallInput}`}
                placeholder="Nombre de la mascota"
              />

              <h4>Especie</h4>
              <div className="mt-3">
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option1"
                    />
                    <label className="form-check-label" htmlFor="option1">
                      Perro
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option2"
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
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option1"
                    />
                    <label className="form-check-label" htmlFor="option1">
                      Macho
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option2"
                    />
                    <label className="form-check-label" htmlFor="option2">
                      Hembra
                    </label>
                  </div>
                </div>
              </div>

              <h4>Rango de edad</h4>
              <select className="form-control mt-3">
                <option>Menos de 6 meses</option>
                <option>De 6 a 12 meses</option>
                <option>De 1 a 3 años</option>
                <option>De 3 a 6 años</option>
                <option>Más de 6 años</option>
              </select>

              <h4>Nivel de actividad</h4>
              <select className="form-control mt-3">
                <option>Menos de 6 meses</option>
                <option>De 6 a 12 meses</option>
                <option>De 1 a 3 años</option>
                <option>De 3 a 6 años</option>
                <option>Más de 6 años</option>
              </select>

              <h4>Vacunas</h4>
              <select className="form-control mt-3">
                <option>Menos de 6 meses</option>
                <option>De 6 a 12 meses</option>
                <option>De 1 a 3 años</option>
                <option>De 3 a 6 años</option>
                <option>Más de 6 años</option>
              </select>
            </div>

            <div className="col-lg-6">
              <h4>Historia</h4>
              <textarea
                className={`form-control ${styles.customTextarea}`}
                placeholder="Escribe tu publicación"
              ></textarea>

              <h4>¿La mascota esta esterilizada?</h4>
              <div className="mt-3">
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option1"
                    />
                    <label className="form-check-label" htmlFor="option1">
                      Si
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option2"
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
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option1"
                    />
                    <label className="form-check-label" htmlFor="option1">
                      Si
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option2"
                    />
                    <label className="form-check-label" htmlFor="option2">
                      No
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option3"
                    />
                    <label className="form-check-label" htmlFor="option3">
                      No aplica
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <label>Cargar archivo:</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
            </div>

            <div className="col-12 mt-3">
              <button className={`btn btn-primary ${styles.customButton} w-100`}>Publicar</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
