import { Grid } from '@mui/material';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Page from './Page';

import styled from './MainPage.module.css';

const MainPage = ({ state }) => {


    return (
        <Grid container>
            <Grid item xs={12} className={styled.navBar}>
                <NavBar />
            </Grid>
            <Grid item xs={2} className={styled.sideBar}>
                <SideBar />
            </Grid>
            <Grid item xs={10} className={styled.page}>
                <Page />
            </Grid>
        </Grid>
    )
}

export default MainPage;
