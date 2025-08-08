-- =============================================
-- FIX INFINITE RECURSION IN RLS POLICIES
-- =============================================

-- This script fixes the infinite recursion issue caused by admin policies
-- Run this in your Supabase SQL editor to resolve the error

-- =============================================
-- STEP 1: Drop problematic policies
-- =============================================

-- Drop the policies that cause recursion
DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Admins can view all appointments" ON appointments;
DROP POLICY IF EXISTS "Admins can update all appointments" ON appointments;

-- =============================================
-- STEP 2: Create admin function (avoids recursion)
-- =============================================

-- Create a function to check if user is admin
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

-- =============================================
-- STEP 3: Create new admin policies using the function
-- =============================================

-- Admin can view all user profiles
CREATE POLICY "Admins can view all profiles" ON user_profiles
    FOR SELECT USING (is_admin() OR auth.uid() = id);

-- Admin can update all user profiles
CREATE POLICY "Admins can update all profiles" ON user_profiles
    FOR UPDATE USING (is_admin() OR auth.uid() = id);

-- Admin can view all appointments
CREATE POLICY "Admins can view all appointments" ON appointments
    FOR SELECT USING (is_admin() OR auth.uid() = user_id);

-- Admin can update all appointments
CREATE POLICY "Admins can update all appointments" ON appointments
    FOR UPDATE USING (is_admin() OR auth.uid() = user_id);

-- =============================================
-- STEP 4: Verify the fix
-- =============================================

-- Test the admin function
SELECT is_admin();

-- Check all policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('user_profiles', 'appointments')
ORDER BY tablename, policyname;

-- =============================================
-- EXPLANATION
-- =============================================

/*
The infinite recursion was caused by policies that referenced the same table
they were protecting. For example:

- Policy on user_profiles was checking user_profiles.role = 'admin'
- This created a circular reference when the policy tried to evaluate itself

SOLUTION:
- Created an is_admin() function with SECURITY DEFINER
- This function runs with elevated privileges and avoids the recursion
- Policies now use is_admin() OR auth.uid() = id instead of direct table queries

This approach is more efficient and avoids the recursion issue entirely.
*/
