import { ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";

export const StyledButtonGroup=styled(ToggleButtonGroup)`
    border: 1px solid #3aaee0;
`;

// export const StyledButtonGroup=styled.div`
//     display: flex;
//     align-items: center;
//     background-color: #fff;
//     border-radius: 8px;
//     overflow: hidden;
//     border: 1px solid #F5F8FB;
//     transition: border 0.3s ease;
// `;

export const StyledButton=styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4097fe;
    background-color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
`;

export const StyledParagraph=styled.p`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #F5F8FB;
    border-right: 1px solid #F5F8FB;
`;