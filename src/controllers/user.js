const { User } = require("../models/User")

const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(500).send(error);
    }
};

const addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateAuthToken();
        const returnedValue = await user.save();
        res.status(201).send({ returnedValue, token });
    } catch (error) {
        console.log(error);
        if (error.code == 11000) {
            res.status(400).send("User already exists");
        } else {
            res.status(500).send("Could not connect");
        }
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.finByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({ message: "user not found" })
    }
};


const deleteUser = async (req, res) => {
    try {
        const user = await User.finByIdAndDelete(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({ message: "user not found" });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findByCredetials(
            req.body.email,
            req.body.password
        );

        const token = await user.generateAuthToken();

        res.status(200).send({ user, token })
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Unable to login" });

    }
};

module.exports = {
    getAllUser,
    addUser,
    updateUser,
    deleteUser,
    login,
}