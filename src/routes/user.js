
const { Router } = require("express");
const {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const userRouter = Router();

userRouter.get("/user", getAllUser);
userRouter.post("/user", addUser);
userRouter.patch("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

module.exports = {
  userRouter,
};