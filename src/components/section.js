
import React, { Fragment, useRef } from 'react';
import classNames from 'classnames';

let sectionCount = 0;
export default function Section(props) {
    if (props.headingAlignment && props.headingAlignment === 'right') {
        props.sectionAlignment = 'left'
        props.sectionOrder = 2*sectionCount;
        props.headingOrder = (2*sectionCount)+1;
    } else {
        props.headingAlignment = 'left';
        props.sectionAlignment = 'right';
        props.headingOrder = 2*sectionCount;
        props.sectionOrder = (2*sectionCount)+1;
    }

    const headingLayer = (3*sectionCount);
    const sectionLayer = (3*sectionCount)+2
    sectionCount += 1;
    return (
        <Fragment>
            <div
                style={{
                    zIndex: headingLayer,
                    order: props.headingOrder
                }}
                className={classNames('section-heading', 'section-heading-' + props.headingAlignment)}>
                <div className="section-heading-text">{props.headingText}</div>
            </div>
            <div
                style={{
                    backgroundColor: props.bgcolor,
                    zIndex: sectionLayer,
                    order: props.sectionOrder
                }}
                className={classNames('section-content', 'section-content-' + props.sectionAlignment)}>
                {props.content}
            </div>
        </Fragment>
    );
}