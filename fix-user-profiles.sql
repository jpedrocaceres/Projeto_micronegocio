-- =============================================
-- FIX USER PROFILES SCRIPT
-- =============================================

-- This script fixes user profiles that might be missing the role field
-- or have other issues that cause the profile page to fail

-- =============================================
-- STEP 1: Ensure role column exists and has default values
-- =============================================

-- Add role column if it doesn't exist
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user'));

-- Update any existing profiles that have NULL role to 'user'
UPDATE user_profiles 
SET role = 'user' 
WHERE role IS NULL;

-- =============================================
-- STEP 2: Ensure all users have a profile
-- =============================================

-- Create profiles for any auth.users that don't have a profile
INSERT INTO user_profiles (id, email, full_name, role)
SELECT 
    au.id,
    au.email,
    COALESCE(au.raw_user_meta_data->>'display_name', au.email),
    'user'
FROM auth.users au
LEFT JOIN user_profiles up ON au.id = up.id
WHERE up.id IS NULL;

-- =============================================
-- STEP 3: Create user settings for users without settings
-- =============================================

-- Create user_settings for any users that don't have settings
INSERT INTO user_settings (user_id)
SELECT au.id
FROM auth.users au
LEFT JOIN user_settings us ON au.id = us.user_id
WHERE us.user_id IS NULL;

-- =============================================
-- STEP 4: Create client records for users without clients
-- =============================================

-- Create a client record for users who don't have one
INSERT INTO clients (user_id, name, email, status)
SELECT 
    au.id,
    COALESCE(au.raw_user_meta_data->>'display_name', 'My Account'),
    au.email,
    'active'
FROM auth.users au
LEFT JOIN clients c ON au.id = c.user_id AND c.name = 'My Account'
WHERE c.id IS NULL;

-- =============================================
-- STEP 5: Verify the fix
-- =============================================

-- Check all user profiles
SELECT 
    up.id,
    up.email,
    up.full_name,
    up.role,
    up.created_at
FROM user_profiles up
ORDER BY up.created_at DESC;

-- Check if all users have settings
SELECT 
    COUNT(*) as total_users,
    COUNT(us.user_id) as users_with_settings
FROM auth.users au
LEFT JOIN user_settings us ON au.id = us.user_id;

-- Check if all users have client records
SELECT 
    COUNT(*) as total_users,
    COUNT(c.id) as users_with_clients
FROM auth.users au
LEFT JOIN clients c ON au.id = c.user_id;

-- =============================================
-- EXPLANATION
-- =============================================

/*
This script fixes several potential issues:

1. MISSING ROLE COLUMN: Ensures the role column exists and has proper defaults
2. NULL ROLES: Updates any profiles with NULL role to 'user'
3. MISSING PROFILES: Creates profiles for users who don't have one
4. MISSING SETTINGS: Creates user_settings for users without settings
5. MISSING CLIENTS: Creates client records for users without clients

COMMON ERROR CODES:
- PGRST116: No rows returned (profile doesn't exist)
- PGRST116: Row not found
- 42501: Permission denied (RLS policy issue)

This should resolve the "Error fetching user profile: {}" issue.
*/
