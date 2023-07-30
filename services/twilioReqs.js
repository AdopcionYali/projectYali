const postRequest = async (phoneNumber) => {
  try {

    const response = await fetch('http://localhost:8080/signup/twilio/sendcode', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(phoneNumber)
    })

    if (!response.ok) throw new Error('Network response was not ok')

    const data = await response.json()

    console.log(data);
    return data

  } catch (error) {
    console.log(error)
  }
}

const postVerifyCode = async (dataToVerify) => {
  try {
    const response = await fetch(`http://localhost:8080/signup/twilio/verifycode`, { 
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(dataToVerify)
    })

    if (!response.ok) throw new Error('Bad response network')

    const data = await response.json()
    return data

  } catch (error) {
    console.log(error);
  }
}

const postSignUp = async (userData) => {
  try {
    const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    const data = await response.json()
    console.log(data);
    return data

  } catch (error) {
    console.log(error);
  }
}

export { postRequest, postVerifyCode, postSignUp }