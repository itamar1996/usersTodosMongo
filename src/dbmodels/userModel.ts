import mongoose, { Document, Schema } from 'mongoose';

interface ITodo {
    title: string;
    completed: boolean;
}
interface IUser extends Document {
    username: string;
    password: string;
    todos: ITodo[];
}

const todoSchema: Schema = new Schema({
    title: {
        type: String,
        required: [true, "Todo title is required"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});
const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: [true, "User name is required"],
        minlength: [5, "Way too short name, please enter at least 5 chars"],
    },
    password: {
        type: String,
        required: [true, "Password must be provided"],
    },
    todos: [todoSchema],
});


const UserModel = mongoose.model<IUser>('User', userSchema);


export default UserModel;