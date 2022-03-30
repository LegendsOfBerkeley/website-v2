import React from 'react';

export const ReactEmbeddedGoogleCalendar = ({ 
publicUrl = '',
width = `100%`,
height = `100%`
}) => { 
    if (publicUrl === '') return (<p>Please, provide public URL of your Google calendar</p>);
    return ( 
        <iframe src={publicUrl} style={{borderWidth:0, resize: "both", overflowX: "scroll"}}
            width={width} height={height}
            frameBorder="0" scrolling="no">
        </iframe>
    )
};