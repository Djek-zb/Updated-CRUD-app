import React from 'react';
import { Link } from 'react-router-dom';

import styled from './SideBar.module.css';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const SideBar = () => {


    return (

        <div className={styled.sideBar}>

            <Link to='users' className={styled.links}> 

                  <PersonOutlineOutlinedIcon/> <span>Contacts</span>

            </Link>

            <Link to='modal' className={styled.links}>

                   <PersonAddAltOutlinedIcon/> <span>Create user</span>
                   
            </Link>

        </div>

    )
}

export default SideBar;
