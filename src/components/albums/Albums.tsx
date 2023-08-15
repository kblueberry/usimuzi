import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import BackButton from "../common/BackButton";
import { CONSTANTS } from "../../constants/Constants";
import { UserAlbums } from "../../context/UserAlbumsProvider";
import GalleryList from "./GalleryList";
import PageHeading from "../common/PageHeading";

export default function Albums() {
  const { id } = useParams();
  const { state, setPath } = useContext(UserAlbums);

  useEffect(() => {
    setPath(id);
  }, [id, setPath]);

  return (
    <>
      <BackButton />
      <PageHeading title={CONSTANTS.titles.albums} />
      <GalleryList state={state} />
    </>
  );
}
