import { getTodos } from '@/lib/fake-db'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  // Faking a database call
  const data = await getTodos()

  return NextResponse.json({ data }, { status: 200 })
}
