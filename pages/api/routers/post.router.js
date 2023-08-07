import express from 'express';
import { createPost, deletePost, getPostDetail, getPosts, updatePost } from '../usecases/post.usecases.js';
import uploadPetImages from '../middlewares/multer.middleware.js';

const routerPost = express.Router();

routerPost.post('/petImages', uploadPetImages(), (req, res) => {
  console.log(req.files)
  res.send('ok')
})

routerPost.post('/', async (req, res) => {
  try {
    const {
      petName,
      petSpecies,
      petSex,
      petAge,
      actLevel,
      vacc,
      background,
      isNeutered,
      felvPositive,
      petLocation,
    } = req.body;
    const postCreated = await createPost(req.body);
    res.json({
      success: true,
      data: {
        data: postCreated,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

routerPost.get('/', async (req, res) =>{
    try {
        const allPosts = await getPosts()
        res.json({
            success: true,
            data: allPosts
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
        
    }
})

routerPost.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const postDetail = await getPostDetail(id);
    res.json({
      success: true,
      data: {
        data: postDetail,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

routerPost.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const newData = req.body
        const modifiedPost = updatePost(id, newData)
        res.json({
            success: true,
            message: 'post updated successfully!',
            data: modifiedPost
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
        
    }
})

routerPost.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedPost = deletePost(id)
        res.json({
            success: true,
            message: 'post deleted successfully!',
            data: deletedPost
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })        
    }
})

export default routerPost;
