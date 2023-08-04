import jwt from '../libs/jwt.js'
import { User } from '../models/user.model.js'
import { CustomError } from '../libs/errorCustom.js'

//Usar para determinar si el usuario ha iniciado sesion mediante token valido
const isAuth = (req, res, next) => {
  try {
    const authorization = req.headers.authorization || ''
    const token = authorization.replace('Bearer ', '')
    const isValidToken = jwt.verify(token)

    if (!isValidToken) throw new CustomError('Unautorized', 401)

    next()
  } catch (error) {
    res
      .status(error.status || 401)
      .json({ succes: false, message: 'Unautorized' })
  }
}

//Usar cuando para verificar si el usuario ha sido verificado
const isVerified = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization || ''
    const token = authorization.replace('Bearer ', '')
    const id = jwt.verify(token)._id
    const userFound = await User.findById(id)

    if (!userFound.isVerified) throw new CustomError('Unahutorized', 401)

    next()
  } catch (error) {
    res
      .status(error.status || 401)
      .json({ success: false, message: 'Unahutorized' })
  }
}

export { isAuth, isVerified }
