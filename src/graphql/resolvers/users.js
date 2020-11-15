import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken"
import { UserInputError } from "apollo-server"

import {config} from '../../config'
import { User } from "../models"

export default  {
    Query: {
        async getUsers () {
           try {
               const users = await User.find()

               return users
           } catch (err) {
               throw err
           }   
       }
   },
   Mutation: {
       register: async (_, { 
           registerInput: { email, password, confirmPassword, username }
        }, context, info) => {
            // HASH passoword and create auth token 
           // TODO: Validate Data User Data
           // TODO: make sure user does not already exixst

           try {
            
            if (password !== confirmPassword) {
                throw new UserInputError('the two password does not match!')
            }

            const user = await User.findOne({username})
            
            if (user) {
                throw new UserInputError('This user is already exists', {
                    errors: {
                        username: 'This username or email is taken'
                    }
                })
            }

            const hashedPassword = await bcrypt.hash(password, 12);

           const newUser = new User({
               email, 
               username, 
               password: hashedPassword,
               createdAt: new Date().toISOString()
           })

           const createdUser = await newUser.save()

           const token = JWT.sign({
               id: createdUser._id, 
               email: createdUser.email, 
               username: createdUser.username
            }, config.SECRET_KEY, {
                expiresIn: '1h'
            })

            return {
                ...createdUser._doc,
                id: createdUser._id,
                token
            }
            } catch(err) {
                throw new UserInputError(err)
            }
       }
   }
}