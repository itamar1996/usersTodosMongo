import registerDTO from "../types/DTO/registerDTO";

export default class UserService{
    public static async signup(user:registerDTO):Promise<void>{
        try {
            console.log("sign up");
            
        } catch (error) {
            
        }
    }
    public static async getAll():Promise<void>{
        try {
            console.log("grt all users");
        } catch (error) {
            
        }
    }
}