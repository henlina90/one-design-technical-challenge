import React, { useState } from "react";
import { innovators } from "../../assets/data";
import { StyledInnovators, StyledLabel, StyledOptions } from "./Innovator.css";
import InnovatorDetails from "./InnovatorDetails";

const Innovators = () => {
  const [innovator, setInnovator] = useState(innovators[0]);

  let handleInnovatorChange = (e) => {
    const data = innovators.find((innovator) => {
      return innovator.name === e.target.value;
    });
    setInnovator(data);
  };

  const innovatorOptions = innovators.map((innovator, index) => (
    <option key={index} value={innovator.name}>
      {innovator.name}
    </option>
  ));

  return (
    <StyledInnovators>
      <StyledOptions>
        <label>Select an innovator...</label>
        <select onChange={handleInnovatorChange}>{innovatorOptions}</select>
      </StyledOptions>
      <InnovatorDetails innovator={innovator} />
    </StyledInnovators>
  );
};

export default Innovators;
