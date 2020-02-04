import React from 'react';
import PropTypes from 'prop-types';
/*
    Built from https://getuikit.com/docs/accordion
 */
export default function Accordion(props) {
    let dataUkAccordion = "";
    /*
    Only Overwrite default behavior
     */
    if(props.active){
        dataUkAccordion += "; active: " + props.active.toString();
    }
    if(!props.animation){
        dataUkAccordion += "; animation: false";
    }
    if(!props.collapsible){
        dataUkAccordion += ";collapsible: false";
    }
    if(props.duration){
        dataUkAccordion += ";duration: " + props.duration.toString();
    }
    if(props.multiple){
        dataUkAccordion += ";multiple: true";
    }
    if(props.transition){2000
        dataUkAccordion += ";transition: " + props.transition.toString();
    }
    return (
    <ul data-uk-accordion={dataUkAccordion}>
        {props.children}
    </ul>
    );
};


Accordion.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    collapsible: PropTypes.bool,
    active: PropTypes.number,
    animation: PropTypes.bool,
    duration: PropTypes.number,
    multiple: PropTypes.bool,
    transition: PropTypes.string,
};

Accordion.defaultProps = {
    collapsible: true,
    active: null,
    animation: true,
    duration: null,
    multiple: false,
    transition: null
};