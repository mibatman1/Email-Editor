import { handleDragOver, handleDrop } from '../../utils';
import { StyledGrid } from './editorZone.style';
import SVG from '../../assets/graph-paper.svg';

const EditorZone=()=> 
{
  return (
    <StyledGrid id='editor_zone' item xs={12} md={12} className='containers' onDragOver={handleDragOver} onDrop={handleDrop}>
      {/* <img src={SVG} alt='paper' width={100}/> */}
    </StyledGrid>
  );
}

export default EditorZone;