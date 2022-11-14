import React from 'react';
import {Typography} from "@mui/material";
import {Link, } from "@remix-run/react";
import {Link as MUILink} from "@mui/material"
import {useUser} from "~/utils";


export default function TripsPage() {
    // const data = useLoaderData<typeof loader>();
    const user = useUser();

    return (
        <div>
            <header>
                <Typography variant='body1' component="h2">
                    <Link to=".">My trips</Link>
                </Typography>
                <p>{user.email}</p>
            </header>
            <main>
                <div>
                    <Link to="new">
                        ➕ New Note
                        <MUILink href="#" underline="none">
                            {'underline="none"'}
                        </MUILink>
                    </Link>
                    <hr/>

                    {/*{data?.noteListItems?.length === 0 ? (*/}
                    {/*    <p className="p-4">No notes yet</p>*/}
                    {/*) : (*/}
                    {/*    <ol>*/}
                    {/*        {data?.noteListItems?.map((note) => (*/}
                    {/*            <li key={note.id}>*/}
                    {/*                <NavLink*/}
                    {/*                    className={({isActive}) =>*/}
                    {/*                        `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`*/}
                    {/*                    }*/}
                    {/*                    to={note.id}*/}
                    {/*                >*/}
                    {/*                    📝 {note.title}*/}
                    {/*                </NavLink>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ol>*/}
                    {/*)}*/}
                </div>

                {/*<div className="flex-1 p-6">*/}
                {/*    <Outlet/>*/}
                {/*</div>*/}
            </main>
        </div>
    );
}



