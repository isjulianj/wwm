import * as React from 'react';
import {Global} from '@emotion/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {drawerBleeding} from "~/components/Drawer/Drawer.utils";
import {LightBox} from "~/components/shared/LightBox";
import {MobileLayoutProps} from "~/components/layout/shared/LayoutComponentInter.utils";


export default function MobileLayout({drawTop, drawBody, body}: MobileLayoutProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    return (
        <>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(85% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            {/*TODO remove eventually*/}
            <Box sx={{textAlign: 'center', pt: 1}}>
                <Button onClick={toggleDrawer(true)}>Open</Button>
            </Box>
            {body}
            <SwipeableDrawer
                // container={container}
                anchor="bottom"
                BackdropProps={{invisible: true}}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {drawTop}
                <LightBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    {drawBody}
                </LightBox>
            </SwipeableDrawer>
        </>
    );
}
