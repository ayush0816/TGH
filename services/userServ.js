const User = require("../Models/user")

const addStudent = async (req,res) => {
    const { email , password , name } = req.body;
    try {
        const user = new User({
            email : email,
            password : password,
            name : name
        })

        await user.save();

        res.status(200).json({message : "User Added Successfully"})
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { addStudent };
