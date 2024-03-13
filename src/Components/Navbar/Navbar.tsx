import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { StyledAppBar, StyledNavbarButton } from './style';
import { handleExportHTML, handleSaveDesign } from './utils/saveDesign';

const Navbar=()=> 
{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <Toolbar>
          <Typography variant="h6" color="black" component="div" sx={{ flexGrow: 1 }}>
            React Email Editor v1.7.9 (Demo)
          </Typography>
          <StyledNavbarButton>Show Preview</StyledNavbarButton>
          <StyledNavbarButton onClick={handleSaveDesign}>Save Design</StyledNavbarButton>
          <StyledNavbarButton onClick={handleExportHTML}>Export HTML</StyledNavbarButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

export default Navbar;