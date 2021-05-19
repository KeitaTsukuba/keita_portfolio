import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Header() {
    const [state, setState] = React.useState({
        menu: false,
    });
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, ["menu"]: open });
    };

    const list = () => (
        <div
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const displayDesktop = () => {
        return (
            <Toolbar className="h-20">
                <Link href="/">
                    <HomeIcon />
                </Link>
                <p className="ml-4">小川恵太 ホームページ</p>
                <div style={{ flexGrow: 1 }}></div>
                {/* <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton> */}
            </Toolbar>
        );
    };

    return (
        <header>
            <AppBar>{displayDesktop()}</AppBar>
            <Drawer anchor={"right"} open={state["menu"]} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </header>
    );
}