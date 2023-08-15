import { Alert, Snackbar, SnackbarOrigin } from "@mui/material";
import { useEffect, useState } from "react";

interface SnackBarState extends SnackbarOrigin {
  open: boolean;
}

export default function ErrorSnackBar({ error }: { error: Error }) {
  const [snackBarState, setSnackBarState] = useState<SnackBarState>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { open, vertical, horizontal } = snackBarState;

  useEffect(() => {
    setSnackBarState({
      open: true,
      vertical: "top",
      horizontal: "center",
    });
  });

  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      open={open}
      key={vertical + horizontal}
    >
      <Alert severity="error">
        An error occurred when fetching users: {error.message}
      </Alert>
    </Snackbar>
  );
}
