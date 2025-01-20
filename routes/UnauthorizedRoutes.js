import React from "react";
import LoginScreen from "../screens/LoginScreen";

export default function UnauthorizedRoutes({ setIsAuthenticated }) {
  return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
}
