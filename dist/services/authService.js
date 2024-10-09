"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ResponseData from "../types/DTO/responce";
// import SigninResponseDTO from "../types/DTO/signinResponseDTO";
// import TokenPayloadDTO from "../types/DTO/tokenPayloadDTO"
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    static async login(userData1) {
        try {
            const { username, password } = userData1;
            if (!password || !username) {
                return false;
            }
            // let users:User[]= await getFilleData<User>('users') as User[];
            // const userData = users.find(u => u.username == username);
            const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "10m"
            });
            return {
                err: false,
                status: 200,
                data: {
                    token
                }
            };
        }
        catch (error) {
            return {
                err: true,
                message: "Missing madatory data",
                status: 500,
                data: error
            };
        }
    }
    static async logout(userData) {
    }
}
exports.default = AuthService;
