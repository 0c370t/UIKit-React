import React from 'react';
import PropTypes from 'prop-types';

export default function AccordionItem(props){
    return (
        <li>
            <a className={"uk-accordion-title"} href={"#"}>{props.title}</a>
            <div className={"uk-accordion-content"}>
                {props.children}
            </div>
        </li>
    )
}

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired
};