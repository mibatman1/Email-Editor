import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, ButtonGroup, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import PaddingIcon from '@mui/icons-material/Padding';
import BorderAllSharpIcon from '@mui/icons-material/BorderAllSharp';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AdsClickSharpIcon from '@mui/icons-material/AdsClickSharp';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ColorizeIcon from '@mui/icons-material/Colorize';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { useElementContext } from '../../context/ElementContext';
import { useState } from 'react';
import { style } from './type';
import { handleApplyCSS } from './utils/handleApplyCSS';
import Spacing from './components';
import Border from './components/Border';

const ElementEditor=()=>
{
  const {id, setShow}=useElementContext();
  const [style, setStyle]=useState<style>({
    color:'',
    backgroundColor:'',
    padding:'',
    border:'',
    text:'',
    href:'',
    target:''
  });

  const [target, setTarget] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value as string);
  };

  return (
    <div style={{overflow:'auto'}}>
      <Box sx={{marginTop: 2, display: 'flex', alignItems: 'flex-end', justifyContent:'end', marginBottom:2}}>
        <ButtonGroup variant="contained" aria-label="Basic button group" >
          <Button>Delete</Button>
          <Button>Copy</Button>
          <Button onClick={()=>setShow(false)} color='error'>Close</Button>
        </ButtonGroup>
      </Box>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>ACTION</b>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LinkSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="URL" variant="standard" value={style.href || ''}
              onChange={(e)=>setStyle({...style, href:e.target.value})} fullWidth
            />
            <AdsClickSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Target</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={target}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={'_blank'}>New Tab</MenuItem>
                <MenuItem value={'_self'}>Same Tab</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>BUTTON OPTIONS</b>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:2 }}>
              <FormatColorTextIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
              <TextField id="standard-basic" label="Button Text" variant="standard"
                value={style.text || ''}
                onChange={(e)=>setStyle({...style, text:e.target.value})} 
                fullWidth
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:2 }}>
              <ColorizeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
              <input type='color' value={style.color || ''}
                onChange={(e)=>setStyle({...style, color:e.target.value})}
              />
              <Typography sx={{marginLeft:1, color:'gray'}}>Text Color</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:2 }}>
              <FormatColorFillIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
              <input type='color' value={style.backgroundColor || ''}
                onChange={(e)=>setStyle({...style, backgroundColor:e.target.value})}
              />
              <Typography sx={{marginLeft:1, color:'gray'}}>Background Color</Typography>
            </Box>
            <Box>
              <ToggleButtonGroup
                value={'Left'}
                exclusive
                aria-label="text alignment"
                fullWidth
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <b>SPACING</b>
        </AccordionSummary>
        <AccordionDetails>
          <Spacing style={style} setStyle={setStyle}/>
          <Border/>
        </AccordionDetails>
      </Accordion>
      <Button sx={{marginTop: 3}} variant="contained" onClick={()=>handleApplyCSS(id,style)}>Apply</Button>
    </div>
  );
}

export default ElementEditor;





{/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PaddingIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Padding" variant="standard" 
              value={style.padding || ''}
              onChange={(e)=>setStyle({...style, padding:e.target.value})}
              fullWidth
            />
            <BorderAllSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Border" variant="standard" 
              value={style.border || ''}
              onChange={(e)=>setStyle({...style, border:e.target.value})}
              fullWidth
            />
          </Box> */}