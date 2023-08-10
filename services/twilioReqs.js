import { BASE_URl_API } from '@/libs/baseUrl'
import { CustomError } from '@/libs/errorCustom'

const postRequest = async (phoneNumber) => {
  try {

    const response = await fetch(`${BASE_URl_API}/signup/twilio/sendcode`, { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(phoneNumber)
    })
    
    if (!response.ok) throw new Error('Network response was not ok')
    if (response.code === 409) throw new CustomError('El número ya está registrado', 409)

    const data = await response.json()

    return data

  } catch (error) {
    return error
  }
}

const postVerifyCode = async (dataToVerify) => {
  try {
    const response = await fetch(`${BASE_URl_API}/signup/twilio/verifycode`, { 
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(dataToVerify)
    })
    if (!response.ok) throw new Error('Bad response network')

    const data = await response.json()
    return data

  } catch (error) {
    return 'Algo inesperado sucedió'
  }
}

const postSignUp = async (userData) => {
  try {
    const response = await fetch(`${BASE_URl_API}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    const data = await response.json()
    localStorage.setItem('token', data.token)
    
    return data

  } catch (error) {
    return error.status
  }
}

export { postRequest, postVerifyCode, postSignUp }