import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styles from '@/styles/AdopterProfile.module.scss'


function WebcamImage({ setValue, setImg, img }) {


 
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: 'user',
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    setValue('photoIdUrl', imageSrc)


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
            className={` ${styles.webCam} `}
          />
          <button onClick={capture} type='button' className={`btn btn-secondary ${styles.btnSecondary}`}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img} alt='screenshot'  type='image'   className={` ${styles.webCam} `} />
          <button onClick={() => setImg(null)} type='button' className={`btn ms-1 mt-1 btn-secondary ${styles.btnSecondary}`}>Retake</button>
        </>
      )}
    </div>
  );
}

export default WebcamImage;