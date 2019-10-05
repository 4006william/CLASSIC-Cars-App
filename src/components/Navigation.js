import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// Import { Link } here //

const Navigation = () => {
    return (
        <AppBar position="sticky" style={{background: "green"}}>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    MadWhips.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        {/* Add Link here */}
                    </li>
                    <li className="nav-list-item">
                        {/* Add Link here */}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation