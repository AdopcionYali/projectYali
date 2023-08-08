import multer from "multer";
import aws from "aws-sdk";
import multerS3 from "multer-s3";

const { S3_ACCESS_KEY, S3_SECRET_ACCESS_KEY, S3_BUCKET_REGION } = process.env;

aws.config.update({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  region: S3_BUCKET_REGION,
})

const s3 = new aws.S3();

const upload = (bucketName) =>
 multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: (req, file, cb) => {
        let extension = file.originalname.slice(
          file.originalname.lastIndexOf(".")
        );
        cb(null, Date.now() + extension);
      },
    }),
  });


export default upload;
