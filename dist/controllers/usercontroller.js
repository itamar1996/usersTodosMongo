"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRout_1 = require("../routes/userRout");
// import { handleGetAllUsers, handleSignUp } from "../routes/userRoute";
// import verifyUser from "../middllwhers/verifyUser";
const router = (0, express_1.Router)();
router.post("/register", userRout_1.handleSignUp);
router.get('/');
router.get('./:id', () => { });
router.post('./', () => { });
router.patch('./:id', () => { });
router.delete('./:id', () => { });
exports.default = router;
