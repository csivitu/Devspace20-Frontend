
import React, { Fragment, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

let sectionCount = 0;
export default function Section(props) {
    const [sectionHeight, setHeight] = useState('0');
    const sectionContentRef = useRef(null);

    function setHeadingHeight() {
        if (sectionContentRef.current) {
            const height = sectionContentRef.current.clientHeight;
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setHeight('initial');
            } else {
                setHeight(height);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', setHeadingHeight);
        window.addEventListener('load', setHeadingHeight);
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
                <div className="section-heading-text"><div className="heading-text-fix">{props.headingText}</div></div>
            </div>
            <div
                ref={sectionContentRef}
                name={props.name}
                style={{
                    backgroundColor: props.bgcolor,
                    zIndex: sectionLayer,
                    order: props.sectionOrder
                }}
                className={classNames('section-content', 'section-content-' + props.sectionAlignment, 'd-flex', 'flex-column', 'justify-content-center')}>
                {props.content}
            </div>
            <div style={{
                clear: 'both'
            }}></div>
        </Fragment>
    );
}