import { createContext, ReactNode, useEffect, useState } from "react";
import { getUsers, searchByUserName } from "../helpers/Api";
import { DataFetchState } from "../dto/DataFetchState";
import { CONSTANTS } from "../constants/Constants";
import { User } from "../dto/User";

export const UsersContext = createContext<{
  state: DataFetchState<User>;
  setSearchQuery: Function;
}>({
  state: CONSTANTS.initialFetchState,
  setSearchQuery: Function,
});

export default function UsersProvider({ children }: { children: ReactNode }) {
  const [usersFetchState, setUsersFetchState] = useState<DataFetchState<User>>(
    CONSTANTS.initialFetchState
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchUsers = () => {
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
  };

  const searchUser = (searchQuery: string) => {
    searchByUserName(searchQuery)
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
  };

  useEffect(() => {
    setUsersFetchState({
      data: [],
      loading: true,
      error: null,
    });
    if (!searchQuery) {
      fetchUsers();
    }
    searchUser(searchQuery);
  }, [searchQuery]);

  return (
    <UsersContext.Provider value={{ state: usersFetchState, setSearchQuery }}>
      {children}
    </UsersContext.Provider>
  );
}
