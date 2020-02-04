import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from "../components/Alert";
import {Story} from "./components/Story";


export default {title: "UIKit Alert"}

export const default_behavior = () => (
    <Story title={"UIKit Alert"}>
        <Alert>
            <h3>Alert!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </Alert>
    </Story>
);

export const without_close = () => (
    <Story title={"UIKit Alert"}>
        <Alert withClose={false}>
            <h3>Alert!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </Alert>
    </Story>
);

export const with_colors = () => (
    <Story title={"UIKit Alert"}>
        <Alert style={"default"}>
            <h3>Default Alert!</h3>
            <p>
                Use style={"{\"default\"}"} or omit this prop to create me
            </p>
        </Alert>

        <Alert style={"primary"}>
            <h3>Primary Alert!</h3>
            <p>
                Use style={"{\"primary\"}"} to create me
            </p>
        </Alert>
        <Alert style={"success"}>
            <h3>Success Alert!</h3>
            <p>
                Use style={"{\"success\"}"} to create me
            </p>
        </Alert>
        <Alert style={"warning"}>
            <h3>Warning Alert!</h3>
            <p>
                Use style={"{\"warning\"}"} to create me
            </p>
        </Alert>
        <Alert style={"danger"}>
            <h3>Dangerous Alert!</h3>
            <p>
                Use style={"{\"danger\"}"} to create me
            </p>
        </Alert>
    </Story>
);

export const with_different_animation = () => (
    <Story title={"UIKit Alert"}>
        <Alert animation={"slide-left"} duration={1000}>
            <h3>Alert!</h3>
            <p>Watch me go left! I also have a longer duration for visibility</p>
        </Alert>
        <Alert animation={"slide-right"} duration={1000}>
            <h3>Alert!</h3>
            <p>Watch me go right! I also have a longer duration for visibility</p>
        </Alert>
    </Story>
);
