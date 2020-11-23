import React, {useState} from 'react';
import customHook from './customHook'

// init
function BoxHookFunction() {
    const [state, setState] = useState({
        subscribe: false
    });

    const [like, handleLike, handleQuadraLike] = customHook(0);
    const [dislike, handleDisLike] = customHook(0);

    const handleSubcsribe = () => {
        setState({
            ...state,
            subscribe: !state.subscribe
        })
    }

    return (
        <div>
            <p>
                <button onClick={handleSubcsribe}> {state.subscribe === true ? 'Subscribe' : 'Unsubscribe' } </button>
                <span> {JSON.stringify(state.subscribe)} </span>
            </p>
            <p>
                <button onClick={handleLike}> Like </button>
                <span> {like} </span>
            </p>
            <p>
                <button onClick={handleDisLike}> Dislike </button>
                <span> {dislike} </span>
            </p>
            <p>
                <button onClick={handleQuadraLike}> QuadraLike </button>
                <span> {like} </span>
            </p>
        </div>
    )
}

export default BoxHookFunction