import { Post } from "../models/post.model.js"

const createPost = (data) => {
    return Post.create(data)
}

const getPostDetail = (id) => {
    return Post.findById(id)
}

export {
    createPost,
    getPostDetail,
}