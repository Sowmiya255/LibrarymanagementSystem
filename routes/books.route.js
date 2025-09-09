import express from "express";


import{
     BookCreate, BookDelete, BookIndex, BookUpdate } 
from "./controllers/books.controller.";
const router = express.Router();

router.get("/", BookIndex);

router.post("/",BookCreate);

router.put("/:id",BookUpdate);

router.delete("/:id",BookDelete);

export default router;