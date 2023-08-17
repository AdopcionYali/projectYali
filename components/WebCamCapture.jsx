import { useRef, useState } from 'react'
import Webcam from 'react-webcam'

const WebcamCapture = ({ onCapture, useCam, setUseCam, setFile }) => {
  const webcamRef = useRef(null)
  const [imageSrc, setImageSrc] = useState(null)

  const capture = () => {
    const src = webcamRef.current.getScreenshot()
    setImageSrc(src)
    onCapture(src)
    setFile(src)
  }

  return (
    <>
      {useCam && (
        <div className='d-flex flex-column vw-100 vh-100 z-3 bg-black-70 justify-content-center position-fixed align-items-center'>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            className='w-75 h-75'
          />
          <button
            onClick={() => {
              capture()
              setUseCam(false)
            }}
            className='btn btn-secondary mt-3'
          >
            Tomar Foto
          </button>
        </div>
      )}
    </>
  )
}

export default WebcamCapture
