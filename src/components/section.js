
import React, { Fragment, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

let sectionCount = 0;
export default function Section(props) {
    const [sectionHeight, setHeight] = useState('0');
    const sectionContentRef = useRef(null);

    function setHeadingHeight() {
        const height = sectionContentRef.current.clientHeight;
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            setHeight('initial');
        } else {
            setHeight(height);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', setHeadingHeight);
        setHeadingHeight();
    });
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
                    order: props.headingOrder,
                    height: sectionHeight
                }}
                className={classNames('section-heading', 'section-heading-' + props.headingAlignment)}>
                <div className="section-heading-text">{props.headingText}</div>
            </div>
            <div
                ref={sectionContentRef}
                style={{
                    backgroundColor: props.bgcolor,
                    zIndex: sectionLayer,
                    order: props.sectionOrder
                }}
                className={classNames('section-content', 'section-content-' + props.sectionAlignment)}>
                {props.content}
            </div>
            <div style={{
                clear: 'both'
            }}></div>
        </Fragment>
    );
}