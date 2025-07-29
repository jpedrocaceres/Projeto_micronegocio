import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '../../../config/firebaseAdmin';

export async function POST(request: NextRequest) {
  try {
    // Check if Firebase Admin is initialized
    if (!adminAuth) {
      return NextResponse.json(
        { error: 'Firebase Admin not initialized. Check your environment variables.' },
        { status: 500 }
      );
    }

    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    // Verify the token using Firebase Admin
    const decodedToken = await adminAuth.verifyIdToken(token);
    
    return NextResponse.json({
      uid: decodedToken.uid,
      email: decodedToken.email,
      emailVerified: decodedToken.email_verified,
    });
  } catch (error) {
    console.error('Token verification error:', error);
    
    // Check if it's a Firebase Admin initialization error
    if (error instanceof Error && error.message.includes('Failed to parse private key')) {
      return NextResponse.json(
        { error: 'Firebase Admin configuration error. Check your private key format.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
} 