import React, { createContext, useContext, useState } from "react";

interface BookedContextType {
  bookedDestinations: string[];
  toogleBookedDestination: (id: string) => void;
  isBooked: (id: string) => boolean;
}

const BookedContext = createContext<BookedContextType | undefined>(undefined);

export const BookedContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [bookedDestinations, setBookedDestinations] = useState<string[]>([]);

  const toogleBookedDestination = (id: string) => {
    setBookedDestinations((prevBooked) => {
      return prevBooked.includes(id)
        ? prevBooked.filter((bookedId) => bookedId !== id)
        : [...prevBooked, id];
    });
  };

  const isBooked = (id: string) => bookedDestinations.includes(id);

  return (
    <BookedContext.Provider
      value={{ isBooked, bookedDestinations, toogleBookedDestination }}
    >
      {children}
    </BookedContext.Provider>
  );
};

export const useBookedDestination = () => {
  const context = useContext(BookedContext);
  if (!context) {
    throw new Error("useBooked must be used within BookedContextProvider");
  }
  return context;
};
