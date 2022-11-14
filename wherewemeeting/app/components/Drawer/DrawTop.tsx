import Typography from "@mui/material/Typography";
import * as React from "react";
import {drawerBleeding} from "~/components/Drawer/Drawer.utils";
import {LightBox} from "~/components/shared/LightBox";
import { Puller } from "./Drawer.styles";




export function DrawTop() {
    return <LightBox
        sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            height: drawerBleeding,
        }}
    >
        <Puller/>
        <Typography sx={{p: 2, color: "text.secondary"}}>51 results</Typography>
    </LightBox>;
}
