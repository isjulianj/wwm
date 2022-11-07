import React from 'react';
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/menu";
import {Avatar} from "@chakra-ui/react";
import {Link} from "@remix-run/react";
import {AddIcon} from "@chakra-ui/icons";
import styled from "@emotion/styled";

// TODO - move into own file
const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`

export const AvatarMenuButton = () => {
    return (
        <div style={{height: '100%'}}>
            <div style={{height: '100%', position: 'absolute', top: 16, right: 16}}>
        <Menu>
            <MenuButton
                as={Avatar}
                aria-label='Options'
                icon={<StyledAvatar name='Julian Jackson' src='https://avatars.githubusercontent.com/u/20231881?v=4'/>}
                variant='outline'

            />
            <MenuList>
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                        to="/join"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                    >
                        <MenuItem command=''>
                            Meetings
                        </MenuItem>
                    </Link>
                    <Link
                        to="/logout"
                        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                    >
                        <MenuItem>
                           Log out
                        </MenuItem>
                    </Link>
                </div>

            </MenuList>
        </Menu>
            </div>
        </div>
    );
};

