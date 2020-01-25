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
    ];
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

function generateFAQCards() {
    const faqs = [
        {
            q: 'Lorem ipsum dolor sit amet, consectutur adipiscing elit?',
            a: 'When opportunities walk to you, grab them! A chance to see the functioning of industries, come and be a part of our startup expo.'
        },
        {
            q: 'Lorem ipsum dolor sit amet, consectutur adipiscing elit?',
            a: 'When opportunities walk to you, grab them! A chance to see the functioning of industries, come and be a part of our startup expo.'
        },
        {
            q: 'Lorem ipsum dolor sit amet, consectutur adipiscing elit?',
            a: 'When opportunities walk to you, grab them! A chance to see the functioning of industries, come and be a part of our startup expo.'
        },
        {
            q: 'Lorem ipsum dolor sit amet, consectutur adipiscing elit?',
            a: 'When opportunities walk to you, grab them! A chance to see the functioning of industries, come and be a part of our startup expo.'
        },
        {
            q: 'Lorem ipsum dolor sit amet, consectutur adipiscing elit?',
            a: 'When opportunities walk to you, grab them! A chance to see the functioning of industries, come and be a part of our startup expo.'
        },
        {
            q: 'Lorem ipsum dolor sit amet, consectutur adipiscing elit?',
            a: 'When opportunities walk to you, grab them! A chance to see the functioning of industries, come and be a part of our startup expo.'
        }
    ];

    function generateFAQCard(faq) {
        return (
            <div className="faq">
                <div className="bg-dark p-2 text-blue faq-heading">
                    {faq.q}
                </div>
                <div className="bg-light p-2 faq-answer text-justify">
                    {faq.a}
                </div>
            </div>
        )
    }

    const faqCards = [];
    let i = 0;
    for (const faq of faqs) {
        faqCards.push((
            <Col key={i} md={5} className="d-flex justify-content-center my-4 p-4">
                {generateFAQCard(faq)}
            </Col>
        ));
        i+=1;
    }

    return (
        <Row className="justify-content-center">
            {faqCards}
        </Row>
    )
}
function generateAboutUsFeatures() {
    const content = {
        'heading': 'Computer Society of India - Vellore Institute of Technology',
        'description': 'Computer Society of India - VIT Student Branch is composed of skilled designers, developers and tech enthusiasts working together to present a variety of solutions, services and products. To push technology forward, we organize several events, workshops and hackathons year in and out.',
    };

    return (
        <div className='text-justify text-light mx-4'>
            <h3 className='text-primary text-uppercase'>{content.heading}</h3>
            <p className='mt-3'>{content.description}</p>
            <div className='d-flex justify-content-around'>
                <div>FIND US</div>
                <div>CONTACT US</div>
            </div>
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
            <div className="hackathon">
                <h1 className="hackathon-heading mx-auto text-center bg-primary">THE HACKATHON</h1>
                <div className="bg-dark hackathon-details pb-5">
                    <p className="text-light p-5 hackathon-description text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie enim in est suscipit, sit amet tincidunt dolor aliquet. Duis quis quam ex. Quisque molestie lorem eget congue laoreet.
                </p>
                    <h1 className="text-primary text-uppercase text-center mb-2">Tracks</h1>
                    <h1 className="text-light text-uppercase text-center">Coming Soon!</h1>
                </div>
            </div>
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
                        <Container fluid={true}>
                            {generateFAQCards()}
                        </Container>
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
