import { createContext, useContext, useState } from "react";
import { ElementID } from "./types/Element";

const ElementContext=createContext<ElementID|undefined>(undefined);

export const useElementContext=()=>
{
    const context=useContext(ElementContext);
    if(!context)
    {
        throw new Error("Something is wrong")
    }
    return context;
}

export const ElementContextProvider=({children}:any)=>
{
    const [id, setID]=useState<string>('');
    const [show, setShow]=useState<boolean>(false);

    const value: ElementID = 
    {
        id,
        show,
        setID,
        setShow
    };

    return <ElementContext.Provider value={value}>{children}</ElementContext.Provider>
}