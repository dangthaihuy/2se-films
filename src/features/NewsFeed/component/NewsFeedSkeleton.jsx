import { Avatar, Box, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Skeleton } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

function NewsFeedSkeleton({ length = 6 }) {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            {Array.from(new Array(length)).map((x, id) => (
                <Grid item key={id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
                    <Box>
                        <Skeleton sx={{ bgcolor: 'grey.800' }} variant="circle" width={40} height={40} />
                        <Skeleton sx={{ bgcolor: 'grey.800' }} width={220} />
                        <Skeleton sx={{ bgcolor: 'grey.800' }} variant="rectangular" width={260} height={120} />
                    </Box>
                </Grid>
            ))}
        </Box>
    );
}

export default NewsFeedSkeleton;