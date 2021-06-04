import React from "react";
import Grid from "@material-ui/core/Grid";
import DigitButton from "./DigitButton";

const Keyboard = ({ onKeyPressed }) => {
  return (
    <Grid
      item
      container
      direction="row"
      xs={8}
      sm={5}
      md={4}
      lg={1}
      xl={1}
      xxl={1}  
      alignItems="center"
      justify="center"
      
    >
      {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
        <DigitButton key={num} digit={num} onClick={onKeyPressed} />
      ))}
    </Grid>
  );
};

export default Keyboard;
