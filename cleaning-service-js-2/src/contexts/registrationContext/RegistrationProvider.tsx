import { ReactNode, useState } from "react";
import { RegistrationContext } from "./RegistrationContext";
import axios from "axios";

export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
    
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); 


  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  const registerUser = async (newUser: any) => {
    try {
      await axios.post("http://localhost:3000/users", newUser);
      fetchUsers();
      console.log("this is en new user: ", newUser);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }


  const loginUser = async (username: any, password: string) => {
    try {
      const response = await axios.post(`http://localhost:3000/users`, {username, password});
      console.log("Login response:", response.data);
      const user = response.data;
  
      if (user && user.username === username && user.password === password) {
        setCurrentUser(user);
        console.log('Logged in user:', user);
      } else {
        console.log("LOGIN FAILED: User not found or invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  return (
    <RegistrationContext.Provider
      value={{
       users,
       setUsers,
       registerUser,
       loginUser,
       currentUser
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
