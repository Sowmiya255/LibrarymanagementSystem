export const BookIndex = (req,res) =>{
    res.send("books list");
};
export const BookCreate =(req,res) => {
     res.send("book list added");
};

export const BookUpdate =(req,res) => {
     res.send("book list updated");
};

export const BookDelete = (req,res) => {
     res.send("book were deleted");
};