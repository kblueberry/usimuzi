import { ListSubheader } from "@mui/material";

export default function PageHeading({ title }: { title: string }) {
  return (
    <ListSubheader>
      <h1 className="heading_h1">{title}</h1>
    </ListSubheader>
  );
}
