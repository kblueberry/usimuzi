import { Link } from "@mui/material";

const selectOptions = ["Posts", "Albums"];

export default function UserProfileGoToAction() {
  return (
    <div className="list_item_actions">
      <p className="list_item_subtitle">Go to</p>

      <div className="links">
        {selectOptions.map((option, index) => (
          <Link key={index} className="link_action">
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
}
