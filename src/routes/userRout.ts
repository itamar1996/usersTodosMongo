import { Request, Response } from "express";
import registerDTO from "../types/DTO/registerDTO";
import UserService from "../services/userService";

export const handleSignUp = async (
    req:Request<any,any,registerDTO>,
    res :Response
): Promise<void> => {
    try {
        const result =  await UserService.signup(req.body);
        res.status(200).json(req.body)
    } catch (error) {
        console.log(error);
    }
};
export const handleGetAllUsers = async (
    req:Request,
    res :Response
): Promise<void> => {
    try {
        const result =  await UserService.getAll();
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
};


