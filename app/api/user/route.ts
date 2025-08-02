import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = await createClient()

  // IMPORTANT: Always use getUser() to protect API routes and user data
  // Never trust getSession() in route handlers
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  // Return user information (excluding sensitive data)
  return NextResponse.json({
    id: user.id,
    email: user.email,
    email_confirmed_at: user.email_confirmed_at,
    created_at: user.created_at,
    last_sign_in_at: user.last_sign_in_at,
  })
} 