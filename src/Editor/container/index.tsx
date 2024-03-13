import { FC, Fragment } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TwoColumnLayout from "../../Components/Commmon/TwoColumnLayout";
import ToolBar from "../../Components/ToolBar/ToolBar";
import EditorZone from "../../Components/EditorZone/EditorZone";

const Editor: FC = (): JSX.Element => {
  return (
    <Fragment>
        <TwoColumnLayout
          LeftSection={<EditorZone/>}
          RightSection={<Container maxWidth="sm">
            <Box sx={{ my: 0 }}>
              <ToolBar/>
            </Box>
          </Container>}
        />
    </Fragment>
  );
};

export default Editor;


// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }