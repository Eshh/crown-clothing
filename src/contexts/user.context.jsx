import { createContext, useState } from "react";

// context
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider - component

export const UsereProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
