import React from "react";
import { RichText } from "prismic-reactjs";

const NovoComponente = ({ slice }: NovoComponenteSlice) => {
  return (
    <div>
      <span>{slice.primary.titulo}</span>
      <div>
        {slice.items.map((tag, idx) => (
          <span key={idx} style={{ backgroundColor: tag.cor }}>
            {tag.texto}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NovoComponente;
