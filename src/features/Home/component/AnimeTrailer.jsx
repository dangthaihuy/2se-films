import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px 0'
    },
    video: {
        width: '100%',
        height: '600px',
        border: 'none'
    },
    bannerImg: {
        width: '100%',
        height: '600px',
    }
}))

function AnimeTrailer({ anime }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {anime.trailer_url ?
                (<iframe
                    className={classes.video}
                    src={anime.trailer_url || "https://www.youtube.com/embed/_uTvqumZBqY"}
                    title={
                        anime.titles &&
                        (anime.titles.en || anime.titles.it || anime.titles.jp || "Anime")
                    }

                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />)
                : (<img className={classes.bannerImg} src={anime.banner_image} alt="" />)
            }
        </div>
    );
}

export default AnimeTrailer;