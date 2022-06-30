import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ANIME_ID } from '../../../constant/constant'
import AnimeList from '../../Home/component/AnimeList';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 200px',
        backgroundColor: '#222222',
        minHeight: '92vh',
    },
    header: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#fff',
        padding: '20px 0'
    }
}))

function AnimeSearch() {
    const classes = useStyles()
    const [anime, setAnime] = useState()

    const { query } = useParams()


    useEffect(() => {
        const api = `${ANIME_ID}?title=${query}`
        fetch(api)
            .then(respon => respon.json())
            .then(data => {
                setAnime(data.data.documents);
            })
    }, [])
    console.log(anime);
    return (
        <div className={classes.root}>
            <div className={classes.header}>{`Search Result Of ${query}`}</div>
            <AnimeList data={anime} />
        </div>
    );
}

export default AnimeSearch;