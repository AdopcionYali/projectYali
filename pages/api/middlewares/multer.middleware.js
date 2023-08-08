import multer from "multer"
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'

const { S3_ACCESS_KEY, S3_SECRET_ACCESS_KEY, S3_BUCKET_REGION } = process.env

const s3 = new aws.S3({
  accessKeyId: S3_ACCESS_KEY,
secretAccessKey: S3_SECRET_ACCESS_KEY,
region: S3_BUCKET_REGION
})

function uploadPetImages() {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, {
            storage: multerS3({
              s3,
              bucket: 'pet-profile-images'
            })
          } )
        },
        key: (req, file, cb) => {
            let extension = file.originalname.slice(file.originalname.lastIndexOf('.'))
          cb(null, Date.now() + extension)
        }
    })
    const upload = multer({storage: storage}).array('pet-images')

    return upload
}

export default uploadPetImages
