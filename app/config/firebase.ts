// Firebase configuration for both client and server
import { app, db, auth, firebaseConfig } from './firebaseConfig';
import { adminApp, adminAuth, adminDb } from './firebaseAdmin';

// Client-side Firebase (browser)
export const firebaseClient = {
  app,
  db,
  auth,
  config: firebaseConfig
};

// Server-side Firebase (SSR)
export const firebaseServer = {
  app: adminApp,
  db: adminDb,
  auth: adminAuth
};

// Utility function to get Firebase instance based on environment
export const getFirebase = () => {
  if (typeof window === 'undefined') {
    // Server-side
    return firebaseServer;
  } else {
    // Client-side
    return firebaseClient;
  }
};

// Export individual instances for direct use
export { app, db, auth } from './firebaseConfig';
export { adminApp as adminApp, adminAuth as adminAuth, adminDb as adminDb } from './firebaseAdmin'; 