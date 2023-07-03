import express from 'express'
// Can use bracket notation because not default export
import {getPosts, createPost, updatePost} from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
// Used for updating existing documents
router.patch('/:id', updatePost)

export default router