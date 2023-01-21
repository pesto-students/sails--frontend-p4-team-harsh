import React from "react";
import Dashboard from "@mui/icons-material/Dashboard";
import Leads from "@mui/icons-material/Leaderboard";
import Manager from "@mui/icons-material/Person2";
import SalesTeam from "@mui/icons-material/Groups2";
import Username from "@mui/icons-material/AccountCircle";
import Reset from "@mui/icons-material/LockReset";
import Logout from "@mui/icons-material/Logout";
import BusinessIcon from "@mui/icons-material/Business";

export const Sidebarlist = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    link: "./",
  },
  {
    title: "Leads",
    icon: <Leads />,
    link: "./leads",
  },
  {
    title: "Managers",
    icon: <Manager />,
    link: "./manager",
  },
  {
    title: "Sales Team",
    icon: <SalesTeam />,
    link: "./sales-team",
  },
  {
    title: "Register Company",
    icon: <BusinessIcon />,
    link: "./register-company",
  },
];
export const Setting = [
  {
    title: "Username",
    icon: <Username />,
    link: "./username",
  },
  {
    title: "Reset Password",
    icon: <Reset />,
    link: "./reset-password",
  },
  {
    title: "Logout",
    icon: <Logout />,
    link: "./login",
  },
];
