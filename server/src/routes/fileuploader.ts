import express from "express";
import multer from "multer";
import Document from "../db/models/document";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.array("files"), async (req, res) => {
    let files = (req.files as Express.Multer.File[]).map((file: Express.Multer.File) => (
        {
            filename: file.originalname,
            type: file.mimetype,
            data: file.buffer
        }
    ))
    const docs = await Document.bulkCreate(files);
    res.status(200).json({
        ok: true,
        data: docs
    })

})

router.post("/single", upload.single("file"), async (req, res) => {
    let doc = await Document.create({ filename: (req.file as Express.Multer.File).originalname, type: (req.file as Express.Multer.File).mimetype, data: (req.file as Express.Multer.File).buffer })
    res.status(200).json({
        ok: true,
        data: doc
    })

})



export default router;

