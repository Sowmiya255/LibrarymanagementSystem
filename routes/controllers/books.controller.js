export const BookIndex = (req,res) =>{
    res.send("books list");
};
export const BookCreate = (req,res) => {
    res.send("books list where added")
};

export const BookUpdate = (req,res) =>{
    res.send("books were updated");

};
export const BookDelete = (req,res)=>{
    res.send("books deleted");

};