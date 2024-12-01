// lib/network/users/userQueries.ts

import {
    collection,
    doc,
    getDocs,
    setDoc,
    updateDoc,
    getDoc,
  } from "firebase/firestore";
  import { auth, db, googleProvider } from "@/lib/firebase";
  import { User } from "@/lib/types/userType";
  import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    EmailAuthProvider,
    updatePassword,
    reauthenticateWithCredential,
    sendPasswordResetEmail,
    updateProfile,
  } from "firebase/auth";
  import { createSession, removeSession } from "@/lib/session";
  
  export const registerUser = async (
    user: User,
    email: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: user.name,
      });

      await sendEmailVerification(userCredential.user);
      const userRef = doc(db, "users", userCredential.user.uid);
      user.id = userCredential.user.uid;
      await setDoc(userRef, { ...user });
      await auth.signOut();
      console.log("User registered successfully");
      return true;
    } catch (error) {
      // console.error('Error registering user: ', error);
      return false;
    }
  };
  
  export const signInWithGoogle = async (): Promise<boolean> => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
  
      try {
        await updateDoc(userRef, {
          id: user.uid,
          name: user.displayName,
        });
      } catch (error) {
        // console.error("Error updating user details: ", error);
        await setDoc(userRef, {
          id: user.uid,
          name: user.displayName,
        }); 
      }
  
      const customToken = await user.getIdToken();
  
      await createSession(user.uid, customToken, false);
  
      // console.log("User signed in with Google successfully");
      return true;
    } catch (error) {
      // console.error('Error signing in with Google: ', error);
      return false;
    }
  };
  
  export const signInWithEmail = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
  
      if (!user.emailVerified) {
        // console.log('Email not verified');
        return false;
      }
  
      const customToken = await user.getIdToken();
  
      await createSession(user.uid, customToken, false);
  
      // console.log('User signed in and session created successfully:', user.uid);
      return true;
    } catch (error) {
      // console.error('Error signing in with email:', error);
      return false;
    }
  };
  
  export const updateUserPassword = async (
    currentPassword: string,
    newPassword: string,
  ): Promise<boolean> => {
    try {
      const user = auth.currentUser;
      if (!user) {
        // console.error('No user found');
        return false;
      }
  
      if (!user.email) {
        // console.error('No email found');
        return false;
      }
  
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword,
      );
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
  
      // console.log('Password updated successfully');
      return true;
    } catch (error) {
      // console.error('Error updating password:', error);
      return false;
    }
  };
  
  export const updateUser = async (
    userId: string,
    updatedDetails: Partial<User>,
  ): Promise<boolean> => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, updatedDetails);
      // console.log('User details updated successfully');
      return true;
    } catch (error) {
      // console.error('Error updating user details: ', error);
      return false;
    }
  };
  
  export const logoutUser = async (): Promise<boolean> => {
    try {
      await auth.signOut();
      await removeSession(false);
      // console.log('User logged out successfully');
      return true;
    } catch (error) {
      // console.error('Error logging out user: ', error);
      return false;
    }
  };
  
  export const getUserById = async (userId: string): Promise<User | null> => {
    try {
      const userRef = doc(db, "users", userId);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        return docSnap.data() as User;
      } else {
        // console.log('No such user!');
        return null;
      }
    } catch (error) {
      // console.error('Error fetching user details: ', error);
      return null;
    }
  };
  
  export const fetchUsers = async (): Promise<User[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users: User[] = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() } as User);
      });
      return users;
    } catch (error) {
      // console.error('Error fetching users: ', error);
      return [];
    }
  };
  
  export const forgotPassword = async (email: string): Promise<boolean> => {
    try {
      await sendPasswordResetEmail(auth, email);
      // console.log('Password reset email sent successfully');
      return true;
    } catch (error) {
      // console.error('Error sending password reset email: ', error);
      return false;
    }
  };
  