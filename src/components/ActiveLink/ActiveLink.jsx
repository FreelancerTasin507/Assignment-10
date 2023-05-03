import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink 
        to={to}
        className={({isActive}) => isActive ? "bg-slate-400 mr-7 px-3 py-1 rounded": "mr-7 font-semibold" }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;