import express from 'express'
import { uploadMultiple, uploadSingleFile } from '../controllers/file.controller.js'
// import { upload, uploads } from '../middleware/multer.js'

const fileRoute = express.Router()

fileRoute.post('/upload', uploadSingleFile)
fileRoute.post('/uploads', uploadMultiple)

export default fileRoute
