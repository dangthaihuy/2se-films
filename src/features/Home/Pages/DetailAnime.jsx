import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ANIME_ID } from '../../../constant/constant';
import AnimeEpisode from '../component/AnimeEpisode';
import AnimeInfo from '../component/AnimeInfo';
import AnimeTrailer from '../component/AnimeTrailer';


function DetailAnime(props) {
    const { id } = useParams()

    const location = useLocation()

    const [anime, setAnime] = useState({})

    const URLcut = `/anime/${id}`

    const episode = location.pathname.replace(URLcut, '');


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${ANIME_ID}/${id}`)
                setAnime(data.data)
            } catch (error) {
                console.log('fetch anime api lỗi');
            }
        })()
    }, [])



    return (
        <div>
            {episode === '' ? <AnimeTrailer anime={anime} /> : <AnimeEpisode id={id} />}
            <AnimeInfo anime={anime} />
        </div>
    );
}

export default DetailAnime;