import { Box } from "@mui/material";
import { styled } from "styled-components";

export const StyledNavbarButton=styled.button`
  background-color: #000000;
  color: #efffff;
  height: 2.5rem;
  width: 9rem;
  margin-left: 0.5rem;
  border: 1px solid black;
  cursor: pointer;
  font-weight: bold;
`;

export const StyledAppBar=styled.div`
  background-color: #61dafb;
`;

export const StyledBox = styled(Box)(({ theme }) => ({

}));