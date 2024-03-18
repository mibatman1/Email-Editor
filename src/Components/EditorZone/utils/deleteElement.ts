export const deleteElement=(id:string)=>
{
    const element=document.getElementById(id);
    if(element)
    {
        element.parentNode?.removeChild(element);
    }
}

// export const copyElement=(id:string)=>
// {
//     const element=document.getElementById(id);
//     if(element)
//     {
//         const clonedElement=element.cloneNode(true);
//         clonedElement.addEventListener
//     }
// }