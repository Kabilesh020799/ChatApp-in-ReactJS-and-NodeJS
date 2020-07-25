import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import classes from './Join/Join.module.css';

const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    return (
        <div className={classes.joinOuterContainer}>
            <div className={classes.joinInnerContainer}>
                <h1 className={classes.heading}>Join</h1>
                <div><input placeholder="Name" className={classes.joinInput} type="text" onChange={(event)=> setName(event.target.value)}/> </div>
                <div><input placeholder="Room" className={classes.joinInput} type="text" onChange={(event) => setRoom(event.target.value)}/> </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className={classes.button} type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;