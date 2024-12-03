// import { create } from 'zustand';
// import { 
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut as firebaseSignOut,
//   onAuthStateChanged,
//   User
// } from 'firebase/auth';
// import { auth } from '../config/firebase';

// interface AuthStore {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
//   signIn: (email: string, password: string) => Promise<void>;
//   signUp: (email: string, password: string) => Promise<void>;
//   signOut: () => Promise<void>;
// }

// export const useAuthStore = create<AuthStore>((set) => ({
//   user: null,
//   loading: true,
//   error: null,
//   signIn: async (email, password) => {
//     try {
//       set({ loading: true, error: null });
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       set({ error: (error as Error).message });
//     } finally {
//       set({ loading: false });
//     }
//   },
//   signUp: async (email, password) => {
//     try {
//       set({ loading: true, error: null });
//       await createUserWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       set({ error: (error as Error).message });
//     } finally {
//       set({ loading: false });
//     }
//   },
//   signOut: async () => {
//     try {
//       set({ loading: true, error: null });
//       await firebaseSignOut(auth);
//     } catch (error) {
//       set({ error: (error as Error).message });
//     } finally {
//       set({ loading: false });
//     }
//   },
// }));

// // Set up auth state listener
// onAuthStateChanged(auth, (user) => {
//   useAuthStore.setState({ user, loading: false });
// });