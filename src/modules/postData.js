import drowMessage from './drowMessage'

const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const { status, message, fields } = await response.json()
  drowMessage(status, message, fields)
}

export default postData
