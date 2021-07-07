import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Badge, AppBar, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCartRounded } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assests/logo.png';
import useStyles from './styles';

const PrimarySearchBar = ({ totalItems }) => {
    const [mobileMoreAnchorE1, setMobileMoreAnchorE1] = useState(null)
    const location = useLocation();
    const classes = useStyles();
    const isMobileMenuOpen = Boolean(mobileMoreAnchorE1)
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const handleMobileMenuClose = () => setMobileMoreAnchorE1(null)


    const renderMobileMenu = (
        <Menu
            id={mobileMenuId}
            anchorEl={mobileMoreAnchorE1}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartRounded />
                        </Badge>
                    </IconButton>
                    <p>Cart</p>
                </MenuItem>
        </Menu>
    );
    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="TIMMYSHOP" height="25px" className={classes.image} /> TimmyShop
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCartRounded />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </>
    );
};

export default PrimarySearchBar;
