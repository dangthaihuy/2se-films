import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../grid.css'
import './header.css'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

function Header(props) {
    const [showOption, setShowOption] = useState(false)
    const handleClickIcon = () => {
        setShowOption(!showOption)
    }
    return (
        <div className='root'>
            <div className="grid wide">
                <div className="header">
                    <div className="">
                        <Link to='/'>
                            <img src="https://i.imgur.com/ENGTaK0.png" />
                        </Link>

                    </div>
                    <div className="">
                        {showOption ?
                            <IconButton onClick={handleClickIcon}>
                                <CloseIcon fontSize='large' color="primary" />
                            </IconButton>
                            :
                            <IconButton onClick={handleClickIcon}>
                                <ExpandMoreIcon fontSize='large' color="primary" />
                            </IconButton>
                        }
                        <Link to='/login'>
                            <IconButton>
                                <AccountCircleIcon fontSize='large' color="primary" />
                            </IconButton>
                        </Link>
                    </div>

                    <div className='header_list' style={{ display: `${showOption ? 'block' : 'none'}`, zIndex: '5' }}>
                        <Link to='/'>
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                        </Link>
                        <Link to='/newsfeed'>
                            <IconButton>
                                <FiberNewIcon />
                            </IconButton>
                        </Link>
                        <Link to='/search'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Link>





                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;