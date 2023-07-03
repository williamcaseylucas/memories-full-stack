import PostMessage from '../models/postMessage.js'
import mongoose, { mongo } from 'mongoose'

export const getPosts = async (req, res) => {
    try {
        // Since this takes time, it needs to be async
        const postMessage = await PostMessage.find()
        // Good status for GET and returning it in JSON format
        res.status(200).json(postMessage)
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = PostMessage(post)
    try {
        await newPost.save()
        // 201 is successful post creation 
        res.status(201).json(newPost)
    } catch (e) {
        // Bad error code for POST 
        res.status(409).json({message: e.message})
    }
}

// The route will be http://localhost:5000/123
export const updatePost = async (req, res) => {
    // Rename id to _id
    const {id:_id} = req.params
    const post = req.body
    
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    // Otherwise, we know the ID exists
    // Pass in id, the post we want to replace with, and then the object saying new true
    // Include the post and the id in the post
    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true})
    res.json(updatePost)
}