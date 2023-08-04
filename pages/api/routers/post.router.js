import express from 'express'
import { createPost, getPostDetail } from '../usecases/post.usecases.js'
import multer from 'multer'
import path from 'path'

const routerPost = express.Router()


// multer middleware

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname, './images/'))
  },
  filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now() + file.originalname.match(/\..*$/)[0])
  }
});
const multi_upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          const err = new Error('Only .png, .jpg and .jpeg format allowed!')
          err.name = 'ExtensionError'
          return cb(err);
      }
  },
}).array('uploadedImages', 5)

routerPost.post('/', (req, res)=>{

try {
    const newPost = req.body
    
    const postCreated = createPost(newPost)
    res.json({
        success: true,
        data:{
            data: postCreated
        }
    })
} catch (error) {
    res.status(404)
    .json({
        success: false,
        message: 'Error at Create Post'
    })
    
}
})

routerPost.get('/:id', async (req, res)=>{

    try {
        const { id } = req.params
        const postDetail = await getPostDetail(id)

        res.json({
            success: true,
            data:{
                data:postDetail
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Error at Get Post Detail'
        })
        
    }
})



export default routerPost