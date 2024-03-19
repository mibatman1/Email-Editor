import React from "react";
import { CSSProperties, style } from "./Style";

export interface CSSContext
{
    CssProperties:CSSProperties;
    setCssProperties:React.Dispatch<React.SetStateAction<CssProperties>>;
}