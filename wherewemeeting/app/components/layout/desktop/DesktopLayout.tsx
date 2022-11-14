import React from 'react';
import {DesktopLayoutProps} from "~/components/layout/shared/LayoutComponentInter.utils";
import {Drawer} from "@mui/material";

export const DesktopLayout = ({nav, body}: DesktopLayoutProps) => {
    return (
        <>
            <Drawer
                anchor={'left'}
                variant={'permanent'}
                // open={state[anchor]}
                // onClose={toggleDrawer(anchor, false)}
            >
                {nav}
            </Drawer>
            {body}
        </>
    )
};
