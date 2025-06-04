"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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
interface UserContextProviderProps {
  children: ReactNode;
}

interface userFavorites {
  shortTermTopTracks?: string;
  mediumTermTopTracks?: string;
  longTermTopTracks?: string;
  shortTermTopArtists?: string;
  mediumTermTopArtists?: string;
  longTermTopArtists?: string;
}

const UserContext = createContext<{
  userData: UserContextType | null;
  setUserData: (userData: UserContextType | null) => void;
  userFavorites: userFavorites | null;
  setUserFavorites: (userFavorites: userFavorites | null) => void;
} | null>(null);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userData, setUserData] = useState<UserContextType | null>(null);
  const [userFavorites, setUserFavorites] = useState<userFavorites | null>(
    null
  );
  return (
    <UserContext.Provider
      value={{ userData, setUserData, userFavorites, setUserFavorites }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
}
