import React from 'react';
import {AvatarMenuButton} from "~/components/userLogin/AvatarMenuButton";
import {LoginButton} from "~/components/userLogin/LoginButton";
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
