export type User = {
    success: any;
    id: number;
    name: string;
    email: string;
  };
  
  export async function getUsers() {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();
    return users as User[];
  }
  
  
export async function registerUser(userData: Partial<User>): Promise<User> {
    const res = await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!res.ok) {
      throw new Error('Failed to register user');
    }
    
    return res.json();
  }

  export async function loginUser(credentials: { email: string; password: string }): Promise<any> {
    const res = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!res.ok) {
      throw new Error('Failed to login');
    }
  
    return res.json();
  }
  