export default async function saveMessage(message) {
  const url = process.env.NEXT_PUBLIC_CMS_HOST + '/messages'
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message),
    method: 'POST'
  }
  const res = await fetch(url, options)
  return await res.json()
}
