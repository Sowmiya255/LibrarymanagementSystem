import mongoose from"mongoose";
const connectDB =async () => {
    try{
        await mongoose.connect("mongodb+srv://Sowmiya:ZpTqnhId0QrkN9YE@cluster0.wyd5efx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log("MongoDB connected successfully......")
} catch(error){
    console.error(error.message);
    process.exit(1);
}
};
export default connectDB;