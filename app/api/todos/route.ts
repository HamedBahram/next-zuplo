import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { getTodos } from '@/lib/fake-db'

export const runtime = 'edge'

export async function GET() {
  // Only allow requests from your Gateway
  const headersList = headers()
  const secret = headersList.get('secret-key')
  if (secret !== process.env.SECRET_KEY) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  // Faking a database call
  const data = await getTodos()

  return NextResponse.json({ data }, { status: 200 })
}
