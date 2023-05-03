import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Login from '../../Pages/Login&RegisterPage/Login/Login';
import Register from '../../Pages/Login&RegisterPage/Register/Register';

const LoginAndRegister = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginAndRegister;