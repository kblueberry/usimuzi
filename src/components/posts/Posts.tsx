import ItemsList from "../common/ItemsList";
import { CONSTANTS } from "../../constants/Constants";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserPosts } from "../../context/UserPostsProvider";
import BackButton from "../common/BackButton";
import PageHeading from "../common/PageHeading";

export default function Posts() {
  const { id } = useParams();
  const { state, setPath } = useContext(UserPosts);

  useEffect(() => {
    setPath(id);
  }, [id, setPath]);

  return (
    <>
      <BackButton />
      <PageHeading title={CONSTANTS.titles.posts} />
      <ItemsList state={state} />
    </>
  );
}
