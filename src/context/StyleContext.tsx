import { createContext, useState } from "react";
import { CSSContext } from "./types/Context";
import { CSSProperties } from "./types/Style";

export const StyleContext = createContext<CSSContext|undefined>(undefined);

export const CSSProvider=({ children }:any) => 
{
    const [ CssProperties, setCssProperties] = useState<CSSProperties>({
      color:'',
      backgroundColor:'',
      padding:'',
      paddingTop:'',
      paddingBottom:'',
      paddingRight:'',
      paddingLeft:'',
      border:'',
      borderTop:'',
      borderRight:'',
      borderLeft:'',
      borderBottom:'',
      lineHeight:'',
      borderTopLeftRadius:'',
      borderTopRightRadius:'',
      borderBottomRightRadius:'',
      borderBottomLeftRadius:'',
      width:'',
      fontFamily:'',
      fontWeight:'',
      fontSize:'',
      text:'',
      href:'',
      target:'',
    });
  
    return (
      <StyleContext.Provider value={{ CssProperties, setCssProperties }}>
        {children}
      </StyleContext.Provider>
    );
};