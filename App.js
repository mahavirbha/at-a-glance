import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import RoutesManager from "./routes/RoutesManager";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate a splash screen delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <RoutesManager
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  splashText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
