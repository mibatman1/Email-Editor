import { getDragAfterElement, handleDragOver, handleDrop } from '../../utils';
import { StyledGrid } from './editorZone.style';
import SVG from '../../assets/tiny-checkers.svg';
import { useState } from 'react';
import Modals from '../ElementEditor';
import { useElementContext } from '../../context/ElementContext';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import { deleteElement } from './utils/deleteElement';

const EditorZone=()=> 
{
  const { id, show, setID, setShow } = useElementContext();

  const handleDrop=(event:React.DragEvent<HTMLDivElement>)=>
  {
      const container = event.currentTarget;
      const afterElement = getDragAfterElement(container, event.clientY);
      const draggable = document.querySelector('.dragging') as HTMLElement;
      if(!draggable.classList.contains('destination'))
      {
        const cloned=draggable.cloneNode(true) as HTMLElement;
        const id=new Date().getTime().toString();
        cloned.setAttribute('id',id)
        cloned.classList.add('destination');
        cloned.addEventListener('dragstart',()=>
        {
          cloned.classList.add('dragging')
        });
        cloned.addEventListener('dragend',()=>
        {
          cloned.classList.remove('dragging')
        });
        cloned.addEventListener('click',()=>
        {
          setID(id);
          setShow(true);
        })
        if(afterElement===null) 
        {
          container.appendChild(cloned);
        } 
        else 
        {
          container.insertBefore(cloned, afterElement);
        }
        cloned.classList.remove('dragging')
      }
      else
      {
        if(afterElement===null) 
        {
          container.appendChild(draggable);
        } 
        else 
        {
          container.insertBefore(draggable, afterElement);
        }
      }
  }

  const copyElement=(id:string)=>
  {
    const element=document.getElementById(id);
    if(element)
    {
      const clonedElement=element.cloneNode(true) as HTMLElement;
      const id=new Date().getTime().toString();
      clonedElement.setAttribute('id',id)
      clonedElement.addEventListener('dragstart',()=>
      {
        clonedElement.classList.add('dragging')
      });
      clonedElement.addEventListener('dragend',()=>
      {
        clonedElement.classList.remove('dragging')
      });
      clonedElement.addEventListener('click',()=>
      {
        setID(id);
        setShow(true);
      })
      console.log(element.parentNode)
      element.parentNode?.appendChild(clonedElement)
    }
  }

  const deleteElement=(id:string)=>
  {
      const element=document.getElementById(id);
      if(element)
      {
        element.parentNode?.removeChild(element);
        setShow(false);
      }
  }
  return (
    <StyledGrid id='editor_zone' item xs={12} md={12} className='containers' onDragOver={handleDragOver} onDrop={handleDrop}>
      {/* <img src={SVG} alt='paper' width={100} draggable={false}/> */}
      {
        show ? (
          <Box>
            <IconButton aria-label="delete" onClick={()=>deleteElement(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="copy" onClick={()=>copyElement(id)}>
              <CopyAllIcon/>
            </IconButton>
          </Box>
        ):null
      }
    </StyledGrid>
  );
}

export default EditorZone;