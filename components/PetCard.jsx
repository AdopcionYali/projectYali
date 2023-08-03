const PetCard = () => {
  return (
    <div className='card' style='width: 18rem;'>
      <img src='...' className='card-img-top' alt=''></img>
      <div className='card-body'>
        <h5 className='card-title'></h5>
      </div>
      <div className='card-body'>
        <p className='card-text'>Sexo:</p>
        <p className='card-text'>Edad:</p>
        <p className='card-text'>Energía:</p>
      </div>
      <div className='d-grid gap-2 d-md-block'>
        <button
          className='btn border bg-color-secondary text-white'
          type='button'
        >
          Adoptar
        </button>
        <button className='btn border bg-color-tertiary' type='button'>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default PetCard;
