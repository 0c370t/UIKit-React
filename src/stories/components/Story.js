import React from 'react';
import PropTypes from 'prop-types';

export function Story(props){
    return (
        <div className={"uk-container uk-margin-large-top"}>
            <div className={"uk-container"}>
                <h3>{props.title}</h3>
                <p>
                    This component is wrapped in a div.uk-container.uk-margin-large-top
                </p>
                <hr/>
            </div>
            {props.children}
        </div>
    )
}