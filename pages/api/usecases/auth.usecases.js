import { User } from '../models/user.model.js';
import bcrypt from '../libs/bcrypt.js';
import jwt from '../libs/jwt.js';

const login = async (phoneNumber, password) => {
    const user = await User.findOne({ phoneNumber })
    const validPassword = await bcrypt.compare(password, user.password)
    
    const {_id, name} = user
    return jwt.sign({_id, name})
}

export default login