import { createContext } from "react";

interface registrationContextType {
  registerUser: (username: string, email: string, password: string) => void;
  loginUser: (username: string, password: string) => void ;
  setUsers: (users: any) => void;
  users: any;
  currentUser: any;
}

export const RegistrationContext = createContext<registrationContextType>({
  registerUser: () => {},
  loginUser: () => {},
  setUsers: () => {},
  users: null,
  currentUser: null,
});