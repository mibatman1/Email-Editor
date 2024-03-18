import { getDragAfterElement, handleDragOver, handleDrop } from '../../utils';
import { StyledGrid } from './editorZone.style';
import SVG from '../../assets/tiny-checkers.svg';
import { useState } from 'react';
import Modals from '../ElementEditor';
import { useElementContext } from '../../context/ElementContext';

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
  return (
    <StyledGrid id='editor_zone' item xs={12} md={12} className='containers' onDragOver={handleDragOver} onDrop={handleDrop}>
      {/* <img src={SVG} alt='paper' width={100} draggable={false}/> */}
    </StyledGrid>
  );
}

export default EditorZone;