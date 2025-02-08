export type UserRole = 'super_admin' | 'admin' | 'faculty' | 'student' | 'parent';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}