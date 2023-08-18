import 'dotenv/config'

const saveProfile = async (profileData, id, token) => {
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rescatist/saveprofile`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { id, profileData} )
    })

    let data = await response.json()
    if (!data.success) throw new Error('Error')
    return data
  } catch (error) {
    return error
  }
}

export { saveProfile }