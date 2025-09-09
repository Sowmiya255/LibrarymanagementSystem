import { model, Schema } from "mongoose";

const schema = new Schema({
    Bookid: String,
    Bookname: String,
    Author: String,
    Publishedyear:String,
    Domain:String,
    Pages:String
});

const Book = model("Book",schema);

export default Book;