import bcrypt from "../libs/bcrypt.js";
import { User } from "../models/user.model.js";

const createUser = async (userData) => {
  const { phoneNumber, password } = userData;

  const ecnriptedPassword = await bcrypt.hash(password)

  return User.create({ ...userData, password: ecnriptedPassword})
}

export { createUser }