import 'server-only'

export async function getTodos() {
  try {
    const endpoint = process.env.MOCK_API_ENDPOINT
    if (!endpoint) {
      throw new Error('MOCK_API_ENDPOINT is not defined')
    }

    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      throw new Error('Failed to fetch')
    }

    const data = await res.json()
    return { data }
  } catch (error) {
    return { error }
  }
}
