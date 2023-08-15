import { createContext, ReactNode, useEffect, useState } from "react";
import { DataFetchState } from "../dto/DataFetchState";
import { Post } from "../dto/Post";
import { CONSTANTS } from "../constants/Constants";
import { getUserPosts } from "../constants/Api";

export const UserPosts = createContext<{
  state: DataFetchState<Post>;
  setPath: Function;
}>({
  state: CONSTANTS.initialFetchState,
  setPath: Function,
});

export default function UserPostsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [path, setPath] = useState<string>("");
  const [postsFetchState, setPostsFetchState] = useState<DataFetchState<Post>>(
    CONSTANTS.initialFetchState
  );

  useEffect(() => {
    if (path) {
      setPostsFetchState({
        data: [],
        loading: true,
        error: null,
      });
      getUserPosts(Number(path))
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
    <UserPosts.Provider value={{ state: postsFetchState, setPath }}>
      {children}
    </UserPosts.Provider>
  );
}
