import { BASE_URl_API } from '@/libs/baseUrl'

const saveProfile = async (profileData, id, token) => {
  try {
    let response = await fetch(`${BASE_URl_API}/rescatist/saveprofile`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { id, profileData} )
    })
    let data = await response.json()
    localStorage.setItem('token', data.token)
    return data
  } catch (error) {
    return 
  }
}

export { saveProfile }