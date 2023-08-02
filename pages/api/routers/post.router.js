import express, { Router } from 'express'
import { createPost, deletePostById, getPostDetail } from '../usecases/post.usecases'

const routerPost = express.Router()

router.post('/post', async (req, res)=>{

try {
    const newPost = request.body
    
    const postCreated = await createPost(newPost)
    response.json({
        success: true,
        data:{
            data: postCreated
        }
    })
} catch (error) {
    response.status(404)
    .json({
        success: false,
        message: 'Error at Create Post'
    })
    
}
})

router.delete('/:id', async (req, res)=>{

try {
    const { id } = request.params
    const deletedPost = await deletePostById(id)

    response.json({
        success:true,
        data:{
            data: deletedPost
        }
    })
} catch (error) {
    response.json({
        success: false,
        message: 'Error at Delete Post'
    })
    
}
})

router.get('/:id', async (req, res)=>{

    try {
        const { id } = request.params
        const postDetail = await getPostDetail(id)

        response.json({
            success: true,
            data:{
                data:postDetail
            }
        })
    } catch (error) {
        response.json({
            success: false,
            message: 'Error at Get Post Detail'
        })
        
    }
})

export default routerPost