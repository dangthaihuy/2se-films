import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { scrollTop, WATCH_API } from '../../../constant/constant';


const useStyles = makeStyles((theme) => ({
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0
    },
    genres: {
        padding: '4px 8px',
        margin: '4px',
        backgroundColor: '#1a1a1a',
        color: '#ccc',
        fontSize: '16px',
        borderRadius: '10px',
        listStyle: 'none',
    },
    listEp: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0,
        color: 'white'
    },
    epItem: {
        padding: '4px 8px',
        margin: '4px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontSize: '16px',
        borderRadius: '5px',
        listStyle: 'none',


    },
    linkAnime: {
        textDecoration: 'none'
    }

}))

function AnimeInfo({ anime }) {
    const classes = useStyles()
    const param = useParams()

    const [item, setItem] = useState({})
    const [page, setPage] = useState(1)
    const [documents, setDocuments] = useState([])

    const api = anime && `${WATCH_API}${param.id}&page=${page}`;

    useEffect(() => {
        if (item.data && item.data.current_page < item.data.last_page) {
            setPage(item.data.current_page + 1);
        }
    });

    useEffect(() => {
        fetch(api)
            .then((respon) => respon.json())
            .then((data) => {
                setItem(data);
                {
                    data.status_code === 200 && setDocuments([...documents, ...data.data.documents])
                }
            });

    }, [page])

    return (
        <div>
            <h1 style={{ color: anime.cover_color }}>{(anime.titles &&
                (anime.titles.en || anime.titles.it || anime.titles.jp)) ||
                "Anime"}
            </h1>
            <ul className={classes.list}>
                {anime.genres && anime.genres.map((genre, id) => (
                    <li className={classes.genres} key={id}>
                        {genre}
                    </li>
                ))}
            </ul>
            {documents.length > 0 ?
                <>
                    <h2 className={classes.listEp}>Episodes</h2>
                    <ul className={classes.list}>
                        {documents && documents.map((ep, id) => (
                            <Link onClick={() => { scrollTop() }} className={classes.linkAnime} key={id} to={`/anime/${param.id}/${ep.number}`}>
                                <li className={classes.epItem}>{ep.number}</li>
                            </Link>
                        ))}
                    </ul>
                </> : <></>}


        </div>
    );
}

export default AnimeInfo;