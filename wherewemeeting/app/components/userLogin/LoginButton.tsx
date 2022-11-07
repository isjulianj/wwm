import React from 'react';
import {Link} from "@remix-run/react";
import {Button} from "@chakra-ui/react";

export const LoginButton = () => {
    return (
        <Link
            to="/login"
            className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
        >
            <Button>Log in</Button>
        </Link>
    );
};
