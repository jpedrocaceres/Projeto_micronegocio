import { adminDb } from '../config/firebaseAdmin';

interface ServerUserProfileProps {
  userId: string;
}

export default async function ServerUserProfile({ userId }: ServerUserProfileProps) {
  try {
    // This runs on the server side using Firebase Admin
    const userDoc = await adminDb.collection('users').doc(userId).get();
    
    if (!userDoc.exists) {
      return <div>User not found</div>;
    }

    const userData = userDoc.data();

    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-2">User Profile (Server Rendered)</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {userData?.name || 'N/A'}</p>
          <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
          <p><strong>Role:</strong> {userData?.role || 'N/A'}</p>
          <p><strong>Created:</strong> {userData?.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching user data:', error);
    return <div>Error loading user profile</div>;
  }
} 