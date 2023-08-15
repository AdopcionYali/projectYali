import Image from 'next/image';
import React from 'react'



export default function Post() {

    const [image, setImage] = React.useState(null);

    // Read file as Data URL
    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
        }
    };

    const onUpload = async () => {
        if (!image)
          return setStateContext(
            true,
            "Please select an image!",
            "warning"
          );
    }

    return (
        <>
            <section className='vh-100 vw-100 px-lg-5 d-flex align-items-center justify-content-center'>
                <article className='d-flex flex-col'>
                    <div className='col-10'>
                        Aqui va la solicitud a llenar

                        <form method='POST' action='/postsubmit' encType='multipart/form-data'>
                            Aqui se sube la imagen
                            <input type='file' name='pet-images' image={image} onChange={onSelectFile}/>
                            <input type='submit' onClick={onUpload}/>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
}
