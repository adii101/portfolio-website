import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, DocumentData, Timestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Quote request interface
export interface QuoteRequest {
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Timestamp;
}

// Function to submit a quote request to Firestore
export const submitQuoteRequest = async (data: Omit<QuoteRequest, "createdAt">): Promise<void> => {
  try {
    await addDoc(collection(db, "quoteRequests"), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error submitting quote request:", error);
    throw error;
  }
};

export { app, db, auth, googleProvider };