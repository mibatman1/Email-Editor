import { Box } from "@mui/material";
import { handleDragEnd, handleDragStart } from "../../utils";
import SideBar from "../SideBar/SideBar";
import { StyledButton, StyledPaper } from "./toolBar.style";

const ToolBar=()=>
{
    return(
        <div>
            <SideBar/>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                    },
                }}
            >
                <StyledPaper elevation={1}>
                    <StyledButton 
                        className="draggable" 
                        draggable 
                        onDragStart={handleDragStart} 
                        onDragEnd={handleDragEnd}
                    >
                        Button 1
                    </StyledButton>
                </StyledPaper>
                <StyledPaper elevation={1}/>
                <StyledPaper elevation={1}/>
                <StyledPaper elevation={1}/>
                <StyledPaper elevation={1}/>
                <StyledPaper elevation={1}/>
            </Box>
        </div>
    )
}

export default ToolBar;