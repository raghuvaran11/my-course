const express =require('express');
const mongoose = require('mongoose');
const bodyparser= require('body-parser');
const cors= require("cors");



const app=express();
const PORT=5000;

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://raghuvaranmanthena:raghuvaran1822@cluster0.up8sqis.mongodb.net/',{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {console.log('MongoDB Connected')})
.catch((err) =>{console.log(err)})

const userSchema = { 
    username: String,
    password: String
  }
 const User = mongoose.model("User",userSchema);

 
//  app.get('/signup',async (req,res)=>{
//     try {
//         const User= await User.find();
//         res.json(Users);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:'internal server error'});
//     }
//  });

 app.post('/signup', async(req,res)=>{
    const {username,password}= req.body;
    try {
        const newUser= new User({username,password});
        await newUser.save();
        res.json({massage:"user created secussfully"})
        // res.json(todo);
    } catch (error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
    
 });


//  app.put('/todos/:id',async (req,res)=>{
//     const { id }= req.params;
//     const {text,completed}= req.body;
//     try {
//         const updatedTodo = await Todo.findByIdAndUpdate (id,{text,completed},{new:true});
//         res.json(updatedTodo);
//     } catch (error){
//         console.log(error);
//         res.status(500).json({error:'internal server error'});
//     }
//  });

//  app.delete("todos/:id",async (req,res)=>{
//     const {id} = req.param;
//     try {
//         await todo.findByIdAndDelete(id)
//         res.json({success: true});
//     } catch (error){
//         console.log(error);
//         res.status(500).json({error:'internal server error'});
//     }
//  })


 
 app.listen(PORT,()=>{
    console.log('sever is running on port ${PORT}')
 });