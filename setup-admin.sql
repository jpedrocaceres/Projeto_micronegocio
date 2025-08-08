-- =============================================
-- ADMIN USER SETUP SCRIPT
-- =============================================

-- This script helps you set up admin users in your application
-- Run this in your Supabase SQL editor after creating a user account

-- =============================================
-- STEP 1: Add role column to existing user_profiles table
-- =============================================

-- If the role column doesn't exist yet, add it:
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user'));

-- =============================================
-- STEP 2: Set a specific user as admin
-- =============================================

-- Replace 'user-email@example.com' with the actual email of the user you want to make admin
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'user-email@example.com';

-- =============================================
-- STEP 3: Verify admin user was set correctly
-- =============================================

-- Check all admin users
SELECT id, email, full_name, role, created_at 
FROM user_profiles 
WHERE role = 'admin';

-- =============================================
-- STEP 4: Alternative - Set admin by user ID
-- =============================================

-- If you know the user's UUID, you can use this instead:
-- UPDATE user_profiles 
-- SET role = 'admin' 
-- WHERE id = 'user-uuid-here';

-- =============================================
-- STEP 5: Create admin function and policies
-- =============================================

-- Create a function to check if user is admin (avoids recursion)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM user_profiles 
        WHERE user_profiles.id = auth.uid() 
        AND user_profiles.role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Admin can view all user profiles
CREATE POLICY "Admins can view all profiles" ON user_profiles
    FOR SELECT USING (is_admin() OR auth.uid() = id);

-- Admin can update all user profiles
CREATE POLICY  "Admins can update all profiles" ON user_profiles
    FOR UPDATE USING (is_admin() OR auth.uid() = id);

-- Admin can view all appointments
CREATE POLICY  "Admins can view all appointments" ON appointments
    FOR SELECT USING (is_admin() OR auth.uid() = user_id);

-- Admin can update all appointments
CREATE POLICY  "Admins can update all appointments" ON appointments
    FOR UPDATE USING (is_admin() OR auth.uid() = user_id);

-- =============================================
-- USAGE INSTRUCTIONS
-- =============================================

/*
1. First, create a user account through your application's signup process
2. Note down the email address of the user you want to make admin
3. Replace 'user-email@example.com' in the UPDATE statement above with the actual email
4. Run this script in your Supabase SQL editor
5. The user will now have admin privileges and can see all appointments and users

ADMIN FEATURES:
- Can view all appointments (not just their own)
- Can view all user profiles
- Can access the Services page
- Navigation shows "All Appointments" and "All Users" instead of "My Appointments" and "My Profile"

REGULAR USER FEATURES:
- Can only view their own appointments
- Can only view their own profile
- Cannot access the Services page
- Navigation shows "My Appointments" and "My Profile"
*/
