import React, { Fragment } from 'react'

function Scene(props) {
    return (
        <Fragment>
            <p>{props.phrase}</p> 
        </Fragment>
    )
};

export default Scene;