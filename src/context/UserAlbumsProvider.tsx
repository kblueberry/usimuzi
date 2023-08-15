import { createContext, ReactNode, useEffect, useState } from "react";
import { DataFetchState } from "../dto/DataFetchState";
import { CONSTANTS } from "../constants/Constants";
import { Album } from "../dto/Album";
import { getUserAlbums } from "../helpers/Api";

export const UserAlbums = createContext<{
  state: DataFetchState<Album>;
  setPath: Function;
}>({
  state: CONSTANTS.initialFetchState,
  setPath: Function,
});

export default function UserAlbumsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [path, setPath] = useState<string>("");
  const [postsFetchState, setPostsFetchState] = useState<DataFetchState<Album>>(
    CONSTANTS.initialFetchState
  );

  useEffect(() => {
    if (path) {
      setPostsFetchState({
        data: [],
        loading: true,
        error: null,
      });
      getUserAlbums(Number(path))
        .then((result) =>
          setPostsFetchState({
            data: result.data,
            loading: false,
            error: null,
          })
        )
        .catch((error) =>
          setPostsFetchState({
            data: [],
            loading: false,
            error: error,
          })
        );
    }
  }, [path]);

  return (
    <UserAlbums.Provider value={{ state: postsFetchState, setPath }}>
      {children}
    </UserAlbums.Provider>
  );
}
