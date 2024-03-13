export const handleDragStart = (event: React.DragEvent<HTMLElement>) => 
{
    const target = event.target as HTMLElement;
    if(target) 
    {
        target.classList.add('dragging');
    }
}

export const handleDragEnd = (event: React.DragEvent<HTMLElement>) => 
{
    const target = event.target as HTMLElement;
    if (target) 
    {
        target.classList.remove('dragging');
    }
}

export const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => 
{
    event.preventDefault();
}

export const getDragAfterElement = (container: HTMLDivElement, y: number): HTMLElement => 
{
    const draggableElements = Array.from(container.querySelectorAll('.draggable:not(.dragging)'));
    return draggableElements.reduce<{ offset: number, element: HTMLElement | null }>((closest, child) => 
    {
        const box=(child as HTMLElement).getBoundingClientRect();
        const offset=y-box.top-box.height/2;
        if (offset < 0 && offset > closest.offset) 
        {
            return { offset: offset, element: child as HTMLElement };
        } 
        else 
        {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY, element:null}).element!;
}

export const handleDrop=(event:React.DragEvent<HTMLDivElement>)=>
{
    const container = event.currentTarget;
    const afterElement = getDragAfterElement(container, event.clientY);
    const draggable = document.querySelector('.dragging') as HTMLElement;
    if(!draggable.classList.contains('destination'))
    {
        const cloned=draggable.cloneNode(true) as HTMLElement;
        cloned.setAttribute('id',new Date().getTime() as unknown as string)
        cloned.classList.add('destination');
        cloned.addEventListener('dragstart',()=>
        {
            cloned.classList.add('dragging')
        });
        cloned.addEventListener('dragend',()=>
        {
            cloned.classList.remove('dragging')
        });
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