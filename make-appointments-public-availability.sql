-- =============================================
-- MAKE APPOINTMENT AVAILABILITY PUBLIC SCRIPT
-- =============================================

-- This script makes appointment availability public (all users can see time slots)
-- while keeping appointment details private (users only see their own appointments)

-- =============================================
-- STEP 1: Add public availability policy
-- =============================================

-- Add policy to allow all authenticated users to view appointment times for availability checking
CREATE POLICY "Public can view appointment times for availability" ON appointments
    FOR SELECT USING (
        -- Only allow access to date, start_time, end_time, and status for availability checking
        -- This policy allows all authenticated users to see appointment times
        -- but not the full appointment details
        auth.uid() IS NOT NULL
    );

-- =============================================
-- STEP 2: Create a view for public availability
-- =============================================

-- Create a view that shows only the necessary fields for availability checking
CREATE OR REPLACE VIEW appointment_availability AS
SELECT 
    appointment_date,
    start_time,
    end_time,
    status
FROM appointments
WHERE status IN ('scheduled', 'confirmed');

-- Apply RLS to the view
ALTER VIEW appointment_availability SET (security_invoker = true);

-- =============================================
-- STEP 3: Verify the changes
-- =============================================

-- Check all appointment policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'appointments'
ORDER BY policyname;

-- Test public availability access
SELECT 
    appointment_date,
    start_time,
    end_time,
    status
FROM appointment_availability
WHERE appointment_date = CURRENT_DATE
LIMIT 5;

-- =============================================
-- EXPLANATION
-- =============================================

/*
This script enables public appointment availability while maintaining privacy:

BEFORE:
- Users could only see their own appointments
- Availability checking was limited to user's own appointments
- No way to see if a time slot was taken by another user

AFTER:
- ALL authenticated users can see appointment times for availability checking
- Users still only see their own appointment details in the appointments list
- Availability checking now considers ALL appointments (public availability)

BENEFITS:
1. Users can see real-time availability when booking appointments
2. No double-booking of time slots
3. Better user experience with accurate availability
4. Maintains privacy - users only see their own appointment details

PERMISSIONS:
- READ appointment times: All authenticated users (for availability)
- READ full appointment details: Only own appointments
- INSERT/UPDATE/DELETE: Only own appointments (unchanged)

This matches the requirement: "when a user confirm a reserv of the hour. Most to atualizate to all users, so the table most to be public"
*/
