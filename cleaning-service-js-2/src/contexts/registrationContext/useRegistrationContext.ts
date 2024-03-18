import { useContext } from "react";
import { RegistrationContext } from "./RegistrationContext";


export const useRegistrationContext = () => {
    const context = useContext(RegistrationContext);
    if (!context) {
      throw new Error('useRegistrationContext must be used within a RegistrationProvider');
    }
    return context;
  };