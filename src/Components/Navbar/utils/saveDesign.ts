import HTMLtoJSON from "./HTMLToJSON";

export const handleSaveDesign=()=>
{
    const htmlNode=document.getElementById("editor_zone");
    if(htmlNode)
        HTMLtoJSON(htmlNode);
    alert("Design JSON has been logged into the Console");
}

export const handleExportHTML=()=>
{
    alert("HTML has been exported into the Console");
}