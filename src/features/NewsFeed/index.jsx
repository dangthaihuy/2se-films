import { makeStyles } from '@material-ui/styles';
import { display } from '@mui/system';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewItem from './component/NewItem';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { scrollTop } from "../../constant/constant";
import NewsFeedSkeleton from './component/NewsFeedSkeleton'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#222',
        minHeight: '1000px'
    },
    onTop: {
        position: 'fixed',
        right: '50px',
        top: '650px',
        color: 'black',
        fontSize: '40px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        cursor: 'pointer'
    }
}))

function NewsFeed(props) {
    const classes = useStyles()
    const api = `https://api.aniapi.com/v1/random/anime/3/true`

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch(api)
            .then((respon) => respon.json())
            .then(data => {
                setList([...list].concat(data.data));
                setLoading(false)
            })

    }, [count])
    return (
        <div className={classes.root}>




            {loading ? <NewsFeedSkeleton /> :
                <InfiniteScroll
                    next={() => { setCount(count + 1) }}
                    dataLength={list.length}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    {list.map((item, id) => (
                        <NewItem key={id} anime={item} />
                    ))}
                </InfiniteScroll>}
            <ExpandLessIcon className={classes.onTop} onClick={() => { scrollTop() }}></ExpandLessIcon>

        </div>
    );
}

export default NewsFeed;