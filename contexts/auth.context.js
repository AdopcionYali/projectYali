import { createContext, useContext, useState, useEffect } from 'react'
import dayjs from 'dayjs'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const tokenFound = localStorage.getItem('token')
    setToken(tokenFound)
    try {
      const decodedToken = atob(token.split('.')[1])
      // const { exp, iat } = decodedToken
      // const dateExp = dayjs.unix(exp)
      // console.log(dateExp)
      setUser(JSON.parse(decodedToken))
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
