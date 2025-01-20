import React from "react";
import AuthorizedRoutes from "./AuthorizedRoutes";
import UnauthorizedRoutes from "./UnauthorizedRoutes";

export default function RoutesManager({ isAuthenticated, setIsAuthenticated }) {
  return isAuthenticated ? (
    <AuthorizedRoutes setIsAuthenticated={setIsAuthenticated} />
  ) : (
    <UnauthorizedRoutes setIsAuthenticated={setIsAuthenticated} />
  );
}
