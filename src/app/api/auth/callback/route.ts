import { api } from '@/lib/api'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  console.log(1)
  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  console.log(token)
}
