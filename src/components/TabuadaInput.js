import React, { useRef } from "react";
import Input from "@material-ui/core/Input";

const respostaHandle = (e) => {
  if (e.target.value !== "") {
    //Todo: Verify if this is needed yet or remmaped
    setResult(parseInt(e.target.value, 10));
  }
};

export default TabuadaInput = () => {
  const respostaRef = useRef(null);
  return (
    <Input
      id="respostaInput"
      type="number"
      inputRef={respostaRef}
      style={{ width: "50px" }}
      value={result}
      onChange={respostaHandle}
      autoFocus={true}
    />
  );
};
