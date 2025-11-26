const controller = require("../controller/usercontroller");
const express = require("express");
const userRouter = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = controller;

const customMiddleware = require("../middleware/customMiddleware");

userRouter.get("/get-users", customMiddleware, getUsers);
userRouter.post("/create-user", customMiddleware, createUser);
userRouter.put("/update-user/:id", customMiddleware, updateUser);
userRouter.delete("/delete-user/:id", customMiddleware, deleteUser);

module.exports = userRouter;
