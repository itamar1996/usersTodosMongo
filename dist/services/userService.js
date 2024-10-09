"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../dbmodels/userModel"));
class UserService {
    static async signup(user) {
        try {
            const { username, password } = user;
            const dbUser = new userModel_1.default({
                username,
                password
            });
            try {
                await dbUser.save();
            }
            catch (error) {
                console.log(console.log(error));
            }
            await dbUser.save();
        }
        catch (error) {
        }
    }
    static async getAll() {
        try {
            console.log("grt all users");
        }
        catch (error) {
        }
    }
}
exports.default = UserService;
