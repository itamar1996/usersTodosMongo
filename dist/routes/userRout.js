"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetAllUsers = exports.handleSignUp = void 0;
const userService_1 = __importDefault(require("../services/userService"));
const handleSignUp = async (req, res) => {
    try {
        const result = await userService_1.default.signup(req.body);
        res.status(200).json(req.body);
    }
    catch (error) {
        console.log(error);
    }
};
exports.handleSignUp = handleSignUp;
const handleGetAllUsers = async (req, res) => {
    try {
        const result = await userService_1.default.getAll();
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
    }
};
exports.handleGetAllUsers = handleGetAllUsers;
