import React from 'react'
import Dashboard from '@mui/icons-material/Dashboard';
import Leads from '@mui/icons-material/Leaderboard';
import Manager from '@mui/icons-material/Person2';
import SalesTeam from '@mui/icons-material/Groups2';



export const Sidebarlist = [
    {
        title: "Dashboard",
        icon: < Dashboard />,
        link: "./Dashboard"
    },
    {
        title: "Leads",
        icon: <Leads />,
        link: "./Leads",
    },
    {
        title: "Manager",
        icon: <Manager />,
        link: "./Manager",
    },
    {
        title: "Sales Team",
        icon: <SalesTeam />,
        link: "./SalesTeam",
    }
]

