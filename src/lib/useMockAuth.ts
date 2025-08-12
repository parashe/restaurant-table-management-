// src/lib/useMockAuth.ts
import { useState, useEffect } from "react";

export function useMockAuth() {
  const [user, setUser] = useState({
    id: "dummy-user-id",
    email: "test@example.com",
    // add any other user properties you need
  });

  useEffect(() => {
    // Immediately "log in" user on mount
    setUser({
      id: "dummy-user-id",
      email: "test@example.com",
    });
  }, []);

  return { user };
}
