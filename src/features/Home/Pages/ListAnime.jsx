import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AnimeList from '../component/AnimeList';
import AnimeSkeleton from '../component/AnimeSkeleton';
import AnimeSwiper from '../component/AnimeSwiper';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { scrollTop } from '../../../constant/constant'


const useStyles = makeStyles(theme => ({
    root: {

    },
    list: {
        padding: '0 30px'
    },
    onTop: {
        position: 'fixed',
        right: '50px',
        top: '650px',
        color: 'black',
        fontSize: '40px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        cursor: 'pointer'
    }
}))

function ListAnime(props) {

    const classes = useStyles()

    const [loading, setLoading] = useState(true)
    const [listAnime, setListAnime] = useState([])


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://api.aniapi.com/v1/anime')
                setListAnime(response.data.data.documents);
                setLoading(false)



            } catch (error) {
                console.log('lỗi fetch API');
            }
        })()
    }, [])
    return (
        <Box className={classes.root}>
            <AnimeSwiper listAnime={listAnime} />
            <Container>
                <Grid className={classes.list}>
                    {loading ?
                        <AnimeSkeleton length={16} /> :
                        <>
                            <h1 style={{ color: 'white', margin: '0 0 20px 0' }}>Anime</h1>
                            <AnimeList data={listAnime} />
                        </>
                    }
                </Grid>
            </Container>
            <ExpandLessIcon className={classes.onTop} onClick={() => { scrollTop() }}></ExpandLessIcon>


        </Box>
    );
}

export default ListAnime;