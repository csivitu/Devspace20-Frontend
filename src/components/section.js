
import React from 'react';
import classnames from 'classnames';

export default function Section(props) {
    const contentOrder = {
        heading: 1,
        content: 2
    }
    if (props.headingAlignment && props.headingAlignment === 'right') {
        contentOrder.heading = 2;
        contentOrder.content = 1;
    } else {
        props.headingAlignment = 'left';
    }
    return (
        <div className="section" style={{backgroundColor: props.bgcolor}}>
            <div
            style = {{
                order: contentOrder.heading,

            }} 
            className={classnames(
                "section-heading",
                "section-heading-blue",
                "section-heading-" + props.headingAlignment)
                }>
                <div>{props.headingText}</div>
            </div>
            <div
            style = {{
                order: contentOrder.content
            }} 
            className="section-content">
                {props.content}
            </div>
        </div>
    );
}