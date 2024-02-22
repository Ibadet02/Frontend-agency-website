import styled from "styled-components";

export const StyledSection = styled.section<{ $height?: string }>`
  height: ${({ $height }) => $height || "auto"};
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;
