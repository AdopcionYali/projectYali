import multer from "multer"

function uploadPetImages(){
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, '/home/antnio/kodeawards/projectYali/public/uploads' )
        },
        filename: (req, file, cb) => {
            let extension = file.originalname.slice(file.originalname.lastIndexOf('.'))
          cb(null, Date.now() + extension)
        }
    })
    const upload = multer({storage: storage}).array('petImages')

    return upload
}

export default uploadPetImages
