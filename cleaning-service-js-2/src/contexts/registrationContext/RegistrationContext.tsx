import { createContext } from "react";
import { IUser } from "../../interfaces";

interface registrationContextType {
  registerUser: (username: string, email: string, password: string) => void;
  loginUser: (username: string, password: string) => void ;
  logoutUser: () => void;
  setUsers: (users: any) => void;
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