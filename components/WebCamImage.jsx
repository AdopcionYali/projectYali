import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styles from '@/styles/AdopterProfile.module.scss'

function WebcamImage({ register }) {


  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: 'user',
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    
    
  }, [webcamRef]);

  return (
    <div className='Container'>
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={false}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            videoConstraints={videoConstraints}
          />
          <button onClick={capture} className={`btn btn-secondary ${styles.btnSecondary}`}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img}  alt='screenshot' name='documents3'type='image' {...register('documents3')} />
          <button onClick={() => setImg(null)} className={`btn ms-1 btn-secondary ${styles.btnSecondary}`}>Retake</button>
        </>
      )}
    </div>
  );
}

export default WebcamImage;