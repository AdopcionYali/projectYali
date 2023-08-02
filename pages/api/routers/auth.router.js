import express from "express";
import login from "../usecases/auth.usecases.js";

const routeAuth = express.Router();

routeAuth.post('/', async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    const token = await login(phoneNumber, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
});

routeAuth.get('/', (req, res) => {
  res.json("Todo bien");
});

export default routeAuth;
