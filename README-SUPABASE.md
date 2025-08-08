# Supabase Database Schema Setup

This document provides instructions for setting up the Supabase database schema with Row Level Security (RLS) to ensure users can only access their own data.

## 🚀 Quick Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and anon key

### 2. Set Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Run the Schema

1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase-schema.sql`
4. Click **Run** to execute the schema

## 📊 Database Schema Overview

### Core Tables

| Table | Description | RLS Enabled |
|-------|-------------|-------------|
| `user_profiles` | User profile information | ✅ |
| `appointments` | Appointment management | ✅ |
| `clients` | Client management | ✅ |
| `services` | Service offerings | ✅ |
| `appointment_services` | Many-to-many appointments ↔ services | ✅ |
| `appointment_clients` | Many-to-many appointments ↔ clients | ✅ |
| `notifications` | User notifications | ✅ |
| `user_settings` | User preferences | ✅ |

### Key Features

- **Row Level Security (RLS)**: All tables have RLS enabled
- **Automatic User Isolation**: Users can only see/modify their own data
- **Data Integrity**: Triggers and constraints ensure data consistency
- **Performance**: Optimized indexes for common queries
- **Multi-language Support**: Built-in support for PT, EN, ES, FR

## 🔒 Security Features

### Row Level Security Policies

Every table has RLS policies that ensure:

```sql
-- Example: Users can only see their own appointments
CREATE POLICY "Users can view own appointments" ON appointments
    FOR SELECT USING (auth.uid() = user_id);
```

### Automatic Data Isolation

- Users can only access records where `user_id = auth.uid()`
- Related tables (appointment_services, appointment_clients) are secured through joins
- No cross-user data access possible

## 🛠️ Usage Examples

### Creating a New Appointment

```typescript
import { createClient } from '@/utils/supabase/client';
import type { InsertAppointment } from '@/types/database';

const supabase = createClient();

const newAppointment: InsertAppointment = {
  user_id: user.id, // Will be set automatically by RLS
  title: 'Client Meeting',
  description: 'Discuss project requirements',
  appointment_date: '2024-01-15',
  start_time: '14:00',
  end_time: '15:00',
  status: 'scheduled',
  location: 'Office'
};

const { data, error } = await supabase
  .from('appointments')
  .insert(newAppointment)
  .select();
```

### Fetching User's Appointments

```typescript
const { data: appointments, error } = await supabase
  .from('appointments')
  .select(`
    *,
    appointment_clients (
      clients (*)
    ),
    appointment_services (
      services (*)
    )
  `)
  .eq('status', 'scheduled')
  .order('appointment_date', { ascending: true });
```

### Using the Appointments View

```typescript
// Get appointments with client and service details
const { data: appointmentsWithDetails, error } = await supabase
  .from('appointments_with_details')
  .select('*')
  .gte('appointment_date', new Date().toISOString().split('T')[0]);
```

### Working with Personal Client Record

```typescript
// Get the user's personal client record (created during registration)
const { data: personalClient, error } = await supabase
  .from('clients')
  .select('*')
  .eq('user_id', user.id)
  .eq('email', user.email) // Personal client has same email as user
  .single();

// Create an appointment for the user themselves
const { data: selfAppointment, error: appointmentError } = await supabase
  .from('appointments')
  .insert({
    user_id: user.id,
    title: 'Personal Meeting',
    appointment_date: '2024-01-15',
    start_time: '10:00',
    end_time: '11:00',
    status: 'scheduled'
  })
  .select()
  .single();

// Link the appointment to the personal client record
if (personalClient && selfAppointment) {
  await supabase
    .from('appointment_clients')
    .insert({
      appointment_id: selfAppointment.id,
      client_id: personalClient.id
    });
}
```

## 🔧 Database Functions

### Automatic Profile and Client Creation

When a user signs up, their profile, settings, and a personal client record are automatically created:

```sql
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

This creates:
- **User Profile**: Basic user information
- **User Settings**: Default preferences and configuration
- **Personal Client Record**: A client record for the user themselves (useful for self-appointments)

### Appointment Validation

Appointments are automatically validated:

- End time must be after start time
- Appointment date cannot be in the past

### Updated Timestamps

All tables automatically update the `updated_at` timestamp when records are modified.

## 📱 TypeScript Integration

The schema includes comprehensive TypeScript types in `types/database.ts`:

```typescript
import type { 
  Appointment, 
  Client, 
  Service, 
  UserProfile,
  InsertAppointment,
  UpdateAppointment 
} from '@/types/database';
```

## 🎯 Business Logic

### Appointment Management

- **Status Flow**: scheduled → confirmed → completed/cancelled
- **Reminder System**: Built-in reminder tracking
- **Time Validation**: Automatic time conflict detection

### Client Management

- **Status Tracking**: active, inactive, prospect
- **Contact Information**: Complete contact details
- **Notes**: Flexible note-taking system
- **Personal Client Record**: Each user gets their own client record on registration
- **Client Ownership**: Users can manage multiple clients, including their own record

### Service Management

- **Pricing**: Flexible pricing with decimal support
- **Duration**: Service duration in minutes
- **Categories**: Service categorization
- **Active/Inactive**: Service availability control

## 🔍 Common Queries

### Get Today's Appointments

```sql
SELECT * FROM appointments 
WHERE appointment_date = CURRENT_DATE 
AND user_id = auth.uid()
ORDER BY start_time;
```

### Get Client Statistics

```sql
SELECT 
  status,
  COUNT(*) as count
FROM clients 
WHERE user_id = auth.uid()
GROUP BY status;
```

### Get Upcoming Appointments

```sql
SELECT * FROM appointments_with_details
WHERE appointment_date >= CURRENT_DATE
AND status IN ('scheduled', 'confirmed')
ORDER BY appointment_date, start_time;
```

## 🚨 Important Notes

### Security Considerations

1. **Never disable RLS** - This is your primary security mechanism
2. **Always use authenticated requests** - Ensure users are logged in
3. **Validate on client and server** - Don't rely solely on database constraints
4. **Use parameterized queries** - Prevent SQL injection

### Performance Tips

1. **Use indexes** - The schema includes performance indexes
2. **Limit query results** - Use `.limit()` for large datasets
3. **Use views** - `appointments_with_details` for complex queries
4. **Monitor query performance** - Use Supabase dashboard analytics

### Data Backup

1. **Enable point-in-time recovery** in Supabase dashboard
2. **Set up automated backups** if needed
3. **Test restore procedures** regularly

## 🐛 Troubleshooting

### Common Issues

1. **RLS Policy Errors**: Ensure user is authenticated
2. **Foreign Key Violations**: Check if referenced records exist
3. **Permission Denied**: Verify RLS policies are correct
4. **Type Errors**: Use TypeScript types for type safety

### Debug Queries

```sql
-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public';

-- Check user permissions
SELECT * FROM auth.users WHERE id = auth.uid();
```

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [TypeScript Integration](https://supabase.com/docs/guides/api/typescript-support)
- [Database Functions](https://supabase.com/docs/guides/database/functions)

## 🤝 Support

If you encounter issues:

1. Check the Supabase dashboard logs
2. Verify environment variables are correct
3. Ensure all schema components are installed
4. Test with a fresh database if needed

---

**Note**: This schema is designed for a micro-business appointment management system with multi-language support and comprehensive security features.
