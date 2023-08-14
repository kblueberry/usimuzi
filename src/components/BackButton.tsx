import { Link } from "@mui/material";
import { CONSTANTS } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Link className="link_action back_button" onClick={() => navigate("/")}>
      {CONSTANTS.actions.backToUsers}
    </Link>
  );
}
