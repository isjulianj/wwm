import React from 'react';
import {AvatarMenuButton} from "~/components/userInfo/AvatarMenuButton";
import {LoginButton} from "~/components/userInfo/LoginButton";
import {User} from "@prisma/client";

interface UserLoginProps {
    user?: User
    override?: boolean
}

export const UserLogin = ({user, override}: UserLoginProps) => {

    return (
        <>
            {user || override ? (
                <AvatarMenuButton/>
            ) : (
                <LoginButton/>

            )}
        </>
    )
}
