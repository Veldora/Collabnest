import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";
import logo from '../assets/img/3.png';
import NavBar from '../Components/NavBar';
// import banner from '../assets/img/v2.jpg';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

const Intr = props => {
    const classes = useStyles();
    return (
        <div>
            <Helmet>
                <title>Collabnest</title>
            </Helmet>
            <NavBar>
            
                {/* <img src={banner}/> */}
                {/* <h1 className="bn-cap">CollabNest</h1> */}
                <div className="bn-capln">
                    <img src={logo} className="bn-cap" alt="CollabNest"/>
                </div>
                <div className="bn-but">
                    <Button className={classes.margin} variant="contained" color="primary" size="large" component={RouterLink} to="/signin">Get started</Button>
                </div>
            </NavBar>
        </div>
    );

}

export default Intr;