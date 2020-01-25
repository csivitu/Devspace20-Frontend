import React from 'react';
import Section from './components/section';
import { Container, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';


function generateDevspaceFeatures() {
    const devspaceContent = [
        {
            heading: "Reinvening Experience",
            content: "An investment in knowledge earns the highest dividends; come have a hands-on session in workshops that equip you for the future."
        },
        {
            heading: "Inspiring Keynotes",
            content: "An investment in knowledge earns the highest dividends; come have a hands-on session in workshops that equip you for the future."
        },
        {
            heading: "Learning Sessions",
            content: "An investment in knowledge earns the highest dividends; come have a hands-on session in workshops that equip you for the future."
        },
        {
            heading: "Hackathon",
            content: "An investment in knowledge earns the highest dividends; come have a hands-on session in workshops that equip you for the future."
        }
    ];

    function devspaceFeature(heading, content) {
        return (
            <div className="w-100 bg-dark p-4 my-4 mx-3" style={{
                boxShadow: '0px 0px 18px #00000066'
            }}>
                <h1 className="text-primary text-uppercase" style={{
                    minHeight: '40%'
                }}>
                    {heading}
                </h1>
                <p className="text-white">
                    {content}
                </p>
            </div>
        )
    }

    const features = [];

    for (const content of devspaceContent) {
        features.push((
            <Col key={content.heading} md={5} className="d-flex justify-content-center">
                {devspaceFeature(content.heading, content.content)}
            </Col>
        ));
    }

    return (
        <Row className="justify-content-center">
            {features}
        </Row>
    );

}

function generateRegistrationFeatures() {
    const events = [
        {
            name: 'HACKATHON',
            description: 'Grab your tickets early for lesser something something content pls blah blah access to talks'
        },
        {
            name: 'DEVSPACE EARLY BIRD',
            description: 'Grab your tickets early for lesser something something content pls blah blah access to talks',
            cost: '₹ 275'
        },
        {
            name: 'DEVSPACE',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
            cost: '₹₹₹'
        }
    ]
    function registerFeature(event) {
        const classes = {
            active: "register-box",
            inactive: "register-box-inactive"
        }
        var getClass = {}
        if (event.name === "DEVSPACE") {
            getClass.box = classes.inactive;
        }
        else {
            getClass.box = classes.active
        }
        if (event.name === "HACKATHON") {
            getClass.display = "hide"
        }
        return (
            <div className={classnames("d-flex", "flex-column " + getClass.box)}>
                <h1 className="heading-text px-5 pt-4">{event.name}</h1>
                <p className="event-description px-5">{event.description}</p>
                <p className={classnames("cost mt-3 " + getClass.display)}>{event.cost}</p>
                <div className="mt-auto p-5">
                    <button className="register-button mx-auto">REGISTER</button>
                </div>
            </div>
        )
    }

    const features = [];
    for (const event of events) {
        features.push((
            <Col key={event.name} md={4} className="d-flex justify-content-center">
                {registerFeature(event)}
            </Col>
        ))
    }
    return (
        <Row className="justify-content-center">
            {features}
        </Row>
    )
}

function generateAboutUsFeatures() {
    const content = {
        'heading': 'Computer Society of India - Vellore Institute of Technology',
        'description': 'Computer Society of India - VIT Student Branch is composed of skilled designers, developers and tech enthusiasts working together to present a variety of solutions, services and products. To push technology forward, we organize several events, workshops and hackathons year in and out.',
    };

    function generateHeading(headingText) {
        return (
            <h3 className='text-primary text-uppercase'>{headingText}</h3>
        );
    }

    function generateFindUsContent() {
        return (
            <Col md={6}>
                {generateHeading('Find Us')}
            </Col>
        );
    }

    function generateContactUsContent() {
        return (
            <Col className='text-left'>
                {generateHeading('Contact Us')}
                <div><div className='d-inline-block align-top'>Email:</div><a href='mailto:askcsivit@gmail.com'>askcsivit@gmail.com</a></div>
                <div>
                    <div className='d-inline-block align-top'>Phone:</div>
                    <div className='d-inline-block'>
                        <a href='tel:+91-9003781868'>+91-9003781868</a><br />
                        <a href='tel:+91-9003781868'>+91-9003781868</a>
                    </div>
                </div>
            </Col>
        );
    }

    return (
        <div className='text-justify text-light mx-4' style={{ fontSize: '1.4rem' }}>
            {generateHeading(content.heading)}
            <p className='mt-3'>{content.description}</p>
            <a href='https://csivit.com' target='_blank' rel='noreferrer noopener'>csivit.com</a>
            <Row className='mt-5'>
                {generateFindUsContent()}
                {generateContactUsContent()}
            </Row>
        </div>
    );
}

function App() {
    const colors = {
        white: '#fffaff',
        blue: '#00D5FF',
        red: '#FF2A00',
        black: '#050401',
        notsoblack: '#151515',

        textblue: 'rgba(6, 47, 123, 0.3)'
    }
    return (
        <div>
            {Section({
                headingText: 'DEVSPACE',
                content: (
                    <Container fluid={true} className="pt-3">
                        {generateDevspaceFeatures()}
                    </Container>
                ),
                headingAlignment: 'right',
                bgcolor: colors.blue
            })}
            {
                Section({
                    headingText: 'WORKSHOPS',
                    content: (
                        <Container></Container>
                    ),
                    headingAlignment: 'left',
                    bgcolor: colors.notsoblack
                })
            }
            {
                Section({
                    headingText: 'TALKS',
                    content: (
                        <Container></Container>
                    ),
                    headingAlignment: 'right',
                    bgcolor: colors.notsoblack
                })
            }

            {Section({
                headingText: 'REGISTER',
                content: (
                    <Container className="pt-3" fluid={true}>
                        {generateRegistrationFeatures()}
                    </Container>
                ),
                headingAlignment: 'right',
                bgcolor: colors.notsoblack
            })}
            {
                Section({
                    headingText: 'FAQ',
                    content: (
                        <Container></Container>
                    ),
                    headingAlignment: 'left',
                    bgcolor: colors.blue
                })
            }
            {
                Section({
                    headingText: 'COLLABS',
                    content: (
                        <Container></Container>
                    ),
                    headingAlignment: 'right',
                    bgcolor: colors.notsoblack
                })
            }
            {
                Section({
                    headingText: 'IN THE PAST',
                    content: (
                        <Container></Container>
                    ),
                    headingAlignment: 'left',
                    bgcolor: colors.notsoblack
                })
            }
            {
                Section({
                    headingText: 'ABOUT US',
                    content: (
                        <Container fluid={true}>
                            {generateAboutUsFeatures()}
                        </Container>
                    ),
                    headingAlignment: 'right',
                    bgcolor: colors.notsoblack
                })
            }
        </div>
    );
}

export default App;
