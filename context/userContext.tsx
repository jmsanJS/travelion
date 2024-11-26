import { auth, db } from "@/firebaseConfig";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  username: string | null;
  email: string | null;
  pictureUrl: string | null;
  uid: string | null;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateUserData = async (userId: string) => {
    try {
      const refDoc = doc(db, "users", userId);
      const docSnapshot = await getDoc(refDoc);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setUser({
          username: data.username,
          email: data.email,
          pictureUrl: data.profileUrl,
          uid: userId,
        });
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userFromDb: FirebaseUser | null) => {
      if (userFromDb) {
        setIsAuthenticated(true);
        await updateUserData(userFromDb.uid);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserContextProvider");
  }
  return context;
};
