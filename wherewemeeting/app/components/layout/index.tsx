import React, {ReactNode, useEffect, useState} from 'react';
import AccountMenu from "~/components/userInfo/AvatarMenuButton";
import MobileLayout from "~/components/layout/mobile/MobileLayout";
import {DrawTop} from "~/components/Drawer/DrawTop";
import Box from '@mui/material/Box';
import {DesktopLayout} from "~/components/layout/desktop/DesktopLayout";
import {Root} from "~/components/layout/shared/layout.styles";

interface LayoutIndexProps {
    children?: ReactNode
}

const LayoutIndex = ({}: LayoutIndexProps) => {
    const [_, setHeight] = useState<number | undefined>(undefined);
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        };
        updateWindowDimensions()

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);


    return (
        <main>
            <Root>
                { width && width < 768
                    ? <MobileLayout body={<Box padding={4}>This is the map baby</Box>}
                                    drawTop={<DrawTop/>}
                                    drawBody={<AccountMenu/>}
                    />
                    : <DesktopLayout  body={<Box padding={4}>This is the map baby</Box>}
                                      nav={<AccountMenu/>}
                    />
                }
            </Root>
        </main>
    );
};

export default LayoutIndex;
