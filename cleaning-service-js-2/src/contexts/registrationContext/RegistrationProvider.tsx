import { ReactNode, useEffect, useState } from "react";
import { RegistrationContext } from "./RegistrationContext";
import axios from "axios";

export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
    
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    fetchUsers();
  }, []);

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
      await axios.post("http://localhost:3000/register", newUser);
      fetchUsers();
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  const loginUser = async (credentials: any) => {
    try {

      const response = await axios.post("http://localhost:3000/login", credentials);

      setCurrentUser(response.data);
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
