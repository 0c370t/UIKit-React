import React from "react";
import PropTypes from 'prop-types';
import {animations, severities} from "../constants";


export function Alert(props){
    let closeButton = props.withClose ? <a className="uk-alert-close" data-uk-close/> : null;
    let classes = " ";
    let dataUkAlert = "";

    if(!props.hasAnimation) dataUkAlert = ";animation: false";
    else if (props.animation) {
        dataUkAlert += ";animation: uk-animation-" + props.animation;
        dataUkAlert += ";duration: " + props.duration;
    }

    if(props.style !== "default")
        classes += "uk-alert-" + props.style;
    return (
        <div data-uk-alert={dataUkAlert} className={props.className + classes}>
            {closeButton}
            {props.children}
        </div>
    )
}

Alert.propTypes = {
    withClose: PropTypes.bool,
    style: PropTypes.oneOf(severities),
    animation: PropTypes.oneOf(animations),
    hasAnimation: PropTypes.bool,
    duration: PropTypes.number,
};

Alert.defaultProps = {
    withClose: true,
    style: "default",
    animation: "",
    hasAnimation: true,
    duration: 150
};