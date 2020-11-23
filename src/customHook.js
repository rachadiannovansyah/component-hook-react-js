import React, { useState } from 'react'

function CustomHook(defaultValue) {
    const [state, setState] = useState(defaultValue);
    const handleState = () => {
        setState(currentState => currentState + 1)
    }

    const handleQuadra = () => {
        handleState();
        handleState();
        handleState();
        handleState();
    };

    return [
        state,
        handleState,
        handleQuadra
    ]
}

export default CustomHook