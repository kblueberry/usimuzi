import { createContext, ReactNode, useEffect, useState } from "react";
import { getUsers } from "../helpers/Api";
import { DataFetchState } from "../dto/DataFetchState";
import { CONSTANTS } from "../constants/Constants";
import { User } from "../dto/User";

export const UsersContext = createContext<DataFetchState<User>>(
  CONSTANTS.initialFetchState
);

export default function UsersProvider({ children }: { children: ReactNode }) {
  const [usersFetchState, setUsersFetchState] = useState<DataFetchState<User>>(
    CONSTANTS.initialFetchState
  );

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
