import ItemsList from "./ItemsList";
import { CONSTANTS } from "../constants/Constants";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserPosts } from "../context/UserPostsProvider";

export default function Posts() {
  const { id } = useParams();
  const { state, setPath } = useContext(UserPosts);

  useEffect(() => {
    setPath(id);
  }, [id, setPath]);

  return (
    <>
      <ItemsList title={CONSTANTS.titles.posts} state={state} />
    </>
  );
}
