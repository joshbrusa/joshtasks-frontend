import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface User {
  name: string;
}

interface UserContext {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext<UserContext>({
  user: undefined,
  setUser: () => {},
});
