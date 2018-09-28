import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Drawer, IconButton, withStyles, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TopBarContainer from 'containers/layout/TopBarContainer';
import cx from 'classnames';
import { getAsideMenu } from 'data/asideMenu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        paddingTop: '3em',
    },
    drawerPaper: {
        position: 'fixed',
        height: '100%',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        backgroundColor: '#EDEDED',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});


class MaterialLayout extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired, // eslint-disable-line
        theme: PropTypes.object.isRequired, // eslint-disable-line
        children: PropTypes.node.isRequired,
    };

    state = {
        opened: false,
    };

    handleDrawerOpen = () => {
        this.setState({ opened: true });
    };

    handleDrawerClose = () => {
        this.setState({ opened: false });
    };

    render() {
        const {
            content,
            root,
            drawerPaper,
            drawerPaperClose,
            toolbar,
        } = this.props.classes;
        return (
            <div className={root}>
                <TopBarContainer />
                <Drawer
                    variant="permanent"
                    classes={{ paper: cx(drawerPaper, !this.state.opened && drawerPaperClose) }}
                >
                    <div className={toolbar}>
                        <IconButton onClick={this.state.opened ? this.handleDrawerClose : this.handleDrawerOpen}>
                            {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <List>
                        {
                            getAsideMenu().map(item => (
                                <ListItem
                                    key={item.path}
                                    button
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item.label}
                                    </ListItemText>

                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
                <main className={content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(MaterialLayout);
