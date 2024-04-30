// authentication-store.ts
import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  // other authentication-related state
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  accessToken: null,
  // other initial state properties
  login: async (username: string, password: string) => {
    try {
      // Example: Send login request to server and handle response
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Assuming server returns authentication token upon successful login
      const { accessToken } = await response.json();

      // Update authentication state in the store
      set({ isAuthenticated: true, accessToken });
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Propagate the error for handling in the UI
    }
  },
}));

export default useAuthStore;
