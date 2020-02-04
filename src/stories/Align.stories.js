import React from 'react';
import {Alert} from "../components/Alert";
import {Story} from "./components/Story";
import {withAlign} from "../hooks/withAlign";

export default {
    title: "UIKit Align Module"
};
// TODO: Rewrite this with cards
export const default_behavior = () => (
    <Story title={"UIKit Alignment"}>
        {withAlign(<Alert>
            <h3>I'm alerting you on the left</h3>
        </Alert>, "left")}

        {withAlign(<Alert>
            <h3>I'm alerting you on the right</h3>
        </Alert>, "right")}
    </Story>
);

export const responsive = () => (
    <Story title={"UIKit Alignment"}>
        {withAlign(<h3>Make your screen smaller to move me</h3>, "right", "m")}
    </Story>
);