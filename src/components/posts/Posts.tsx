import ItemsList from "../common/ItemsList";
import { CONSTANTS } from "../../constants/Constants";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserPosts } from "../../context/UserPostsProvider";
import BackButton from "../common/BackButton";

export default function Posts() {
  const { id } = useParams();
  const { state, setPath } = useContext(UserPosts);

  useEffect(() => {
    setPath(id);
  }, [id, setPath]);

  return (
    <>
      <BackButton />
      <ItemsList title={CONSTANTS.titles.posts} state={state} />
    </>
  );
}
