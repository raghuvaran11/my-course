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

const TodoSchema = { 
    text: String,
    completed:Boolean
  }
 const Todo = mongoose.model("Todo",TodoSchema);

 app.get('/todos',async (req,res)=>{
  console.log("todo working")
    try {
        const todo= await todo.find();
        res.json(todo);
       
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
 });

// //  app.post('/todos', async(req,res)=>{
// //     const {text,completed}= req.body;
// //     try {
// //         const todo =new Todo ({text,completed});
// //         await todo.save();
// //         res.json(todo);
// //     } catch (error){
// //         console.log(error);
// //         res.status(500).json({error:'internal server error'});
// //     }
    
// //  });


// //  app.put('/todos/:id',async (req,res)=>{
// //     const { id }= req.params;
// //     const {text,completed}= req.body;
// //     try {
// //         const updatedTodo = await Todo.findByIdAndUpdate (id,{text,completed},{new:true});
// //         res.json(updatedTodo);
// //     } catch (error){
// //         console.log(error);
// //         res.status(500).json({error:'internal server error'});
// //     }
// //  });

// //  app.delete("todos/:id",async (req,res)=>{
// //     const {id} = req.param;
// //     try {
// //         await todo.findByIdAndDelete(id)
// //         res.json({success: true});
// //     } catch (error){
// //         console.log(error);
// //         res.status(500).json({error:'internal server error'});
// //     }
// //  })

//  app.listen(PORT,()=>{
//     console.log('sever is running on port ${PORT}')
//  });