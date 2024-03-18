import { style } from "../type";

export const handleApplyCSS=(id:string,style:style)=>
{
    const element=document.getElementById(id);
    if(element)
    {
        element.innerHTML=style.text
        element.style.color=style.color;
        element.style.padding=style.padding;
        element.style.backgroundColor=style.backgroundColor
        element.style.border=style.border
        element.innerText=style.text
        element.setAttribute('href',style.href)
        element.setAttribute('target',style.target)
        console.log(element.style.color)
    }
}