import { Box, ButtonGroup, Switch, Typography } from "@mui/material";
import { StyledButton, StyledParagraph } from "../style";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

const Border=()=>
{
    const [isChecked, setIsChecked]=useState<boolean>(false);
    const [paddingCount, setPaddingCount]=useState<number>(0);

    const handleIncrementCounter = () => 
    {
        setPaddingCount(paddingCount+1);
    };
    
    const handleDecrementCounter = () => 
    {
        if(paddingCount>=1)
            setPaddingCount(paddingCount-1);
    };

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    
    return(
        <div>
            <Box>
                <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
                    <Typography sx={{color:'gray'}}>Border</Typography>
                    <Switch checked={isChecked} onChange={handleSwitchChange}/>
                </Box>
                {
                    isChecked ? 
                    (
                        <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
                            <Box>
                                <Typography sx={{color:'gray'}}>Top</Typography>
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <StyledButton className="increment-btn" onClick={handleIncrementCounter}>
                                        <AddIcon/>
                                    </StyledButton>
                                    <StyledParagraph>{paddingCount}</StyledParagraph>
                                    <StyledButton className="decrement-btn" onClick={handleDecrementCounter}>
                                        <RemoveIcon/>
                                    </StyledButton>
                                </ButtonGroup>

                                <Typography sx={{color:'gray'}}>Right</Typography>
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <StyledButton className="increment-btn" onClick={handleIncrementCounter}>
                                        <AddIcon/>
                                    </StyledButton>
                                    <StyledParagraph>{paddingCount}</StyledParagraph>
                                    <StyledButton className="decrement-btn" onClick={handleDecrementCounter}>
                                        <RemoveIcon/>
                                    </StyledButton>
                                </ButtonGroup>
                            </Box>
                            <Box>
                                <Typography sx={{color:'gray'}}>Left</Typography>
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <StyledButton className="increment-btn" onClick={handleIncrementCounter}>
                                        <AddIcon/>
                                    </StyledButton>
                                    <StyledParagraph>{paddingCount}</StyledParagraph>
                                    <StyledButton className="decrement-btn" onClick={handleDecrementCounter}>
                                        <RemoveIcon/>
                                    </StyledButton>
                                </ButtonGroup>

                                <Typography sx={{color:'gray'}}>Bottom</Typography>
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <StyledButton className="increment-btn" onClick={handleIncrementCounter}>
                                        <AddIcon/>
                                    </StyledButton>
                                    <StyledParagraph>{paddingCount}</StyledParagraph>
                                    <StyledButton className="decrement-btn" onClick={handleDecrementCounter}>
                                        <RemoveIcon/>
                                    </StyledButton>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    ) 
                    :
                    (
                        <div>
                            <Typography sx={{color:'gray'}}>All Sides</Typography>
                            <ButtonGroup variant="outlined" aria-label="Basic button group">
                                <StyledButton className="increment-btn" onClick={handleIncrementCounter}>
                                    <AddIcon/>
                                </StyledButton>
                                <StyledParagraph>{paddingCount}</StyledParagraph>
                                <StyledButton className="decrement-btn" onClick={handleDecrementCounter}>
                                    <RemoveIcon/>
                                </StyledButton>
                            </ButtonGroup>
                        </div>
                    )
                }
                
            </Box>
           
           
        </div>
    )
}

export default Border;