import React from 'react';
import Header from '../Header'

const HOC = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
        </div>
    )
}
export default HOC;