import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default function removeShowDialogMiddleware(request: NextRequest) {
  const nextUrl = request.nextUrl
  nextUrl.searchParams.delete('showDialog')
  return NextResponse.rewrite(nextUrl)
}