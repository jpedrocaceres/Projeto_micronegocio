-- =============================================
-- MAKE SERVICES PUBLIC SCRIPT
-- =============================================

-- This script makes the services table public (viewable by all users)
-- while restricting management (insert/update/delete) to admin users only

-- =============================================
-- STEP 1: Drop existing services policies
-- =============================================

-- Drop the old policies that restrict services to user ownership
DROP POLICY IF EXISTS "Users can view own services" ON services;
DROP POLICY IF EXISTS "Users can insert own services" ON services;
DROP POLICY IF EXISTS "Users can update own services" ON services;
DROP POLICY IF EXISTS "Users can delete own services" ON services;

-- =============================================
-- STEP 2: Create new public policies
-- =============================================

-- Public read access (all users can view all services)
CREATE POLICY "Public can view all services" ON services
    FOR SELECT USING (true);

-- Only admins can insert services
CREATE POLICY "Admins can insert services" ON services
    FOR INSERT WITH CHECK (is_admin());

-- Only admins can update services
CREATE POLICY "Admins can update services" ON services
    FOR UPDATE USING (is_admin());

-- Only admins can delete services
CREATE POLICY "Admins can delete services" ON services
    FOR DELETE USING (is_admin());

-- =============================================
-- STEP 3: Verify the changes
-- =============================================

-- Check all services policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'services'
ORDER BY policyname;

-- Test public access (should work for any authenticated user)
SELECT COUNT(*) as total_services FROM services;

-- =============================================
-- EXPLANATION
-- =============================================

/*
This script changes the services table from user-owned to public:

BEFORE:
- Users could only view their own services
- Users could manage their own services
- Services were isolated per user

AFTER:
- ALL users can view ALL services (public catalog)
- ONLY admin users can create/edit/delete services
- Services are shared across all users

BENEFITS:
1. Users can see all available services when booking appointments
2. Admins can manage the service catalog centrally
3. Consistent service offerings across all users
4. Better user experience for appointment booking

PERMISSIONS:
- READ: All authenticated users
- INSERT: Admin users only
- UPDATE: Admin users only  
- DELETE: Admin users only

This matches the requirement: "table services can be accessed by all users, its public"
*/
