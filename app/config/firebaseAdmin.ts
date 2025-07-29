import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Helper function to format private key
function formatPrivateKey(key: string | undefined): string | undefined {
  if (!key) return undefined;
  
  // Remove quotes if present
  let formattedKey = key.replace(/^["']|["']$/g, '');
  
  // Replace literal \n with actual newlines
  formattedKey = formattedKey.replace(/\\n/g, '\n');
  
  // Check if it's a placeholder
  if (formattedKey.includes('...')) {
    console.warn('⚠️ Firebase Admin private key appears to be a placeholder. SSR features will be disabled.');
    return undefined;
  }
  
  // Ensure proper PEM format
  if (!formattedKey.includes('-----BEGIN PRIVATE KEY-----')) {
    formattedKey = `-----BEGIN PRIVATE KEY-----\n${formattedKey}\n-----END PRIVATE KEY-----`;
  }
  
  return formattedKey;
}

// Firebase Admin configuration for SSR
const firebaseAdminConfig = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: formatPrivateKey(process.env.FIREBASE_PRIVATE_KEY),
};

// Initialize Firebase Admin only on server side
let adminApp;
let adminAuth;
let adminDb;

if (typeof window === 'undefined') {
  // Only initialize on server side
  try {
    if (!getApps().length) {
      // Validate required fields
      if (!firebaseAdminConfig.projectId || !firebaseAdminConfig.clientEmail || !firebaseAdminConfig.privateKey) {
        console.warn('⚠️ Firebase Admin configuration incomplete. SSR features will be disabled.');
        console.warn('Required: NEXT_PUBLIC_FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY');
        console.warn('Note: Replace the placeholder "..." in FIREBASE_PRIVATE_KEY with your actual private key');
      } else {
        adminApp = initializeApp({
          credential: cert(firebaseAdminConfig),
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        });
        
        adminAuth = getAuth(adminApp);
        adminDb = getFirestore(adminApp);
        
        console.log('✅ Firebase Admin initialized successfully for SSR');
      }
    } else {
      adminApp = getApps()[0];
      adminAuth = getAuth(adminApp);
      adminDb = getFirestore(adminApp);
    }
  } catch (error) {
    console.error('❌ Error initializing Firebase Admin:', error);
    console.warn('SSR features will be disabled due to Firebase Admin initialization error');
  }
}

export { adminApp, adminAuth, adminDb }; 