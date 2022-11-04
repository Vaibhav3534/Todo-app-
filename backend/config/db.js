import mongoose from "mongoose"

const url = "mongodb+srv://vaibhav:todo@cluster0.egvqrqa.mongodb.net/?retryWrites=true&w=majority"
const connection = mongoose.connect(url)

export default connection