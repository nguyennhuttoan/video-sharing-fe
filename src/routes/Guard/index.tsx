import { Navigate } from "react-router-dom";
import { useState } from "react";

export const Guard = ({ children }: { children: JSX.Element }) => {
  const [email] = useState(localStorage.getItem("email") || "");

  if (!email) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Guard;
