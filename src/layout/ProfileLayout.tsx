import React from 'react';
import { Outlet } from "react-router";
import Navbar from '../components/Navbar';

const ProfileLayout = ():React.ReactElement => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
        </React.Fragment>
    );
};

export default ProfileLayout;
