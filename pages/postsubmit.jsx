export default function Post() {
    return (
        <>
            <section className='vh-100 vw-100 px-lg-5 d-flex align-items-center justify-content-center'>
                <article className='d-flex flex-col'>
                            <div className='col-10'>
                                Aqui va la solicitud a llenar
                              
                              <form method='POST' action='/upload' enctype='multipart/form-data'>
                                Aqui se sube la imagen
                                <input type='file' name='pet-images' />
                                <input type='submit'/>
                              </form>
                            </div>
                </article>
            </section>
        </>
    );
}
 