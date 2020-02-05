import React, { useState, useEffect } from 'react';
import Section from './components/section';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import classnames from 'classnames';
import shortid from 'shortid';
import queryString from 'query-string';
import Lottie from 'react-lottie';
import { scroller, Link as ScrollLink } from 'react-scroll';


import menuIcon from './assets/images/menu-V3.json';
import devspaceBluWht from './assets/images/DSBluWht.svg';

import githubLogo from './assets/images/github.png';
import speakerImg from './assets/images/speaker.png';
import facebookIcon from './assets/images/facebookIcon.svg';
import githubIcon from './assets/images/githubIcon.svg';
import instagramIcon from './assets/images/instagramIcon.svg';
import linkedinIcon from './assets/images/linkedinIcon.svg';

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

function generateRegistrationFeatures(loggedIn) {

    const events = [
        {
            name: 'HACKATHON',
            description: 'Grab your tickets early for lesser something something content pls blah blah access to talks',
            isLoggedIn: loggedIn.toString()
        },
        {
            name: 'DEVSPACE',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
            cost: '₹₹₹',
            isLoggedIn: loggedIn.toString()
        },
    ];
    function registerFeature(event) {
        console.log(event.isLoggedIn)
        var getClass = {}
        if (event.name === "HACKATHON") {
            getClass.display = "hide"
        }
        if (event.isLoggedIn === "true") {
            event.button = "PAY NOW"
        }
        else {
            event.button = "REGISTER"
        }
        // function registerRoute() {
        //     return '/register';
        // }
        return (
            <div className={classnames("d-flex", "flex-column", "register-box")}>
                <h1 className="heading-text px-5 pt-4">{event.name}</h1>
                <p className="event-description px-5">{event.description}</p>
                <p className={classnames("cost mt-3 " + getClass.display)}>{event.cost}</p>
                <div className="mt-auto p-5">
                    <Link to="/login" className="register-button mx-auto">
                        {event.button}
                    </Link>
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
function generateCollabs() {
    const sponsors = [
        {
            name: 'Github1',
            src: './assets/images/github.png'
        },
        {
            name: 'Github2',
            src: './assets/images/github.png'
        },
        {
            name: 'Github3',
            src: './assets/images/github.png'
        },
        {
            name: 'Github4',
            src: './assets/images/github.png'
        },
        {
            name: 'Github5',
            src: './assets/images/github.png'
        },
        {
            name: 'Github6',
            src: './assets/images/github.png'
        },
        {
            name: 'Github7',
            src: './assets/images/github.png'
        },
        {
            name: 'Github8',
            src: './assets/images/github.png'
        },
    ]
    const features = []
    for (const sponsor of sponsors) {
        features.push((
            <Col key={sponsor.name} sm={5} md={3}>
                <img className="sponsor-image mx-auto" src={githubLogo} alt="..."></img>
            </Col>
        ))
    }
    function returnPartners() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <h3 className="sponsor-heading">COMMUNITY PARTNERS</h3>
                    </Col>
                    <Col>
                        <h3 className="sponsor-heading">AUDIO PARTNERS</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="sponsor-heading">MEDIA PARTNERS</h3>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div className="px-4">
            <p className="collabs-heading">These are our past collaborators</p>
            <Row className="justify-content-center">
                {features}
            </Row>
            {returnPartners()}
        </div>
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
            <Col key={i} md={5} className="d-flex justify-content-center p-4">
                {generateFAQCard(faq)}
            </Col>
        ));
        i += 1;
    }

    return (
        <Row className="justify-content-center">
            {faqCards}
        </Row>
    )
}

