import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthFormModal from "./AuthFormModal";

import { IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { useMenuStyles } from "../styles/muiStyles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const MobileUserMenu = ({ user, logoutUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useMenuStyles();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    logoutUser();
    handleCloseMenu();
  };

  return (
    <div>
      {user ? (
        <IconButton
          onClick={handleOpenMenu}
          className={classes.userBtnMob}
          size="large"
        >
          <Avatar
            alt={user.username}
            src={`https://secure.gravatar.com/avatar/${user.id}?s=164&d=identicon`}
            className={classes.avatar}
          />
          <MoreVertIcon color="primary" />
        </IconButton>
      ) : (
        <IconButton
          onClick={handleOpenMenu}
          color="primary"
          className={classes.moreBtn}
          size="large"
        >
          <MoreVertIcon color="primary" />
        </IconButton>
      )}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        marginThreshold={0}
        elevation={1}
      >
        {user ? (
          <div>
            <MenuItem
              component={RouterLink}
              to={`/user/${user.username}`}
              onClick={handleCloseMenu}
            >
              <AccountCircleIcon className={classes.menuIcon} />
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>
              <PowerSettingsNewIcon className={classes.menuIcon} />
              Logout: {user.username}
            </MenuItem>
          </div>
        ) : (
          <AuthFormModal buttonType="mobile" closeMenu={handleCloseMenu} />
        )}
      </Menu>
    </div>
  );
};

export default MobileUserMenu;
