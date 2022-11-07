import React, {ReactNode} from 'react';
import {Box, Grid, GridItem} from "@chakra-ui/react";

interface LayoutIndexProps {
    children: ReactNode
}

function Gri(props: { gap: number, templateColumns: string, children: React.ReactNode }) {
    return null;
}

const LayoutIndex = ({children}: LayoutIndexProps) => {
    return (
        <main>
            <Grid
                templateAreas={`
                  "nav main"
                  "nav footer"`}
                // gridTemplateRows={'1fr 1fr 1fr'}
                gridTemplateColumns={'300px 1fr'}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    Nav
                </GridItem>
                <GridItem pl='2' area={'main'}>
                    {children}
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>

        </main>
    );
};

export default LayoutIndex;
