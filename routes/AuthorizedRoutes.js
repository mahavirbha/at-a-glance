import React from "react";
import HomeScreen from "../screens/HomeScreen";

export default function AuthorizedRoutes({ setIsAuthenticated }) {
  return <HomeScreen onLogout={() => setIsAuthenticated(false)} />;
}
