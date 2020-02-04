import React from 'react';
import Accordion from "../components/Accordion";
import AccordionItem from "../components/AccordionItem";
// UIKit dependencies
import '../lib/uikit/js/uikit';
import '../styles/Default.scss';
import {Story} from "./components/Story";

export default {title: "UIKit Accordion"};
export const default_behavior = () => (
    <Story title="UIKit Accordion">
        <Accordion>
            <AccordionItem title={"Item 1"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse
                    potenti. Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed
                    egestas placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus
                    non, placerat ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 2"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse
                    potenti. Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed
                    egestas placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus
                    non, placerat ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 3"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse
                    potenti. Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed
                    egestas placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus
                    non, placerat ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
        </Accordion>
    </Story>
);

export const with_multiselect = () => (
    <Story title="UIKit Accordion">
        <Accordion multiple={true}>
            <AccordionItem title={"Item 1"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 2"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 3"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
        </Accordion>
    </Story>
);

export const with_preselected = () => (
    <Story title="UIKit Accordion">
        <Accordion active={1}>
            <AccordionItem title={"Item 1"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 2"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 3"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
        </Accordion>
    </Story>
);

export const with_no_animation = () => (
    <Story title="UIKit Accordion">
        <Accordion animation={false}>
            <AccordionItem title={"Item 1"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 2"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 3"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
        </Accordion>
    </Story>
);

export const with_slow_animation = () => (
    <Story title="UIKit Accordion">
        <Accordion duration={500}>
            <AccordionItem title={"Item 1"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 2"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
            <AccordionItem title={"Item 3"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ante at lectus sodales,
                    vulputate pharetra mi bibendum. Fusce non efficitur diam, quis dignissim eros. Aliquam nibh lacus,
                    malesuada ut mi nec, ullamcorper porttitor eros. Cras fringilla ex a quam iaculis dictum. Praesent
                    eu
                    lacinia est. Etiam consectetur mattis massa, quis tempor leo facilisis ornare. Suspendisse potenti.
                    Maecenas varius velit viverra mollis egestas. Proin lacinia eget felis vitae dictum. Sed egestas
                    placerat quam, at ullamcorper tellus lobortis vel. Mauris a nulla lacinia, cursus lectus non,
                    placerat
                    ante. Maecenas et imperdiet lorem. Quisque laoreet lacinia tortor, sed pretium leo.
                </p>
            </AccordionItem>
        </Accordion>
    </Story>
)