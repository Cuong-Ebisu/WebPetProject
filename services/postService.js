import  Post  from "../models/post.js";

// Create Post
const createPost = async (data) => {
    try {
        console.log(data);
        let post = await Post.create(data);
        return {
            EC: 200,
            EM: "Post created successfully",
            DT: post
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};

// Delete Post
const deletePost = async (id, usePostID = false) => {
    try {
        let post;
        if (usePostID) {
            // Delete post by postID
            post = await Post.findOneAndDelete({ postID: id });
        } else {
            // Delete post by MongoDB _id
            post = await Post.findByIdAndDelete(id);
        }

        if (!post) {
            return {
                EC: 404,
                EM: "Post not found",
                DT: ""
            };
        }

        return {
            EC: 200,
            EM: "Post deleted successfully",
            DT: post
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};


// Update Post
const updatePost = async (id, data, usePostID = false) => {
    try {
        let post;
        if (usePostID) {
            // Update post by postID
            post = await Post.findOneAndUpdate({ postID: id }, data, { new: true });
        } else {
            // Update post by MongoDB _id
            post = await Post.findByIdAndUpdate(id, data, { new: true });
        }

        if (!post) {
            return {
                EC: 404,
                EM: "Post not found",
                DT: ""
            };
        }

        return {
            EC: 200,
            EM: "Post updated successfully",
            DT: post
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};


// Get Post (by id or all posts)
const getPost = async (id, usePostID = false) => {
    try {
        let post;
        if (usePostID) {
            // Find post by postID
            post = await Post.findOne({ postID: id });
        } else {
            // Find post by MongoDB _id
            post = await Post.findById(id);
        }

        if (!post) {
            return {
                EC: 404,
                EM: "Post not found",
                DT: ""
            };
        }

        return {
            EC: 200,
            EM: "Success",
            DT: post
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};


export { createPost, deletePost, updatePost, getPost };