import React from 'react'
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../../CallComponents/VideoPlayer';
import Sidebar from '../../CallComponents/Sidebar';
import Notifications from '../../CallComponents/Notifications';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '0px 0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '200px',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100%',
    },
  }));

function Call() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">xyz</Typography>
              </AppBar>
              <VideoPlayer />
              <Sidebar>
                <Notifications />
              </Sidebar>
        </div>
    )
}

export default Call
