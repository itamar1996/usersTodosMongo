import registerDTO from "../types/DTO/registerDTO";
import UserModel from '../dbmodels/userModel'
export default class UserService{
    public static async signup(user:registerDTO):Promise<void>{
        try {
            const { username, password } = user;
            const dbUser = new UserModel({
                username,
                password
              });
            try {
                await dbUser.save()   

            } catch (error) {
                console.log(console.log(error));
            }
            await dbUser.save()   
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