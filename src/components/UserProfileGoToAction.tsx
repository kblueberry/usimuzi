import { Link } from "@mui/material";
import { CONSTANTS } from "../constants/Labels";

export default function UserProfileGoToAction() {
  return (
    <div className="list_item_actions">
      <p className="list_item_subtitle">{CONSTANTS.actions.goTo}</p>

      <div className="links">
        {CONSTANTS.profileActions.map((option, index) => (
          <Link key={index} className="link_action">
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
}
