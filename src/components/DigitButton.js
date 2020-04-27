import React from "react";
import Button from "@material-ui/core/Button";

const DigitButton = ({ digit, onClick }) => {
  return (
    <Button
      style={{ margin: "1px 1px" }}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      {digit}
    </Button>
  );
};

export default DigitButton;
