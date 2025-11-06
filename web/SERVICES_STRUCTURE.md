# Services Structure - Monorepo Setup

## Overview
This is a monorepo structure with multiple services embedded in a single Next.js application using route groups and middleware for protection.

## Services Created

### 1. Student Portal (`/student`)
- **Login**: `/student`
- **Dashboard**: `/student/dashboard`
- **Components**: `StudentLogin.tsx`
- **Status**: ✅ Complete (basic structure)

### 2. Admin Portal (`/admin`)
- **Login**: `/admin/login`
- **Dashboard**: `/admin/dashboard`
- **Components**: `AdminLogin.tsx`
- **Status**: ✅ Basic structure ready
- **Future Routes**:
  - `/admin/students`
  - `/admin/courses`
  - `/admin/instructors`
  - `/admin/settings`

### 3. Lecturer Portal (`/lecturer`)
- **Login**: `/lecturer/login`
- **Dashboard**: `/lecturer/dashboard`
- **Components**: `LecturerLogin.tsx`
- **Status**: ✅ Basic structure ready
- **Future Routes**:
  - `/lecturer/courses`
  - `/lecturer/students`
  - `/lecturer/grading`

### 4. Library Portal (`/library`)
- **Public Page**: `/library` (existing)
- **Portal**: `/library/portal` (protected)
- **Status**: ✅ Basic structure ready
- **Access**: Students and Lecturers

## File Structure

```
app/
├── middleware.ts              # Route protection
├── student/
│   ├── page.tsx              # Login page
│   └── dashboard/
│       └── page.tsx          # Student dashboard
├── admin/
│   ├── login/
│   │   └── page.tsx          # Admin login
│   └── dashboard/
│       └── page.tsx          # Admin dashboard
├── lecturer/
│   ├── login/
│   │   └── page.tsx          # Lecturer login
│   └── dashboard/
│       └── page.tsx          # Lecturer dashboard
├── library/
│   ├── page.tsx              # Public library page
│   └── portal/
│       └── page.tsx          # Protected library portal
└── components/
    ├── StudentLogin.tsx
    ├── AdminLogin.tsx
    └── LecturerLogin.tsx
```

## Authentication

Currently using cookies for demo purposes:
- `studentLoggedIn` - Student authentication
- `adminLoggedIn` - Admin authentication
- `lecturerLoggedIn` - Lecturer authentication

**Note**: Replace with proper JWT/session-based authentication in production.

## Middleware Protection

The `middleware.ts` file protects routes:
- `/student/*` - Requires student login
- `/admin/*` - Requires admin login (except `/admin/login`)
- `/lecturer/*` - Requires lecturer login (except `/lecturer/login`)
- `/library/portal` - Requires student or lecturer login

## Next Steps

1. **Authentication**: Implement proper JWT/session management
2. **Database**: Connect to backend API
3. **Role Management**: Add role-based access control
4. **Features**: Build out each service's functionality
5. **API Routes**: Create Next.js API routes for backend communication

## Development Notes

- All services share the same design system
- Components can be reused across services
- Easy to add new services by creating new route groups
- Middleware can be extended for more complex authorization

