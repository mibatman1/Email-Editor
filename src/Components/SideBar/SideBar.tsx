import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import { StyledButton, StyledContainer } from './sideBar.style';
const SideBar=()=>
{
    return(
        <StyledContainer>
            <StyledButton><InterestsOutlinedIcon sx={{fontSize:40}}/><div>Content</div></StyledButton>
            <StyledButton><WebOutlinedIcon sx={{fontSize:40}}/><div>Blocks</div></StyledButton>
            <StyledButton><PaletteOutlinedIcon sx={{fontSize:40}}/><div>Body</div></StyledButton>
        </StyledContainer>
    )
}

export default SideBar;