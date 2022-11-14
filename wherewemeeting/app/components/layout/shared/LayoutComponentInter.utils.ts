import {ReactNode} from "react";

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface MobileLayoutProps {
    drawTop: ReactNode,
    drawBody: ReactNode,
    body: ReactNode,
    children?: ReactNode
}

export interface DesktopLayoutProps {
    nav?: ReactNode,
    body?: ReactNode,
    children?: ReactNode
}
