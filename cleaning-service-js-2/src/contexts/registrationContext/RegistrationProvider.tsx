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

  const loginUser = async (username: string, password: string) => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;
      const user = users.find((registeredUser: any) => registeredUser.username === username && registeredUser.password === password);

        if (user) {
          setCurrentUser(user);
          console.log('Successful login! Användare som loggat in:', user);
          alert(`Välkommen ${user.username}!`);
        } else {
          console.log('LOGIN FAILED: Ogiltligt användarnamn eller lösenord');
        }
      }  catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logoutUser = () => {
    try {
      setCurrentUser(null);
      console.log('Logout successful!');
    } catch (error) {
      console.error('Error logging out:', error);
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
       currentUser
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
