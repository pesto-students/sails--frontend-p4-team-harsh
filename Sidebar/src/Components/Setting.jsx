import React from 'react'
import Username from '@mui/icons-material/AccountCircle';
import Reset from '@mui/icons-material/LockReset';
import Logout from '@mui/icons-material/Logout';

export const Setting = [
    {
        title: "Username",
        icon: <Username />,
        link: "./Username"
    },
    {
        title: "Reset Password",
        icon: <Reset />,
        link: "./Reset Password",
    },
    {
        title: "Logout",
        icon: <Logout />,
        link: "./Logout",
    }
]