function generateSocialMediaIcons() {
    return (
        <>
            <a
                href='https://facebook.com/csivitu'
                target='_blank'
                className='w-12 social-media-icon'
                rel='noreferrer noopener'>
                <img src={facebookIcon} alt='' className='w-100' />
            </a>
            <a
                href='https://github.com/csivitu'
                target='_blank'
                className='w-12 social-media-icon'
                rel='noreferrer noopener'>
                <img src={githubIcon} alt='' className='w-100' />
            </a>
            <a
                href='https://instagram.com/csivitu'
                target='_blank'
                className='w-12 social-media-icon'
                rel='noreferrer noopener'>
                <img src={instagramIcon} alt='' className='w-100' />
            </a>
            <a
                href='https://linkedin.com/company/computer-society-of-india-vit-student-chapter/'
                target='_blank'
                className='w-12 social-media-icon'
                rel='noreferrer noopener'>
                <img src={linkedinIcon} alt='' className='w-100' />
            </a>
        </>
    );
}
function generateAboutUsFeatures() {
    const content = {
        'heading': 'Computer Society of India - Vellore Institute of Technology',
        'description': 'Computer Society of India - VIT Student Branch is composed of skilled designers, developers and tech enthusiasts working together to present a variety of solutions, services and products. To push technology forward, we organize several events, workshops and hackathons year in and out.',
    };

    const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0287333403357!2d79.15346681537353!3d12.97001319085699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47a01ae8e111%3A0x9575db6fe3bc68e2!2sAnna%20Auditorium!5e0!3m2!1sen!2sin!4v1579975266924!5m2!1sen!2sin";

    function generateHeading(headingText) {
        return (
            <h3 className='text-primary text-left text-uppercase'>{headingText}</h3>
        );
    }

    function generateFindUsContent() {
        return (
            <Col md={6} className='mt-5'>
                {generateHeading('Find Us')}
                <iframe
                    className='map-frame mt-3'
                    src={mapLink}
                    frameborder="0"
                    alt="Anna Auditorium"
                    title='Map' />
            </Col>
        );
    }

    function generateContactUsContent() {
        return (
            <Col className='text-left mt-5'>
                {generateHeading('Contact Us')}
                <div className='mt-3'>
                    <div className='d-inline-block mw-18'>Email:</div><a href='mailto:askcsivit@gmail.com'>askcsivit@gmail.com</a></div>
                <div>
                    <div className='d-inline-block align-top mw-18'>Phone:</div>
                    <div className='d-inline-block'>
                        <a href='tel:+919003781868'>+91-9003781868</a><br />
                        <a href='tel:+916379310870'>+91-6379310870</a>
                    </div>
                </div>

                <div className='d-flex justify-content-between w-60 mt-4'>
                    {generateSocialMediaIcons()}
                </div>

                <div className='mt-4'>View <a href='/codeofconduct' target='_blank' rel='noreferrer noopener'>Code of Conduct</a></div>
                <div className='mt-2'><a href='/brochure' target='_blank' rel='noreferrer noopener'>Download Brochure</a></div>
            </Col>
        );
    }

    return (
        <div className='text-justify text-light mx-4 about-us mt-3'>
            {generateHeading(content.heading)}
            <p className='mt-4 description'>{content.description}</p>
            <a href='https://csivit.com' target='_blank' rel='noreferrer noopener'>https://csivit.com</a>
            <Row>
                {generateFindUsContent()}
                {generateContactUsContent()}
            </Row>
        </div>
    );
}

function generateSpeakerCards(speakers) {
    function generateCards(speaker) {
        return (
            <div className="speaker-div p-4">
                <img className="mx-auto d-block speaker-img" src={speakerImg} alt="..."></img>
                <p className="font-weight-bold talk-name">{speaker.name}</p>
                <h4 className="font-italic">{speaker.company}</h4>
                <p className="workshop-description">{speaker.description}</p>
            </div>
        )
    }
    const workshops = []
    for (const speaker of speakers) {
        workshops.push((
            <Col key={speaker.name} md={3} className="d-flex justify-content-center text-center">
                {generateCards(speaker)}
            </Col>
        ));
    }
    return (
        <div>
            <h2 className="top-description pl-5 ml-5">Something to make workshop sound interesting</h2>
            <h2 className="top-description pl-5 ml-5">Something to make workshop sound interesting</h2>
            <Row className="justify-content-center">
                {workshops}
            </Row>
        </div>
    )
}
function generateWorkshops() {
    const speakers = [
        {
            name: 'WATSON AI1',
            company: 'by IBM',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        },
        {
            name: 'WATSON AI2',
            company: 'by IBM',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        },
        {
            name: 'WATSON AI3',
            company: 'by IBM',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        }
    ]
    return generateSpeakerCards(speakers);
}

function generateTalks() {
    const speakers = [
        {
            name: 'WATSON AI1',
            company: 'by IBM',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        },
        {
            name: 'WATSON AI2',
            company: 'by IBM',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        },
        {
            name: 'WATSON AI3',
            company: 'by IBM',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        }
    ]
    return generateSpeakerCards(speakers);
}

function generateInThePast() {
    const sections = [
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/devspace_audi.jpg"),
            text: 'Biggest gathering in VIT'
        },
    ];


    const sectionElem = [];
    for (const section of sections) {
        sectionElem.push((
            <Col md={6} lg={4}>
                <div class="past-card my-3">
                    <div
                        className="image-container">
                        <img src={section.image} className="w-100" alt={section.text} />
                    </div>
                    <div className="past-heading-container text-center text-uppercase bg-dark py-2">
                        <div class="past-heading">
                            {section.text}
                        </div>
                    </div>
                </div>
            </Col>
        ));
    }

    return (
        <div class="p-3">
            <p class="past-text text-light font-italic">These are our past collaborators/sponeors/something cool vfbgnhjmk,l.</p>
            <Row>
                {sectionElem}
            </Row>
        </div>
    )
}

function Sidebar(open, setOpen) {
    const sidebarLinks = [{
        section: "Home",
        link: null
    },
    {
        section: "In Devspace",
        link: 'features'
    },
    {
        section: "Workshops",
        link: 'workshops'
    },
    {
        section: "Talks",
        link: 'talks'
    },
    {
        section: "Hackathon",
        link: 'hackathon'
    },
    {
        section: "Register!",
        link: 'register'
    },
    {
        section: "FAQs",
        link: 'faq',
    },
    {
        section: "Past Collaborators",
        link: 'collabs'
    },
    {
        section: "Devspace 2019",
        link: 'inThePast',
    },
    {
        section: "About Us",
        link: 'aboutUs',
    }];

    const sideBarLinksElems = [];

    for (const sectionLink of sidebarLinks) {
        sideBarLinksElems.push((
                <ScrollLink onClick={() => {
                    setOpen(false);
                }} className="sidebar-link" to={sectionLink.link} spy={true} smooth={true} duration={600} offset= {-60} activeClass="active">
                    {sectionLink.section}
                </ScrollLink>
        ));
    }
    return (
        <div className={classnames("sidebar", {
            open: open
        })}>
            {sideBarLinksElems}
            <div class="social-media">
                {generateSocialMediaIcons()}
            </div>
        </div>
    )
}


