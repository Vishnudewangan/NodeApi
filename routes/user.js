import express from "express";
import {getAllUsers,
        registerNewUser,
        getUserById,
        specialFunc,
        updateUserById,
        deleteUserById
        } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new",registerNewUser);
  
router.get("/userid/special",specialFunc);
  
  //  /userid/asdasd
  // /userid/abcdefgh 
  
  // above both are same url with static /userid and /:id is dynamic
  // router.get("/userid/:id", getUserById);

  // router.put("/userid/:id" , updateUserById);
  // router.delete("/userid/:id",deleteUserById);
  
  // Instead of above three lines we can use like below

  router.
  route("/userid/:id").
  get(getUserById).
  put(updateUserById).
  delete(deleteUserById);
  

  export default router;
