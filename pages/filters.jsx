import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";

export default function Filters() {
  return (
    <main className='vh-100 vw-100 px-lg-5 d-flex align-items-center justify-content-center'>
      <Navbar />

      <aside>
        <form className='col-12 col-md-4 bg-color-secondary d-flex flex-column justify-content-between px-4 py-3 rounded-4 shadow'>
          <h3 className='text-center fs-4 mb-3 w-700'>BUSCO:</h3>

          <div className='form-check form-check-inline'>
            <label className='form-check-label' for='petDog'>
              Perro
            </label>
            <input className='form-check-input' type='radio' id='petDog' />
            <label className='form-check-label' for='petCat'>
              Gato
            </label>
            <input className='form-check-input' type='radio' id='petCat' />
          </div>

          <div className='form-check form-check-inline'>
            <label className='form-check-label' for='male'>
              Macho
            </label>
            <input className='form-check-input' type='radio' id='male' />
            <label className='form-check-label' for='female'>
              Hembra
            </label>
            <input className='form-check-input' type='radio' id='female' />
          </div>

          <div class='container-fluid'>
            <h4 className='fs-4 mb-3 w-400'>Estado</h4>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              ></button>
              <ul class='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Estado de Mexico
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Aguascalientes
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    CDMX
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='container-fluid'>
            <h4 className='fs-4 mb-3 w-400'>Rango de Edad</h4>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              ></button>
              <ul class='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Cachorro (1 mes - 1 año)
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Joven (1 año, 1 mes - 3 años)
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Adulto (3 años, 1 mes - 7 años)
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Senior (más de 7 años)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='container-fluid'>
            <h4 className='fs-4 mb-3 w-400'>Tamaño</h4>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              ></button>
              <ul class='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Pequeño
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Mediano
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Grande
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Gigante
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='container-fluid'>
            <h4 className='fs-4 mb-3 w-400'>Energía</h4>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              ></button>
              <ul class='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Baja
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Media
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Alta
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='container-fluid'>
            <h4 className='fs-4 mb-3 w-400'>Personalidad</h4>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              ></button>
              <ul class='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Tímido
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Tranquilo
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Apegado
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Relajado
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Juguetón
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Energético
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Independiente
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='container-fluid'>
            <h4 className='fs-4 mb-3 w-400'>Cartilla de vacunación</h4>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              ></button>
              <ul class='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Sin vacunas
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Sólo desparasitado
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Vacunas anuales completas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='container-fluid'>
            <h4 className='fs-4 mb-3 w-400'>Esterilización</h4>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              ></button>
              <ul class='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Sin esterilizar
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Esterilizado
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button
            type='button'
            className='btn border bg-color-primary w-100 text-white'
          >
            BUSCAR
          </button>
        </form>
      </aside>

      <section className='row gx-5'>
        <div className='col-12 col-md-4'><PetCard/></div>
        <div className='col-12 col-md-4'><PetCard/></div>
        <div className='col-12 col-md-4'><PetCard/></div>
      </section>

      <Footer />
    </main>
  );
}
