"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { Badge } from "@mui/material";
import Image from "next/image";
import PrimeryButton from "../buttons/PrimeryButton";
import CustomDropdownMenu from "../dropdownMenu/CustomDropdownMenu";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "My Jobs", href: "#", current: false },
  { name: "CV Search", href: "#", current: false },
  { name: "Report", href: "#", current: false },
  { name: "Billing", href: "#", current: false },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElUser(null);
  };

  const handleToggleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    // If the menu is already open and clicked again, close it
    if (anchorElUser) {
      setAnchorElUser(null);
    } else {
      // Otherwise, open the menu
      setAnchorElUser(event.currentTarget);
    }
  };

  const handleToggleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    // If the menu is already open and clicked again, close it
    if (anchorElNav) {
      setAnchorElNav(null);
    } else {
      // Otherwise, open the menu
      setAnchorElNav(event.currentTarget);
    }
  };
  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff",
        height: "74px",
        justifyContent: "center",
        color: "rgba(0, 0, 0, 0.8)",
        marginBottom: "5px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleMobileMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {anchorElNav && (
              <div
                className="absolute z-10"
                style={{
                  top: "100px",
                  left: "10px",
                }}
              >
                <CustomDropdownMenu />
              </div>
            )}
          </Box>

          {/* Company Logo */}

          <Image
            src="/logoMediacova.png"
            alt="logo"
            width={100}
            height={74}
            priority
          />

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: item.current ? "#185D43" : "rgba(0, 0, 0, 0.8)", // Default color
                  display: "block",
                  fontWeight: "bold", // Bold for the current item
                  textDecoration: item.current ? "underline" : "none", // Underline for selected item
                  textDecorationColor: item.current ? "#185D43" : "transparent", // Green color for the underline
                  textTransform: "none",
                  "&:hover, &:focus": {
                    color: "#185D43", // Hover and focus color
                    textDecoration: "underline", // Remove underline on hover and focus
                    background: "none",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Notifications & Profile */}
          <Box sx={{ flexGrow: 0 }}>
            {/* Notifications & Profile */}

            <PrimeryButton text={"Add New Post"} />

            <IconButton size="large" color="inherit">
              <Badge
                sx={{
                  "& .MuiBadge-dot": {
                    backgroundColor: "#FF6550", // Custom color
                  },
                }}
                variant="dot"
              >
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton
              onClick={handleToggleUserMenu}
              sx={{ p: 0, ml: 2, display: { xs: "none", md: "unset" } }}
            >
              <Avatar alt="User Avatar" src="/profile.jpg" />
            </IconButton>
            {/* User Menu  */}
            {anchorElUser && (
              <div
                className="absolute z-10"
                style={{
                  top: "100px",
                  right: "10px",
                }}
              >
                <CustomDropdownMenu />
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
