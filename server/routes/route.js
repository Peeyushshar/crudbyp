import express from "express";
// import { deleteUser } from "../../client/src/service/api.js";
// import { getUsers } from "../../client/src/service/api.js";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../controller/user-controller.js";



const router = express.Router();


router.post('/add',addUser);
router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/:id',editUser);
router.delete('/:id',deleteUser);
// router.get('/:id', sendEmail);

export default router;