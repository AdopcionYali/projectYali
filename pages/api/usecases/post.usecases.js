import { Post } from "../models/post.model"

const createPost = (data) => {
    return Post.create(data)
}

const getPostDetail = (id) => {
    return Post.findById(id)
}

const deletePostById = (id) => {
    return Post.findByIdAndDelete(id)
}



export {
    createPost,
    getPostDetail,
    deletePostById,
}