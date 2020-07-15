import React from 'react';

import {Typography, Box} from '@material-ui/core';
import walletImage from '../wallet-icon.png';

const Head = ({title}) => {
    return (
        <>
            <Box>
                <div className="header">
                    <img src={walletImage} alt='image' className="headerImg" />
                </div>            
            </Box>
        </>
    )
}

export default Head;