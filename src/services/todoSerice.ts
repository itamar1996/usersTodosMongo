import newTodoTDO from "../types/DTO/newTodoTDO";

export default class todoService{
    public static async addNewTodo(newTodo:newTodoTDO):Promise<void>{
        try {
            console.log("add New Todo");
        } catch (error) {
            
        }
    }
    public static async getAll():Promise<void>{
        try {
            console.log("grt all todos");
        } catch (error) {
            
        }
    }
}