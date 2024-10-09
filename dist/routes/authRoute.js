"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSignOutRequset = exports.handleSigninRequset = void 0;
const authService_1 = __importDefault(require("../services/authService"));
const handleSigninRequset = async (req, res) => {
    try {
        const result = await authService_1.default.login(req.body);
        res.cookie('auth_token', result.data, { httpOnly: true });
        res.cookie("token", result.data).status(result.status).json(result);
    }
    catch (error) {
    }
};
exports.handleSigninRequset = handleSigninRequset;
const handleSignOutRequset = async (req, res) => {
    try {
        const result = await authService_1.default.login(req.body);
        res.cookie("token", result.data).status(result.status).json(result);
    }
    catch (error) {
    }
};
exports.handleSignOutRequset = handleSignOutRequset;
