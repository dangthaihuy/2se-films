import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Skeleton from '@mui/material/Skeleton';
function AnimeSkeleton({ length = 6 }) {
    return (
        <Box>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                m={2}
            >
                <Skeleton sx={{ bgcolor: 'grey.800' }} variant="rectangular" width='80%' height={200} />
            </Grid>
            <Grid container>

                {Array.from(new Array(length)).map((x, id) => (
                    <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                        <Box>
                            <Skeleton sx={{ bgcolor: 'grey.800' }} variant="rectangular" width={210} height={118} />
                            <Skeleton sx={{ bgcolor: 'grey.800' }} width={180} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default AnimeSkeleton;