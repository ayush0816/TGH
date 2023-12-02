const User = require("../Models/user");
const jwt = require("jsonwebtoken");

const adminLogin = async (req,res) => {
  const { email, name, password } = req.body;

  if (!email.includes("admin.com")) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = new User({
        email: email,
        password: password,
        name: name,
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY);
      res.send(token);
    } else {
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      res.send(token);
    }
  } catch (err) {
    console.log("Error in admin login : ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const studentLogin = async (req,res) => {
  const { email , password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "ayushsingh");
    res.send(token);
  } catch (err) {
    console.log("Error in admin login : ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { adminLogin, studentLogin };
