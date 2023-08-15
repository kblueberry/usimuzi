export default function UserPost({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <div className="list_item list_item_column">
      <h4 className="list_item_title">{title}</h4>
      <i className="list_item_subtitle">{text}</i>
    </div>
  );
}
