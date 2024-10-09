"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetAllTodos = exports.handleAddNewTodo = void 0;
const todoSerice_1 = __importDefault(require("../services/todoSerice"));
const handleAddNewTodo = async (req, res) => {
    try {
        const result = await todoSerice_1.default.addNewTodo(req.body);
        res.status(200).json(req.body);
    }
    catch (error) {
        console.log(error);
    }
};
exports.handleAddNewTodo = handleAddNewTodo;
const handleGetAllTodos = async (req, res) => {
    try {
        const result = await todoSerice_1.default.getAll();
        res.status(200).json("handleGetAllTodos");
    }
    catch (error) {
        console.log(error);
    }
};
exports.handleGetAllTodos = handleGetAllTodos;
