import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
export const register = async (req, res) => {
    try {
        // console.log(req.body)
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "user already exist with this mail"
            })

        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        await User.create({
            // when the value is same you can write the single value 
            name,
            email,
            password: hashedPassword
        })
        return res.status(201).json({
            success: true,
            message: "account created succesfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "account register failed"
        })

    }
}
// 1.44.01
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "incorrect email or password "
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "incorrect password  or mail"
            })
        }
        generateToken(res, user, `Welcome back ${user.name}`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "login failed"
        })
    }
}
//1.46.21