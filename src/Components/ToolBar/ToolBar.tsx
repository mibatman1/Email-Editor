import SideBar from "../SideBar/SideBar";
import ElementEditor from "../ElementEditor";
import { useState } from "react";
import ElementGroup from "../ElementGroup";
import { useElementContext } from "../../context/ElementContext";

const ToolBar=()=>
{
    const [selectedComponent, setSelectedComponent] = useState<string>();
    const {id, show, setID, setShow}=useElementContext();

    const renderComponent=(component:string)=> 
    {
        switch(component) 
        {
            case 'ElementEditor':
                return <ElementEditor/>;
            case 'ElementGroup':
                return <ElementGroup/>
            default:
                return <ElementEditor/>;
        }
    };
    
    return(
        <>
            {
                show ? (<ElementEditor/>):
                (
                    <div style={{marginTop:13, marginRight:50}}>
                        <SideBar setSelectedComponent={setSelectedComponent}/>
                        {selectedComponent && renderComponent(selectedComponent)}
                    </div>
                )
            }
        </>
    )
}

export default ToolBar;