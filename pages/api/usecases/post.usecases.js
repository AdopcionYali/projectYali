import { Post } from "../models/post.model.js"

const createPost = (data) => {
  return Post.create(data);
};

const getPostDetail = (id) => {
  return Post.findById(id);
};

const getPosts = async () => {
    return Post.find().populate({ path: 'post_id', select: 'name' })
}

const updatePost = async (id, data) => {
    return Post.findByIdAndUpdate(id, data)
}

const deletePost = async (id) => {
    return Post.findByIdAndRemove(id)
}
export { createPost, getPostDetail, getPosts, updatePost, deletePost };
