import React from 'react'

import './error-indication.css';
import icon from './death-star.png'

const ErrorIndication = () => {
    return (
        <div className='error'>
            <img src={icon} alt=""/>
            <h2>BOOM</h2>
            <div>
                something has done terribly wrong
            </div>
            <div>
                ( but we already sent droids to fix it )
            </div>
        </div>
    )
};
export default ErrorIndication;