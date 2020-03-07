import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import logo from '../assets/img/TabLogo.png';
import {observer, FirebaseContext} from './Firebase';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const NavBar = props => {
    observer(props.firebase.auth, false);
    const classes1 = useStyles();
    return (
        <div className={classes1.root}>
        <AppBar color="transparent" position="static">
            <Container>
            <Toolbar>
            <Box p={1} className={classes1.title}>
            <Link component={RouterLink} to="/intro">
                <img height='30px' src={logo} alt="logo"/> 
                {/* <span className="bn-lgo align-middle">Collabnest</span> */}
            </Link>
            </Box>
            <Button className="bn12" component={RouterLink} to="/signin">Sign in</Button>
            <Button className="bn12" component={RouterLink} to="/signup">Create account</Button>
            </Toolbar>
            </Container>
        </AppBar>
        </div>
    );
}

const NavBarFbConsumer = props => (
  <div>
      <FirebaseContext.Consumer>
        {firebase => <NavBar firebase={firebase}/>}
      </FirebaseContext.Consumer>
  </div>
);

export default NavBarFbConsumer;