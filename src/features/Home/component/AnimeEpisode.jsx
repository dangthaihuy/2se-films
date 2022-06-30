import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '600px',
        padding: '20px 0'
    }
}))


function AnimeEpisode({ id }) {
    const classes = useStyles()
    const location = useLocation()
    const [anime, setAnime] = useState({})

    const URLcut = `/anime/${id}/`

    const episode = location.pathname.replace(URLcut, '');

    useEffect(() => {
        fetch(`https://api.aniapi.com/v1/episode?anime_id=${id}&number=${episode}&source=dreamsub&locale=it`)
            .then(respon => respon.json())
            .then(data => {
                setAnime(data.data.documents[0]);
            })
    }, [episode])

    console.log(anime);

    return (
        <video className={classes.root} src={anime.video} controls title={anime.title || 'Anime'}></video>
    );
}

export default AnimeEpisode;