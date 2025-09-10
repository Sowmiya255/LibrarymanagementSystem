import express from "express";
import { BookCreate, BookDelete, BookId, BookIndex, BookName, BookUpdate } from "../controllers/books.controller.js";

const router = express.Router();

router.get("/",BookIndex);

router.post("/",BookCreate);

router.get("/",BookId);

router.get("/",BookName);

router.put("/:id",BookUpdate);

router.delete("/:id",BookDelete);

export default router;