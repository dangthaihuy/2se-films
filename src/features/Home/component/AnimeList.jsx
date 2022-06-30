import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import Anime from './Anime';

const useStyles = makeStyles(theme => ({
    item: {
        margin: '10px'
    }
}))


function AnimeList({ data }) {
    const classes = useStyles()

    return (
        <div >
            <Grid container>
                {data && data.map((anime, id) => (
                    <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.item}>

                            <Anime anime={anime} />
                        </div>

                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default AnimeList;