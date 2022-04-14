import React, { useState } from "react";
import { innovators } from "../../assets/data";
import { StyledInnovators, StyledOptions } from "./Innovator.css";
import InnovatorCard from "./InnovatorCard";

const Innovators = () => {
  const [innovator, setInnovator] = useState(innovators[0]);

  const handleInnovatorChange = (e) => {
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
    <StyledInnovators id="select-innovator">
      <StyledOptions>
        <label>Select an innovator...</label>
        <select onChange={handleInnovatorChange}>{innovatorOptions}</select>
      </StyledOptions>
      <InnovatorCard innovator={innovator} />
    </StyledInnovators>
  );
};

export default Innovators;
