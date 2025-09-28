import Book from"../models/book.model.js";
import jwt from "jsonwebtoken";
export const BookIndex = async (req,res) => {
    try{
        const books = await Book.find();
        res.json(books);  
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
export const BookCreate = async (req,res) => {
     
    
    console.log(req.body);

    const newBook = new Book({
     Bookid:req.body.Bookid,
    Bookname:req.body.Bookname,
    Author: req.body.Author,
    Publishedyear:req.body.Publishedyear,
    Domain:req.body.Domain,
    Pages:req.body.Pages

    });
try{
        const book = await newBook.save();
        return res.status(201).json(book);
}catch(error){
    return res.status(400).json({message: error.message});
}
};




export const BookId = async(req,res) => {
    try{
        const { id } = req.params;
        const searchBook = await Book.findById(id);
        if(!Book){
            return res.status(404).json({message:"Book not Found"});
        }
        res.json(searchBook);
    }catch(error){
        res.status(400).json({message :  error.message});
    }
};




export const BookName = async (req,res) =>{
    try{
        const {name} = req.query;
        const SearchBookName = await Book.find({BookName : new RegExp(name,"i")});
res.json(SearchBookName);

        }catch(error){
            res.status(400).json({message:"error.message"});
        }
    };



export const BookUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const BookDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const fetchdata = async(req,res) =>{
    try{
        const offset = parseInt(req.query.offset);
        const limit = parseInt(req.query.limit);

       const books = await Book.find().skip(offset).limit(limit);
       const data = await books.json();
      
     if(!books){
        return res.status(404).json({message:"limits not found"});
    }
     return data;
}
catch (error) {
        res.status(500).json({ message: error.message });
    }
};









export const login = async (req, res) => {
  try {
    const { author, id } = req.body;

   
    if (author !== "admin" || id !== "123") {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign(
      { id, author },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    return res
      .status(500).json({ message: "Server Error", error: error.message });
  }
};
