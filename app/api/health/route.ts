import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Basic health check - you can add more sophisticated checks here
    // like database connectivity, external service status, etc.
    
    return NextResponse.json(
      { 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        service: 'bizmanager-api'
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        timestamp: new Date().toISOString(),
        error: 'Health check failed'
      },
      { status: 503 }
    )
  }
} 