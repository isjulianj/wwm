import {styled} from "@mui/material/styles";
import {grey} from "@mui/material/colors";

export const Root = styled('main')(({theme}) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));
