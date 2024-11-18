import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  user:
    | {
        username: string | undefined;
        email: string | undefined;
        pictureUrl: string | undefined;
        uid: string | undefined;
      }
    | undefined | null;
  setUser: React.Dispatch<
    React.SetStateAction<
      | {
          username: string | undefined;
          email: string | undefined;
          pictureUrl: string | undefined;
          uid: string | undefined;
        }
      | undefined | null
    >
  >;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<
    | {
        username: string | undefined;
        email: string | undefined;
        pictureUrl: string | undefined;
        uid: string | undefined;
      }
    | undefined | null
  >(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUser must be used within UserContextProvider"
    );
  }
  return context;
};
