import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')

  if (!token_hash || !type) {
    return NextResponse.redirect(new URL('/login?error=Invalid confirmation link', request.url))
  }

  const supabase = await createClient()

  try {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as any,
    })

    if (error) {
      console.error('Email confirmation error:', error)
      return NextResponse.redirect(new URL(`/login?error=${encodeURIComponent(error.message)}`, request.url))
    }

    // Email confirmed successfully
    return NextResponse.redirect(new URL('/dashboard?message=Email confirmed successfully', request.url))
  } catch (error) {
    console.error('Unexpected error during email confirmation:', error)
    return NextResponse.redirect(new URL('/login?error=An unexpected error occurred', request.url))
  }
} 