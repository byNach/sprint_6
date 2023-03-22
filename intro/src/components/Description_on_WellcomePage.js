import React from "react";
import {StyledDescriptionH3, StyledDescriptionP, StyledDescriptionDiv}  from '../styles/styled-description';

const Description = () => {
  return (
    <StyledDescriptionDiv>
      <StyledDescriptionH3>
        Descripció del projecte
      </StyledDescriptionH3>
      <StyledDescriptionP>
        Un/a client/a que té com a producte principal una web de gestió empresarial
        desenvolupada amb React, ens ha demanat que desenvolupem un tutorial,
        en el qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir
        en els consells, modificant-se el text d'ajuda i la imatge de fons.
      </StyledDescriptionP>
    </StyledDescriptionDiv>
  );
};

export default Description;