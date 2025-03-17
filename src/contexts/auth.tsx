import React, { createContext, useState, ReactNode } from "react";

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode; 
}

interface User {
  email: string;
  status: string;
}

interface AuthContextProps {
  user: User | null;
  signIn: (email: string, password: string, navigation: any) => void;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  function signIn(email: string, password: string, navigation: any): void {
    if (email !== "" && password !== "") {
      setUser({
        email: email,
        status: "ATIVO",
      });

      navigation.navigate("home");
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
