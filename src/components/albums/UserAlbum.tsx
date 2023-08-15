import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useNavigate } from "react-router-dom";
import { Album } from "../../dto/Album";
import "../albums/UserAlbum.scss";

export default function UserAlbum({ album }: { album: Album }) {
  const navigate = useNavigate();

  const openAlbum = () => {
    navigate(`/users/${album.userId}/albums/${album.id}`);
  };

  return (
    <div className="album_item" onClick={openAlbum}>
      <PermMediaIcon sx={{ width: "2em", height: "2em" }}></PermMediaIcon>
      <h3 className="album_item_title">{album.title}</h3>
    </div>
  );
}
