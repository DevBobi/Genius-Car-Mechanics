import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/2488754-ai.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;