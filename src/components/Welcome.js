import React, { Component } from 'react';

const Welcome=((props)=>{ 
    
        return(
            <div>
                <h1>Hey!</h1>
                <h2>{props.name} Welcome to Newton School.</h2>
            </div>
        );
    }
);

export default Welcome;