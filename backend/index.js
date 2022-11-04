import express from "express"
import connection from "./config/db.js"
import home from "./Home.js";
import cors from "cors"

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json)
app.use(cors())


app.use('/', home)

const port = 8080;

app.listen(port, async(req, res)=>{
    try{
        await connection;
        console.log("connected to database")
        console.log("http://localhost:8080")
    }
    catch(err){
        console.log(err.message)
    }
})


