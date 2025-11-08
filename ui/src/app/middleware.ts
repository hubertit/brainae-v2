import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Student portal routes
  if (path.startsWith('/student') && path !== '/student') {
    const isLoggedIn = request.cookies.get('studentLoggedIn')?.value === 'true';
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login?role=student', request.url));
    }
  }
  
  // Admin portal routes (allow login page)
  if (path.startsWith('/admin') && path !== '/admin/login') {
    const isAdmin = request.cookies.get('adminLoggedIn')?.value === 'true';
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/login?role=admin', request.url));
    }
  }
  
  // Lecturer portal routes (allow login page)
  if (path.startsWith('/lecturer') && path !== '/lecturer/login') {
    const isLecturer = request.cookies.get('lecturerLoggedIn')?.value === 'true';
    if (!isLecturer) {
      return NextResponse.redirect(new URL('/login?role=lecturer', request.url));
    }
  }
  
  // Library portal routes (can be public or protected)
  // Add protection logic here if needed
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/student/:path*',
    '/admin/:path*',
    '/lecturer/:path*',
    '/library/:path*',
  ],
};

