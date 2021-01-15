import JWT from 'jsonwebtoken'
import { config } from '../config'

/**
 * Generate JsonWebToken
 * @param {Object} user The user credentials
 * @returns Token
 */

export const generateToken = (user) =>  {
    try {
        return JWT.sign({
               id: user._id, 
               email: user.email, 
               username: user.username
            }, config.SECRET_KEY, {
                expiresIn: '1h'
            })
    }catch(err) {
        throw err
    }
}