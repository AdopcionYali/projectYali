import express from "express"
import login from "../usecases/auth.usecases.js"

const routeAuth = express.Router()

routeAuth.post('/', async (req, res) => {
    const {phoneNumber, password} = req.body
    const token = await login(phoneNumber, password)
    res.json(token)
})

export default routeAuth