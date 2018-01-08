const domain = 'http://localhost:3000'

export async function fetchContactsAPI() {
  const response = await fetch(`${domain}/contacts`)
  if(response.status === 200) {
    return response.json()
  }
}

export async function postContactAPI(name, number, context) {
  return fetch(
    `${domain}/contacts`,
    {
      method: "POST",
      body: JSON.stringify({name, number, context})
    }
  )
}
