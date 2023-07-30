import express from 'express'
import { sendCode, verifyCode } from '../libs/twilio.js'
import { createUser } from '../usecases/user.usecases.js'

const routerUser = express.Router()

routerUser.post('/twilio/sendcode', (req, res) => {
  try {
    const { phoneNumber } = req.body
    sendCode(phoneNumber)

    res.json({
      success: true,
      message: `Code send successfully to ${phoneNumber}`,
    })
  } catch (error) {
    console.log(error)
  }
})

routerUser.post('/twilio/verifycode', async (req, res) => {
  try {
    const { phoneNumber, code } = req.body

    const isValid = await verifyCode(phoneNumber, code)

    if (isValid === 'pending') throw new Error('Código incorrecto')

    res.json({
      success: true,
      message: 'Código correcto',
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'Código correcto',
    })
    console.log(error)
  }
})

routerUser.post('/', (req, res) => {
  try {
    const { body } = req
    const userCreated = createUser(body)

    res.json({
      success: true,
      data: userCreated,
    })
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    })
  }
})

export default routerUser
