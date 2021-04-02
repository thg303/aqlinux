export default function fetchErrorHandler (response) {
  if (response.status < 200 || response.status > 299) {
    console.log(`HTTP Error: ${response.status}`)
    throw Error(response.statusText)
  }
}