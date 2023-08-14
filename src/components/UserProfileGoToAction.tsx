import { Link } from "@mui/material";
import { CONSTANTS } from "../constants/Labels";

export default function UserProfileGoToAction() {
  const goTo = () => {};

  return (
    <div className="list_item_actions">
      <p className="list_item_subtitle">{CONSTANTS.actions.goTo}</p>

      <div className="links">
        {CONSTANTS.profileActions.map((option, index) => (
          <Link key={index} className="link_action" onClick={() => goTo()}>
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
}
