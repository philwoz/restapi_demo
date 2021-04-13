
const { Router } = require("express");
const {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/user");
const { hashPassword } = require("../middleware/index");

const userRouter = Router();

userRouter.get("/user", getAllUser);
userRouter.post("/user", hashPassword, addUser);
userRouter.patch("/user/:id",hashPassword, updateUser);
userRouter.delete("/user/:id", deleteUser);
userRouter.post("/user/login", login);

module.exports = {
  userRouter,
};