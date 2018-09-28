import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, withStyles, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const styles = () => ({
    toolBar: {
        backgroundColor: '#ffffff',
        height: '5em',
    },
    logo: {
        maxHeight: '3em',
    },
    menu: {
        position: 'absolute',
        left: '6em',
    },
    avatarMenu: {
        position: 'absolute',
        right: '3em',
    },
    avatarIcon: {
        height: '1.5em',
        width: '1.5em',
    },
});
class TopBar extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired, // eslint-disable-line
        theme: PropTypes.object.isRequired, // eslint-disable-line
        handleSignOut: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    render() {
        const {
            menu,
            toolBar,
            logo,
            avatarMenu,
            avatarIcon,
        } = this.props.classes;
        const { anchorEl } = this.state;

        const open = Boolean(anchorEl);

        return (
            <AppBar position="absolute">
                <Toolbar className={toolBar}>
                    <div className={menu}>
                        <img
                            className={logo}
                            alt="aldrin"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZt9iEbvu7dpo7nzFKkOhvdFIbla0nIEIbG6y_SdYgNqk3JgZnfw"
                        />
                    </div>
                    <div className={avatarMenu}>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle
                                className={avatarIcon}
                                color="primary"
                            />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={this.handleClose}
                            open={open}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.props.handleSignOut}>Sign Out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(TopBar);
