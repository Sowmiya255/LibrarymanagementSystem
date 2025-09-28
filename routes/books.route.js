import express from "express";
import { BookCreate, BookDelete, BookId, BookIndex, BookName, BookUpdate, fetchdata, login } from "../controllers/books.controller.js";

const router = express.Router();

router.get("/",BookIndex);

router.post("/",BookCreate);

router.get("/",BookId);

router.get("/",BookName);

router.put("/:id",BookUpdate);

router.delete("/:id",BookDelete);

router.get("/:fetchdata",fetchdata);

router.post("/:login",login);

export default router;