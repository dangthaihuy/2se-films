import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/css';

import SwiperCore, {
    Navigation,
    Autoplay,
    Pagination,
    EffectCoverflow,
} from "swiper";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '30px 0',

    },
    slideImg: {
        width: '100%',
        height: '300px',
        position: 'relative',
        borderRadius: '20px',
        cursor: 'pointer'
    },
    slideName: {
        position: 'absolute',
        zIndex: 10,
        paddingLeft: '50px',
        bottom: 0,
        color: '#fff',
        textShadow: '0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),0px 18px 23px rgba(0, 0, 0, 0.1)'
    }
}))

function AnimeSwiper({ listAnime }) {
    const classes = useStyles()
    const slides = []
    listAnime.map((anime) => {
        slides.push(
            <SwiperSlide key={anime.anilist_id}>
                <Link to={`/anime/${anime.id}`}>
                    <img src={anime.banner_image} className={classes.slideImg} />
                    <h1 className={classes.slideName}>{anime.titles.en}</h1>
                </Link>

            </SwiperSlide>
        )
    })
    SwiperCore.use([Navigation, Autoplay, Pagination, EffectCoverflow]);

    return (
        <Box className={classes.root}>
            <Swiper
                navigation
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay
                effect="coverflow"
            >
                {slides}
            </Swiper>
        </Box >
    );
}

export default AnimeSwiper;