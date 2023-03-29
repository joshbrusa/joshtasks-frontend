import { useState, useEffect } from "react";
import type { User } from "../context/UserContext";

export function useUser() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser({ name: "Bob" });
  }, []);

  return { user, setUser };
}
