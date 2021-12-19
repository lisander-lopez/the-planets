import { NextPage } from 'next';
import React from 'react';

type Props = {
    children?: React.ReactNode;
    className?: string;
}
const BACKGROUND_PATH = 'assets/background-stars.svg';

const Background = ({children, className}: Props) => {
    return (
        <div className={`bg-darkBlue h-screen w-screen ${className}`} style={
                {
                    backgroundImage: `url(${BACKGROUND_PATH})`
                }
            }>  
            {children}
        </div>
    )
}

export default Background;