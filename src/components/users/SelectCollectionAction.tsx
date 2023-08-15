import { Link } from "@mui/material";
import { CONSTANTS } from "../../constants/Constants";
import { useNavigate } from "react-router-dom";

export default function SelectCollectionAction({ id }: { id: number }) {
  const navigate = useNavigate();

  const goTo = (option: string) => {
    navigate(`users/${id}/${option.toLowerCase()}`);
  };

  return (
    <div className="list_item_actions">
      <p className="list_item_subtitle">{CONSTANTS.actions.goTo}</p>

      <div className="links">
        {CONSTANTS.profileActions.map((option, index) => (
          <Link
            key={index}
            className="link_action"
            onClick={() => goTo(option)}
          >
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
}
