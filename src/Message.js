import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function PositionedSnackbar({ open, message, hideAndClearMessage }) {
  return (
    <div>
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={hideAndClearMessage}
      >
        <Alert onClose={hideAndClearMessage} severity={`${message.type}`}>
          {message.text}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default PositionedSnackbar;
