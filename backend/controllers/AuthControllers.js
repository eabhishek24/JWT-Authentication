const bcrypt = require('bcrypt');
const UserModel = require("../models/user");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists, you can login',
        success: false
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
      success: true
    });

  } catch (err) {
    console.error("Signup error:", err); 
    res.status(500).json({
      message: "Internal Server error", 
      success: false
    });
  }
};

const login = async (req, res) => {
  try {
    const {email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    const errMsg = "Auth failed";

    if (!existingUser) {
      return res.status(403).json({
        message: errMsg,
        success: false
      });
    }

    const isPassEqual = await bcrypt.compare(password, existingUser.password);
    if(!isPassEqual){
        return res.status(403).json({
        message: errMsg,
        success: false
      });
    }

    const jwtToken = jwt.sign({
        email : existingUser.email,
        _id : existingUser._id
    },
    process.env.JWT_SECRET,
    {expiresIn : '24h'}
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email,
      name : existingUser.name
    });

  } catch (err) {
    console.error("Login error:", err); 
    res.status(500).json({
      message: "Internal Server error", 
      success: false
    });
  }
};

module.exports = {
  signup,
  login
};
