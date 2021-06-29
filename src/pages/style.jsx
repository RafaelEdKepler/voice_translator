import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AreaContainer = styled.div`
  box-sizing: border-box;
  border-style: dashed;
  height: 140px;
  width: 200px;
  margin: 2px;
  padding: 2px;
`;

export const ButtonTalk = styled.button`
  background: ${props => props.recording ? "red": "#F1C3F3"};
  border-style: none;
  width: 200px;
  margin: 0px 2px;
  padding: 2px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;