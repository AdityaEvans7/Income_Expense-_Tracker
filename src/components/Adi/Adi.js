import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";


function Adi() {

  const {width, height} = useWindowSize()
  console.log(width, height)



  const moveAdi = keyframes`
     0%{
         transform: translate(0, 0);
      }
     50%{
         transform: translate(${width}px, ${height / 2}px);
      }
      100%{
          transform: translate(0, 0);
      }
    `;

  const AdiStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-right: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(400px);
    animation: ${moveAdi} 15s alternate linear infinite;
  `;
  return <AdiStyled>Adi</AdiStyled>;
}

export default Adi;
