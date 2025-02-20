import { useState } from "react";

const validUser = {
  name: "Admin",
  email: "admin@mail.com",
  password: "admin123",
};

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const login = (email: string, password: string) => {
    if (email !== validUser.email || password !== validUser.password) {
      setError("Invalid username or password");
      return;
    }

    setEmail(email);
    setPassword(password);
    setIsLoggedIn(true);
    setUser(validUser);
  };

  return {
    isLoggedIn,
    user,
    email,
    password,
    error,
    setError,
    login,
    setIsLoggedIn,
  };
};

export default useAuth;
