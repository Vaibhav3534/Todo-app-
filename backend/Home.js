import express from "express";
import todoModel from "./model/todoModel.js";


const home = express.Router();

home.post("/addTodo", async(req,res)=>{
    const {title} = req.body
    await todoModel.create({
        title: title
    })
    res.send()
})

home.get("/getTodo", async(req, res)=>{
    const result = await todoModel.find()
    res.send(result)
})

home.delete("/delete/:id", async(req,res)=>{
    const {id} = req.params.id;
    const todo = await todoModel.findByIdAndDelete(id);
    return res.send({
        title: title
    })
})


home.put("/update/:id", async(req,res)=>{
    const {id} = req.params.id;
    const todoInfo = req.body;
    const todo = await todoModel.findByIdAndUpdate(id, todoInfo);
    return res.send({
        message: "Updated Successfully",
    })
})

export default home;
