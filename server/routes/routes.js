import express from "express";
import { uploadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
import { getImage } from "../controller/image-controller.js";

const router = express.Router();

router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',getImage);

export default router;

