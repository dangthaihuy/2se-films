import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../constant/constant';


const useStyles = makeStyles(theme => ({
    root: {
        cursor: 'pointer',
        backgroundColor: '#2a2a2a',
        borderRadius: '10px'
    },
    title: {
        padding: '14px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    img: {
        height: '340px',
        width: '100%',
        borderRadius: '10px'
    }
}))


function Anime({ anime }) {
    const classes = useStyles()
    return (
        <Link onClick={() => { scrollTop() }} to={`/anime/${anime.id}`} style={{ textDecoration: 'none' }}>
            <div className={classes.root}>
                <img className={classes.img} src={anime.cover_image} alt="" />
                <div className={classes.title} style={{ color: anime.cover_color }}>{anime.titles.en}</div>
            </div >
        </Link>
    );
}

export default Anime;