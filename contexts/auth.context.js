import { createContext, useContext, useState, useEffect } from 'react'
import dayjs from 'dayjs'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    try {
      const decodedToken = atob(token.split('.')[1])
      // const { exp, iat } = decodedToken
      // const dateExp = dayjs.unix(exp)
      // console.log(dateExp)
      setUser(JSON.parse(decodedToken))
    } catch (error) {
      setUser(null)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
