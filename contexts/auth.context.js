import { createContext, useContext, useState, useEffect } from 'react'
import dayjs from 'dayjs'
import jwt from 'jsonwebtoken'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const tokenFound = localStorage.getItem('token')
    setToken(tokenFound)
    try {
      const decodedToken = jwt.decode(token)
      if (dayjs() > dayjs.unix(decodedToken.exp)) {
        localStorage.removeItem('token')
        setToken(null)
        return
      }
      setUser(decodedToken)
    } catch (error) {
      setUser(null)
    }
  }, [token])

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }
  const updateToken = (token) => {
    setToken(token)
  }

  return (
    <AuthContext.Provider value={{ user, logout, updateToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
