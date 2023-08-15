import { Button } from "@mui/material";
import { CONSTANTS } from "../../constants/Constants";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/")}>
      {CONSTANTS.actions.back}
    </Button>
  );
}
