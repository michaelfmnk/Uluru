import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Paper, Tab, Tabs, withStyles } from '@material-ui/core';
import LoginContainer from 'containers/login/LoginContainer';
import { Route, Switch } from 'react-router';
import { LOGIN, REGISTER } from 'data/routes';
import RegisterContainer from 'containers/login/RegisterContainer';

const styles = () => ({
    paper: {
        backgroundImage: 'url(http://hdqwalls.com/wallpapers/hex-abstract-material-design-ad.jpg)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
        overflow: 'hidden',
    },
    card: {
        width: '20em',
        margin: '15em auto 0 auto',
        padding: '15px',
    },
    verifying: {
        width: '20em',
        margin: '1em auto',
        padding: '15px',
    },
    tabs: {
        marginBottom: '1em',
    },
});

class LoginLayout extends PureComponent {
    handleTabChange = (event, val) => this.props.push({ pathname: val, search: this.props.location.search });

    render() {
        const {
            classes,
        } = this.props;
        const value = this.props.match.path;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Card className={classes.card}>
                        <Tabs
                            className={classes.tabs}
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleTabChange}
                            fullWidth
                        >
                            <Tab
                                label="Login"
                                selected="true"
                                value={LOGIN}
                            />
                            <Tab
                                label="Registration"
                                value={REGISTER}
                            />
                        </Tabs>
                        <Switch>
                            <Route exact path={LOGIN} component={LoginContainer} />
                            <Route path={REGISTER} component={RegisterContainer} />
                        </Switch>
                    </Card>
                </Paper>
            </div>
        );
    }
}

LoginLayout.propTypes = {
    classes: PropTypes.object,
    push: PropTypes.func,
    match: PropTypes.object,
    location: PropTypes.object,
};

export default withStyles(styles)(LoginLayout);
