import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './home.css';
import ListAnime from './Pages/ListAnime';
import DetailAnime from './Pages/DetailAnime';

function Home(props) {

    return (
        <Box className='home' >
            <Routes>
                <Route path='/*' element={<ListAnime />} />
                <Route path='/anime/:id/*' element={<DetailAnime />} />
            </Routes>
        </Box>
    );
}

export default Home;