import React from 'react';


export function withAlign(element, orientation, screenSize){
    let newClass = "uk-align-" + orientation;
    if(screenSize)
        newClass += "@" + screenSize;
    let newElement = React.cloneElement(element, {className: newClass});

    return newElement;
}