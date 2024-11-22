import { auth, db } from "@/firebaseConfig";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  username: string | undefined;
  email: string | undefined;
  pictureUrl: string | undefined;
  uid: string | undefined;
}

interface UserContextType {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
  isAuthenticated: boolean | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  // Actualizar los datos del usuario desde Firestore
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
    const unsubscribe = onAuthStateChanged(auth, (userFromDb: FirebaseUser | null) => {
      if (userFromDb) {
        setIsAuthenticated(true);
        updateUserData(userFromDb.uid);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated }}>
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