function DevspaceNavbar() {
    const [opened, setOpened] = useState(false);
    const [stopped, setStopped] = useState(true);

    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark" className="p-3 devspaceNav">
                <div class="navbar-menu-icon" onClick={() => {
                    setOpened(!opened);
                    setStopped(false);
                }}>
                    <Lottie options={{
                        animationData: menuIcon,
                        autoplay: false,
                        loop: false
                    }}
                        isClickToPauseDisabled={true}
                        height={32}
                        width={32}
                        speed={2}
                        direction={opened ? 1 : -1}
                        isStopped={stopped} />
                </div>
                <Nav className="ml-auto">
                    <img src={devspaceBluWht} class="devspaceLogo" alt="Devspace Logo"></img>
                </Nav>
            </Navbar>

            {Sidebar(opened, setOpened)}
        </>
    )
}

function App() {
    const [loggedIn, setloggedIn] = useState(false);
    useEffect(() => {
        if(loggedIn) {
            scroller.scrollTo('register');
        }
    })
    const colors = {
        white: '#fffaff',
        blue: '#00D5FF',
        red: '#FF2A00',
        black: '#050401',
        notsoblack: '#151515',
        textblue: 'rgba(6, 47, 123, 0.3)'
    }
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={() => {
                        return (
                            <>
                                {DevspaceNavbar()}
                                <div className="mt-5"></div>
                                {Section({
                                    headingText: 'DEVSPACE',
                                    name: 'features',
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
                                        name: 'workshops',
                                        content: (
                                            <Container fluid={true}>
                                                {generateWorkshops()}
                                            </Container>
                                        ),
                                        headingAlignment: 'left',
                                        bgcolor: colors.notsoblack
                                    })
                                }
                                {
                                    Section({
                                        headingText: 'TALKS',
                                        name: 'talks',
                                        content: (
                                            <Container fluid={true}>
                                                {generateTalks()}
                                            </Container>
                                        ),
                                        headingAlignment: 'right',
                                        bgcolor: colors.notsoblack
                                    })
                                }
                                <div name='hackathon' className="hackathon">
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
                                    name: 'register',
                                    content: (
                                        <Container className="pt-3" fluid={true}>
                                            {generateRegistrationFeatures(loggedIn)}
                                        </Container>
                                    ),
                                    headingAlignment: 'right',
                                    bgcolor: colors.notsoblack
                                })}
                                {
                                    Section({
                                        headingText: 'FAQ',
                                        name: 'faq',
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
                                        name: 'collabs',
                                        content: (
                                            <Container fluid={true}>
                                                {generateCollabs()}
                                            </Container>
                                        ),
                                        headingAlignment: 'right',
                                        bgcolor: colors.notsoblack
                                    })
                                }
                                {
                                    Section({
                                        headingText: 'IN THE PAST',
                                        name: 'inThePast',
                                        content: (
                                            <Container fluid={true}>
                                                {generateInThePast()}
                                            </Container>
                                        ),
                                        headingAlignment: 'left',
                                        bgcolor: colors.notsoblack
                                    })
                                }
                                {
                                    Section({
                                        headingText: 'ABOUT US',
                                        name: 'aboutUs',
                                        content: (
                                            <Container fluid={true}>
                                                {generateAboutUsFeatures()}
                                            </Container>
                                        ),
                                        headingAlignment: 'right',
                                        bgcolor: colors.notsoblack
                                    })
                                }
                            </>
                        );
                    }} />
                    <Route path='/login' component={() => {
                        const redirectUrl = encodeURIComponent(process.env.REACT_APP_REDIRECT_URL);
                        const oauthState = encodeURIComponent(shortid.generate());
                        localStorage.setItem('state', oauthState);
                        window.location.href = `${process.env.REACT_APP_ACCOUNTS_URL}/oauth/authorize?clientId=${process.env.REACT_APP_CLIENT_ID}&state=${oauthState}&redirectUrl=${redirectUrl}`;
                        return null;
                    }} />

                    <Route path='/oauth/token' component={({ match, location }) => {
                        const search = queryString.parse(location.search);
                        const token = search.token;
                        const state = search.state;

                        // Only accept token if state matches
                        if (state === localStorage.getItem('state')) {
                            localStorage.setItem('token', token);
                            localStorage.removeItem('state');
                        }
                        // this.isLoggedIn();
                        setloggedIn(true);
                        return <Redirect to='/' />
                    }} />
                    <Route path='/pay' component={() => {

                    }} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
