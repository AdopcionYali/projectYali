export default function Post() {
    return (
        <>
            <section className='vh-100 vw-100 px-lg-5 d-flex align-items-center justify-content-center'>
                <article className='d-flex flex-row'>
                    <div className='col'>
                        <div>
                            <div className='col-2'>
                                Aqui va el dashboard del Rescatista
                            </div>
                            <div className='col-10'>
                                Aqui la solicitud a llenar
                                <label for='file'>Select your image:</label>
                                <input type='file' accept='image/*' name='uploadedImages' multiple />
                                <span class='hint'>Supported files: jpg, jpeg, png.</span>
                                <input type="submit" value="uploading_img"></input>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
