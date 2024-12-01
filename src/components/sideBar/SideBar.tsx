"use client";
import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const links = [
  {
    title: "Dashboard",
    icon: <HomeOutlinedIcon />,
    current: false,
    children: [
      { title: "Overview", href: "/#" },
      { title: "Analytics", href: "/#" },
    ],
  },
  {
    title: "Company Profile",
    icon: <AccountCircleOutlinedIcon />,
    href: "/#",
    current: false,
  },
  {
    title: "My Jobs",
    icon: <WorkOutlineOutlinedIcon />,
    current: true, // Set as the default current
    children: [
      { title: "Posted Jobs", href: "/#" },
      { title: "Draft Jobs", href: "/#" },
    ],
  },
  {
    title: "CV Search",
    icon: <PersonSearchOutlinedIcon />,
    current: false,
    children: [
      { title: "Search Candidates", href: "/#" },
      { title: "Saved Searches", href: "/#" },
    ],
  },
  {
    title: "Billing & Subscription",
    icon: <RequestQuoteOutlinedIcon />,
    href: "/#",
    current: false,
  },
  {
    title: "Report",
    icon: <OutlinedFlagOutlinedIcon />,
    href: "/#",
    current: false,
  },
  {
    title: "Chat",
    icon: <MarkUnreadChatAltOutlinedIcon />,
    href: "/#",
    current: false,
  },
];

const settings = [
  { title: "Settings", icon: <SettingsIcon />, href: "/#", current: true },
  {
    title: "Help Center",
    icon: <HelpOutlineIcon />,
    href: "/#",
    current: false,
  },
];

export default function SideBar() {
  const [openDropdowns, setOpenDropdowns] = React.useState<string[]>([]);

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Box
      sx={{
        width: 300,
        height: "90vh",
        backgroundColor: "#f9fafb",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        color: "rgba(124, 132, 147, 0.80)",
      }}
    >
      <List
        sx={{
          padding: "18px",
        }}
      >
        {links.map((link) => (
          <React.Fragment key={link.title}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => link.children && toggleDropdown(link.title)}
                component={link.children ? "div" : "a"}
                href={link.href}
                sx={{
                  backgroundColor: link.current ? "#DEF0EB" : "transparent", // Conditionally set background color
                }}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.title} />
                {link.children &&
                  (openDropdowns.includes(link.title) ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  ))}
              </ListItemButton>
            </ListItem>
            {link.children && (
              <Collapse
                in={openDropdowns.includes(link.title)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {link.children.map((child) => (
                    <ListItem key={child.title} disablePadding>
                      <ListItemButton
                        component="a"
                        href={child.href}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={child.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
        <Divider sx={{ my: 2, backgroundColor: "gray" }} />
        <p className=" font-semibold">SETTINGS</p>
        {settings.map((setting) => (
          <ListItem key={setting.title} disablePadding>
            <ListItemButton
              component="a"
              href={setting.href}
              sx={{
                color: setting.current
                  ? "rgba(0, 0, 0, 0.50)"
                  : "rgba(124, 132, 147, 0.80)", // Conditionally set  color for settings
              }}
            >
              <ListItemIcon>{setting.icon}</ListItemIcon>
              <ListItemText primary={setting.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
