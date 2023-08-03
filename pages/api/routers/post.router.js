import express from 'express';
import { createPost, getPostDetail, getPosts } from '../usecases/post.usecases.js';

const routerPost = express.Router();

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
            data: {
                data: allPosts
            }
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

export default routerPost;
