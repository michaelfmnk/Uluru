import React, { PureComponent } from 'react';
import { Grid, withStyles, Card, CardContent, Typography, CardMedia, Avatar } from '@material-ui/core';

const avatarSize = 180;

const styles = () => ({
   paper: {
       marginTop: '2em',
       padding: 0,
   }, 
   media: {
      height: 140,
   },
    avatar: { 
       width: avatarSize, 
       height: avatarSize, 
       marginTop: -1.1 * (avatarSize/2),
       marginLeft: (avatarSize * 0.05) + '%',
    },
    name: {
       fontSize: 30,
       marginTop: -0.9 * (avatarSize/2),
       marginLeft: (avatarSize * 0.18) + '%',
    },
    container: {
       marginTop: 70,
       padding: 0,
    },
    item: {
       margin: 2,
    }
});

class ProfilePopup extends PureComponent {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <Card className={classes.paper}>
                <CardMedia
                   className={classes.media}
                   image={"https://i.imgur.com/E5jRWCr.jpg"}/>
                <Avatar 
                    className={classes.avatar}
                    src={"https://i.imgur.com/GuAB8OE.jpg"}
                />
                <Typography className={classes.name}>
                    Neil deGrasse Tyson
                </Typography>
                <CardContent className={classes.container}>
                    <Grid container justify={"center"} spacing={100}>
                        <Grid 
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/1Ul1TMZ.jpg"}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/ojIO1li.jpg"}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/02F3ghL.jpg"}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/MRoS1qN.jpg"}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/5zQYr6o.jpg"}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/3Yjs9zY.jpg"}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/02F3ghL.jpg"}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}>
                            <CardMedia
                                className={classes.media}
                                image={"https://i.imgur.com/8f8T2AP.jpg"}
                            />
                        </Grid>
                    </Grid>
                    
                </CardContent>
    
            </Card>
        );
    }
}

export default withStyles(styles)(ProfilePopup);
