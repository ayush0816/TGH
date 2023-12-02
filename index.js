const express = require("express")
const db = require("./db")
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.use(express.json())
app.use("/auth" , require("./controllers/auth"));
app.use("/api" , require("./controllers/addStudent"));
app.use("/api" , require("./controllers/task"));


app.listen(port, ()=>{
    console.log("App is running at port :" , port);
})