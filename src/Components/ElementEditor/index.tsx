import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, TextField } from '@mui/material';
import PaddingIcon from '@mui/icons-material/Padding';
import BorderAllSharpIcon from '@mui/icons-material/BorderAllSharp';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';
import AdsClickSharpIcon from '@mui/icons-material/AdsClickSharp';
import { useElementContext } from '../../context/ElementContext';
import { useState } from 'react';
import { style } from './type';
import { handleApplyCSS } from './utils/handleApplyCSS';

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

  return (
    <div>
      <button onClick={()=>setShow(false)}>Close</button>
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
              onChange={(e)=>setStyle({...style, href:e.target.value})}
            />
            <AdsClickSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Target" variant="standard" 
              value={style.target || ''} onChange={(e)=>setStyle({...style, target:e.target.value})}
            />
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
          <div>
            <p>Text Color</p>
            <input type='text' value={style.text || ''}
              onChange={(e)=>setStyle({...style, text:e.target.value})}
            />
            <p>Text Color</p>
            <input type='color' value={style.color || ''}
              onChange={(e)=>setStyle({...style, color:e.target.value})}
            />
            <p>Background Color</p>
            <input type='color' value={style.backgroundColor || ''}
              onChange={(e)=>setStyle({...style, backgroundColor:e.target.value})}
            />
          </div>
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
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PaddingIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Padding" variant="standard" 
              value={style.padding || ''}
              onChange={(e)=>setStyle({...style, padding:e.target.value})}
            />
            <BorderAllSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Border" variant="standard" 
              value={style.border || ''}
              onChange={(e)=>setStyle({...style, border:e.target.value})}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <button onClick={()=>handleApplyCSS(id,style)}>Apply</button>
    </div>
  );
}

export default ElementEditor;