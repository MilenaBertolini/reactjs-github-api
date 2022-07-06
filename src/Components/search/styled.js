import styled, { css } from "styled-components";

export const Font = css `
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Clicker+Script&family=Cormorant+Upright:wght@300&family=Gentium+Plus&family=Hachi+Maru+Pop&family=Patrick+Hand&family=Source+Sans+Pro:wght@200&family=Tangerine&display=swap');
`;

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;

  h1 {
    font-family: 'Patrick Hand', cursive;
    font-weight: bold;
    font-size: 32px;
  }
`;