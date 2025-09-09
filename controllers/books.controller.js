import Book from"../models/book.model.js";

export const BookIndex = (req,res) => {
    res.send("books list");
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



export const BookUpdate =(req,res) => {
     res.send("book list updated");
};



export const BookDelete = (req,res) => {
     res.send("book were deleted");
};