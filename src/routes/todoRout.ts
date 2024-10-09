import { Request, Response } from "express";
import newTodoTDO from "../types/DTO/newTodoTDO";
import todoService from "../services/todoSerice";

export const handleAddNewTodo = async (
    req:Request<any,any,newTodoTDO>,
    res :Response
): Promise<void> => {
    try {
        const result =  await todoService.addNewTodo(req.body);
        res.status(200).json(req.body)
    } catch (error) {
        console.log(error);
    }
};
export const handleGetAllTodos = async (
    req:Request,
    res :Response
): Promise<void> => {
    try {
        const result =  await todoService.getAll();
        res.status(200).json("handleGetAllTodos")
    } catch (error) {
        console.log(error);
    }
};


