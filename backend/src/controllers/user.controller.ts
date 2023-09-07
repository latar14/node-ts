import { Request, Response } from "express"
const User = require('../models/User.model.ts')



module.exports.userController = {
    
    userLogin: async (req: Request, res: Response) => {

            const { email, number} = req.body
            const validEmail = await User.findOne({email})
            
            
            if (!validEmail || validEmail.number != number) {

                return res.status(401).json("User not found")

            }  res.json([
                    email,
                    number,
                ]);
    },
    addUser: async (req: Request, res: Response) => {
        try {
            const data = await User.create({
                email: req.body.email,
                number: req.body.number
            })
            await res.json(data)
        } catch (error) {
            console.log(error)
        }
    },
    getUsers: async (req: Request, res: Response) => {
        const data = await User.find()
        res.json(data)
    }
}