import PermMediaIcon from "@mui/icons-material/PermMedia";

export default function UserAlbum({ title }: { title: string }) {
  const openAlbum = () => {};
  return (
    <div className="album_item" onClick={openAlbum}>
      <PermMediaIcon sx={{ width: "2em", height: "2em" }}></PermMediaIcon>
      <h3 className="album_item_title">{title}</h3>
    </div>
  );
}
