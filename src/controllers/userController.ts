import { Router } from "express";
import { handleSignUp } from "../routes/userRout";
// import { handleGetAllUsers, handleSignUp } from "../routes/userRoute";
// import verifyUser from "../middllwhers/verifyUser";

const router : Router = Router();

router.post("/register",handleSignUp );

router.get('/',)

router.get('./:id',()=>{})

router.post('./',()=>{})

router.patch('./:id',()=>{})

router.delete('./:id',()=>{})




export default router