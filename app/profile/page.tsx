import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { FiUser, FiMail, FiCalendar, FiShield } from 'react-icons/fi'

export default async function ProfilePage() {
  const supabase = await createClient()

  // IMPORTANT: Always use getUser() to protect pages and user data
  // Never trust getSession() in Server Components
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    // User is not authenticated, redirect to login
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
            <a 
              href="/dashboard" 
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Back to Dashboard
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <FiUser className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>
                <p className="text-gray-600">Your account information</p>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiMail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Address</p>
                  <p className="text-gray-900">{user.email}</p>
                </div>
              </div>

              {/* User ID */}
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiShield className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">User ID</p>
                  <p className="text-gray-900 font-mono text-sm">{user.id}</p>
                </div>
              </div>

              {/* Email Confirmation Status */}
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiShield className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Confirmed</p>
                  <p className={`font-medium ${user.email_confirmed_at ? 'text-green-600' : 'text-red-600'}`}>
                    {user.email_confirmed_at ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>

              {/* Created At */}
              {user.created_at && (
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FiCalendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Member Since</p>
                    <p className="text-gray-900">
                      {new Date(user.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              )}

              {/* Last Sign In */}
              {user.last_sign_in_at && (
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FiCalendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Last Sign In</p>
                    <p className="text-gray-900">
                      {new Date(user.last_sign_in_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex">
              <FiShield className="w-5 h-5 text-blue-400 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Security Information</h3>
                <p className="text-sm text-blue-700 mt-1">
                  This page is protected using <code className="bg-blue-100 px-1 rounded">supabase.auth.getUser()</code>. 
                  The user session is validated with the Supabase Auth server on every request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 