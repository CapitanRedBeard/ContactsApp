const domain = 'http://localhost:3000'

export async function fetchContactsAPI() {
  const response = await fetch(`${domain}/contacts`)
  if(response.status === 200) {
    return response.json()
  }
}
