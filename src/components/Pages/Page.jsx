import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateUser from '../Modal/CreateUser';
import Users from '../Users/Users';
import About from './About';

const Page = () => {
    return (
        <div>
            <Routes>
            <Route path='/' element={<About />} />
                <Route path='users' element={<Users />} />
                <Route path='modal' element={<CreateUser />} />
            </Routes>
        </div>
    )
}

export default Page;
