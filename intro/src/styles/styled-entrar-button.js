import styled from "styled-components";

const EntrarButton = styled.button`
  min-width: 300px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(
    90deg,
    rgba(129, 230, 217, 1) 0%,
    rgba(79, 209, 197, 1) 100%
  );
  border: none;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: absolute;
  bottom: 8%;
  right: 6%;
  padding: 10px;
  animation: shadowPulse 1s infinite linear;
  
  &::before {
    content: '';
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #4FD1C5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &:hover {
    animation: sin-animacion 0s;
  }
  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
  
  @keyframes shadowPulse {
    0% {
      box-shadow: 0 0 8px 6px transparent,
      0 0 0 0 transparent,
      0 0 0 0 transparent;
    }

    10% {
      box-shadow: 0 0 8px 6px rgb(138 216 100),
      0 0 12px 10px transparent,
      0 0 12px 5px #4FD1C5;
    }

    80%, 100% {
      box-shadow: 0 0 8px 6px transparent,
      0 0 0 40px transparent,
      0 0 0 40px transparent;
    }
  }
  @keyframes sin-animacion {
  0% { }
  100% { }
}
`;

export default EntrarButton;