import { createContext } from "react";
import { IUser } from "../../interfaces";

interface registrationContextType {
  registerUser: (newUser: IUser) => void;
  loginUser: (username: string, password: string) => void ;
  logoutUser: () => void;
  setUsers: (users: IUser[]) => void;
  users: IUser[];
  currentUser: IUser | null;
}

export const RegistrationContext = createContext<registrationContextType| undefined>(undefined);
  
  
  
//   {
//   registerUser: () => {},
//   loginUser: () => {},
//   logoutUser: () => {},
//   setUsers: () => {},
//   users: [],
//   currentUser: null,
// });