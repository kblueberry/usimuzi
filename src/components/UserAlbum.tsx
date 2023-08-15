import { Button } from "@mui/material";

export default function UserAlbum({ title }: { title: string }) {
  return (
    <div className="album_item">
      <h3>{title}</h3>
      <Button>Open album</Button>
    </div>
  );
}
