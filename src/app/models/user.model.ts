export interface User {
    id?: number; // Optional, in case of new user
    username: string;
    email: string;
    password: string; // You may want to handle passwords securely
    role?: string; // Optional, for admin or user roles
}
