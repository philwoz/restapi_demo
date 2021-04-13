
const { Router } = require("express");
const {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { hashPassword } = require("../middleware/index");

const userRouter = Router();

userRouter.get("/user", getAllUser);
userRouter.post("/user", hashPassword, addUser);
userRouter.patch("/user/:id",hashPassword, updateUser);
userRouter.delete("/user/:id", deleteUser);

module.exports = {
  userRouter,
};