import React from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import useStyles from './navbarStyles';

export const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.nav}>
                <Toolbar className={classes.tool}>
                    <Link href="/add" exact="true" underline='none' color='inherit' className={classes.root}>
                        Add User
                    </Link>
                    <Link href="/" exact="true" underline='none' color="inherit" className={classes.root} >
                        All Users
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar
