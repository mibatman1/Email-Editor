import { Box, ButtonGroup, IconButton, Switch, TextField, ToggleButtonGroup, Typography } from "@mui/material";
import PaddingIcon from '@mui/icons-material/Padding';
import BorderAllSharpIcon from '@mui/icons-material/BorderAllSharp';
import { style } from "../type";
import { Dispatch, SetStateAction, useState } from "react";
import { StyledButton, StyledButtonGroup, StyledParagraph } from "./style";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Spacing=(style:any, setStyle:Dispatch<SetStateAction<style>>)=>
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
                    <Typography sx={{color:'gray'}}>Padding</Typography>
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

export default Spacing;



{/* <Typography sx={{color:'gray'}}>All Sides</Typography>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <StyledButton className="increment-btn" onClick={handleIncrementCounter}>
                        <AddIcon/>
                    </StyledButton>
                    <StyledParagraph>{paddingCount}</StyledParagraph>
                    <StyledButton className="decrement-btn" onClick={handleDecrementCounter}>
                        <RemoveIcon/>
                    </StyledButton>
                </ButtonGroup> */}


 {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PaddingIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Padding" variant="standard" 
                    value={style.padding || ''}
                    onChange={(e)=>setStyle({...style, padding:e.target.value})}
                    fullWidth
                />
            </Box> */}


 {/* <BorderAllSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Border" variant="standard" 
                value={style.border || ''}
                onChange={(e)=>setStyle({...style, border:e.target.value})}
                fullWidth
            /> */}