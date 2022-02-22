import React from "react";
import { RichText } from "prismic-reactjs";

const Button = ({ slice }) => (
  <button
    style={{
      backgroundColor: slice.primary.color,
      padding: "1rem",
      borderRadius: "5px",
    }}
  >
    {slice.primary.texto}
  </button>
);

export default Button;
