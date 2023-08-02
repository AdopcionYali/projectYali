import express from 'express'
import { createPost, getPostDetail } from '../usecases/post.usecases'

const routerPost = express.Router()

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