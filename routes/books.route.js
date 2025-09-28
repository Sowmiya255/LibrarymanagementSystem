import express from "express";
import { BookCreate, BookDelete, BookId, BookIndex, BookName, BookUpdate, fetchdata, login } from "../controllers/books.controller.js";
import auth from  "../middleware/auth.js";

const router = express.Router();

router.get("/",BookIndex);

router.post("/",auth,BookCreate);

router.get("/",BookId);

router.get("/",BookName);

router.put("/:id",auth,BookUpdate);

router.delete("/:id",auth,BookDelete);

router.get("/:fetch",fetchdata);

router.post("/:login",auth,login);

export default router;