"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// create a type for the user data
interface UserContextType {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
}
// create a type for the provider for the user data
interface UserContextProviderProps {
  children: ReactNode;
}

// create a context for the user data
const UserContext = createContext<UserContextType | null>(null);

// create a provider for the user data
export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userData, setUserData] = useState<UserContextType | null>(null);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
