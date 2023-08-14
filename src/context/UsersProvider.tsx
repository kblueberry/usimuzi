import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../dto/User";
import { getUsers } from "../constants/Api";

interface UsersState {
  data: Array<User>;
  loading: boolean;
  error: Error | null;
}

const initialUsersState = {
  data: [],
  loading: false,
  error: null,
};

const UsersContext = createContext<UsersState>(initialUsersState);

export default function UsersProvider({ children }: { children: ReactNode }) {
  const [usersFetchState, setUsersFetchState] =
    useState<UsersState>(initialUsersState);

  useEffect(() => {
    setUsersFetchState({
      data: [],
      loading: true,
      error: null,
    });
    getUsers()
      .then((result) =>
        setUsersFetchState({
          data: result.data,
          loading: false,
          error: null,
        })
      )
      .catch((error) =>
        setUsersFetchState({
          data: [],
          loading: false,
          error: error,
        })
      );
  }, []);

  return (
    <UsersContext.Provider value={usersFetchState}>
      {children}
    </UsersContext.Provider>
  );
}
