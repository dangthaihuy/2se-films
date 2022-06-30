
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 200px',
        backgroundColor: '#222222',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBox: {
        backgroundColor: '#2a2a2a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '16px'

    },
    inputHeader: {
        color: '#fff',
        paddingBottom: '16px',
        fontSize: '20px'
    },
    inputSearch: {
        minWidth: '300px',
        height: '20px',
        backgroundColor: '#1a1a1a',
        padding: '6px 20px',
        outline: 'none',
        fontSize: '16px',
        borderRadius: '10px',
        color: '#999',
        border: '0'

    }
}))

function PageSearch(props) {
    const classes = useStyles()
    const navigate = useNavigate()

    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`)
    }
    return (
        <div className={classes.root}>
            <div className={classes.searchBox}>
                <div className={classes.inputHeader}>Search Anime</div>
                <form action="submit" onSubmit={handleSubmit} >
                    <input className={classes.inputSearch} type="text" placeholder='Write your anime' onChange={(e) => { setSearch(e.target.value) }} />
                </form>
            </div>
        </div>
    );

}

export default PageSearch;