
const savePostObject = async (postData, files) => {
  let postDataJSON = JSON.stringify(postData)
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: postDataJSON
  })
  let data = await response.json()
  console.log(data)
  if (!data.success) throw new Error('Error')

  let id = data.postId
  let patchResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}/uploads`, {
  method: 'POST',
  body: files
 })
 let imgResp = await patchResponse.json()
 console.log(files, imgResp, 'console log de respuesta en segunda peticion')
 return data, imgData
} catch (error) {
  return error
}}

export default savePostObject