import { Router } from "express";
import { handleAddNewTodo,handleGetAllTodos } from "../routes/todoRout";

const router : Router = Router();

router.post("/add",handleAddNewTodo );

router.get('/',handleGetAllTodos)

router.get('./:id',()=>{})

router.post('./',()=>{})

router.patch('./:id',()=>{})

router.delete('./:id',()=>{})




export default router