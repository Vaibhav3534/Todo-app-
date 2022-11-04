import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title:String,
    todoId: [mongoose.Types.ObjectId]
},{
    versionKey:false,
})

const todoModel = mongoose.model("todo", todoSchema)

export default todoModel