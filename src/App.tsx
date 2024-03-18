// import CssBaseline from "@mui/material/CssBaseline";
// import {
//   ThemeProvider as MuiThemeProvider,
// } from "@mui/material/styles";
import Navbar from "./Components/Navbar/Navbar";
import Editor from "./Editor/container";
import { ElementContextProvider } from "./context/ElementContext";
// import Routes from "./Routes";
// import theme from "./theme";

function App() {
  return (
    <ElementContextProvider>
      <div>
        <Navbar/>
        <Editor/>
      </div>
    </ElementContextProvider>
  );
}

export default App;
