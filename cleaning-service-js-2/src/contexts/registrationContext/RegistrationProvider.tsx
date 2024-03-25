import { ReactNode, createContext, useState } from "react";
import axios from "axios";
import { IUser } from "../../interfaces";

interface registrationContextType {
  registerUser: (newUser: IUser) => void;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
  setUsers: (users: IUser[]) => void;
  users: IUser[];
  currentUser: IUser | null;
}

export const RegistrationContext = createContext<registrationContextType>({
  loginUser: () => {},
  registerUser: () => {},
  logoutUser: () => {},
  setUsers: () => {},
  users: [],
  currentUser: null,
});

export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const registerUser = async (newUser: IUser) => {
    try {
      await axios.post("http://localhost:3000/users", newUser);
      console.log("this is en new user: ", newUser);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const loginUser = async (username: string, password: string) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;
      const user = users.find(
        (registeredUser: IUser) =>
          registeredUser.username === username &&
          registeredUser.password === password
      );

      if (user) {
        setCurrentUser(user);
        console.log("Successful login! Användare som loggat in:", user);
        alert(`Välkommen ${user.username}!`);
      } else {
        console.log("LOGIN FAILED: Ogiltligt användarnamn eller lösenord");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logoutUser = () => {
    try {
      setCurrentUser(null);
      console.log("Logout successful!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <RegistrationContext.Provider
      value={{
        users,
        setUsers,
        registerUser,
        loginUser,
        logoutUser,
        currentUser,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
