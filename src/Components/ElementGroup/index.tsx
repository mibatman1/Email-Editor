import { Box } from "@mui/material"
import { StyledButton, StyledPaper } from "./style"
import { handleDragEnd, handleDragStart } from "../../utils"

const ElementGroup=()=>
{
    return(
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
    )
}

export default ElementGroup;