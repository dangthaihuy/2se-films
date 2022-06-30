import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TheatersIcon from '@material-ui/icons/Theaters';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../constant/constant';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#222',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '40px 38%'
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'

    },
    infoHeader: {
        minWidth: '60%'
    },
    infoAvt: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        padding: '16px'
    },
    headerName: {
        fontSize: '24px',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    descriptions: {
        color: '#fff',
        maxHeight: '60px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontSize: '14px'
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    favorite: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgc: {
        padding: '10px',
        backgroundColor: '#333',
        borderRadius: '50%'
    }

}))

function NewItem({ anime }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <div>
                    <img className={classes.infoAvt} src={anime.cover_image} alt="" />
                </div>
                <div className={classes.infoHeader}>
                    <div className='info__header-name' style={{ color: anime.cover_color }}>
                        {anime.titles.jp || anime.titles.en || anime.titles.rj || 'Anime'}
                    </div>
                    <div className={classes.descriptions}>
                        {anime.descriptions.en || anime.descriptions.fr || anime.descriptions.it || anime.descriptions.jp || 'No description'}
                    </div>
                </div>
            </div>
            <div className={classes.body}>
                <div>
                    <img style={{ borderRadius: '10px', margin: '0 30px' }} src={anime.cover_image} alt="" />
                </div>
                <div className={classes.favorite}>
                    <div >
                        <FavoriteIcon className={classes.bgc} color='secondary' fontSize="large" />
                    </div>
                    <div style={{ color: '#ccc', marginBottom: '10px' }}>{anime.score || anime.id}</div>

                    <Link onClick={() => { scrollTop() }} to={`/anime/${anime.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <TheatersIcon className={classes.bgc} style={{ color: 'white' }} fontSize="large" />
                        </div>
                        <div style={{ color: '#ccc', marginBottom: '10px', marginLeft: '6px' }}>Watch</div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default NewItem;