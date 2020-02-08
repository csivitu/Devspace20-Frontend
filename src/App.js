import React, { useState, useEffect, useRef } from 'react';
import Section from './components/section';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import classnames from 'classnames';
import shortid from 'shortid';
import queryString from 'query-string';
import { Lottie } from '@crello/react-lottie';
import { Link as ScrollLink } from 'react-scroll';


import menuIcon from './assets/images/menu-V3.json';
import devspaceBluWht from './assets/images/DSBluWht_1@4x.png';

import facebookIcon from './assets/images/facebookIcon.svg';
import githubIcon from './assets/images/githubIcon.svg';
import instagramIcon from './assets/images/instagramIcon.svg';
import linkedinIcon from './assets/images/linkedinIcon.svg';
import devspaceVideo from './assets/videos/dev_10001-0250.m4v';

function generateDevspaceFeatures() {
    const devspaceContent = [
        {
            heading: "Inspiring Keynotes",
            content: "We can only achieve as much as we aim to. Hear from people who achieved the impossible and experience their passion and enthusiasm."
        },
        {
            heading: "Interactive Learning",
            content: "An investment in knowledge returns the highest dividends; take workshops from professionals who are as involved in your learning as you are."
        },
        {
            heading: "Hackathon",
            content: "Our flagship hackathon demands the technology of the future, the innovations that will change the industry, ideas that will change the world. Do you have what it takes?"
        },
        {
            heading: "Capture The Flag",
            content: "In a world driven by the need for constant innovation, learn how to step away from the status quo from the people who did it themselves."
        },
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
            cost: '₹250',
            isLoggedIn: loggedIn.toString()
        },
    ];
    function registerFeature(event) {
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
        function paymentLink(button) {
            if (button === "REGISTER") {
                return (
                    <Link to="/login" className="reg-link">
                        <button className="btn-outline-primary register-button px-5 py-3 mx-auto">{event.button}</button>
                    </Link>
                )
            }
            else {
                return (
                    <div className="reg-link">
                        <form action="/api/pay" method="post">
                            <input type="text" name="token" value={localStorage.getItem('token')} readOnly hidden />
                            <button className="btn-outline-primary register-button px-5 py-3 mx-auto">{event.button}</button>
                        </form>
                    </div>
                )
            }
        }
        return (
            <div className={classnames("d-flex", "flex-column", "register-box", "mx-4")}>
                <h1 className="heading-text px-5 pt-4">{event.name}</h1>
                <p className="event-description px-5">{event.description}</p>
                <p className={classnames("cost mt-3 " + getClass.display)}>{event.cost}</p>
                <div className="mt-auto p-5 text-center">
                    {paymentLink(event.button)}
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
            name: 'Devfolio',
            image: require("./assets/images/sponsors/Devfolio-White.png")
        },
        {
            name: 'Matic',
            image: require("./assets/images/sponsors/matic.png")
        },
        {
            name: 'Balsamiq',
            image: require("./assets/images/sponsors/balsamiq-logo-print.png")
        },
        {
            name: 'Coworkable',
            image: require("./assets/images/sponsors/Coworkable_logo_black.png")
        },
        {
            name: 'Creative Tim',
            image: require("./assets/images/sponsors/creative-tim-transparent-bg.png")
        },
        {
            name: 'Jetbrains',
            image: require("./assets/images/sponsors/jetbrains.png"),
        },
        {
            name: '.tech',
            image: require("./assets/images/sponsors/White-Powered-By-Tech.png")
        },
    ]
    const features = []
    for (const sponsor of sponsors) {
        features.push((
            <Col key={sponsor.name} className="d-flex justify-content-center align-items-center px-4" xs={5} md={3}>
                <img className="sponsor-image mx-auto" src={sponsor.image} alt="..."></img>
            </Col>
        ))
    }
    function returnPartners() {
        return (
            <div>
                {/* <Row>
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
                </Row> */}
            </div>
        )
    }
    return (
        <div className="px-4">
            <p className="section-content-heading">Collaborators for Devspace 2020</p>
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
            q: 'How is Devspace different from other hackathons?',
            a: 'Devspace is more than a hackathon, it also consists of expert talks and workshops conducted by industry professionals.'
        },
        {
            q: 'Do I need to pay for the hackathon?',
            a: 'No, the hackathon is completely free of cost. Devspace registration fees are only for the opportunity to interact with industry experts at the hands on workshops and talks.'
        },
        {
            q: 'What is the filtering process for the hackathon?',
            a: 'We\'re looking for you, an innovator, creator, dreamer who can make ideas come to life. All filtering processes will be carried out via Devfolio, so just apply and leave the rest to us.'
        },
        {
            q: 'Can we participate in teams for the hackathon?',
            a: 'A team can consist of 2-5 members once the filtering process has been completed.'
        },
        {
            q: 'Error 404: team not found',
            a: 'Don\'t worry! All individual participants will be provided teams on the spot'
        },
        {
            q: 'How will I know if I\'ve been registered or not?',
            a: 'After registering online, you will receive a confirmation email with transaction details from csivit.'
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
        'description': 'The Computer Society of India is the largest body of non-profit computer professionals in India. We are a group of skilled designers, developers and tech enthusiasts who engage in pushing technology forward. We organise a wide range of workshops, conferences, competitions and non-technical events to facilitate the growth of participants. Visit our website, csivit.com, to see more of who we are and the work we do.',
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
                    frameBorder="0"
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

                <div className='mt-4'>View <a href='https://devfolio.co/code-of-conduct' target='_blank' rel='noreferrer noopener'>Code of Conduct</a></div>
                <div className='mt-2'><a href='/brochure' target='_blank' rel='noreferrer noopener'>Download Brochure</a></div>
            </Col>
        );
    }

    return (
        <div className='text-justify text-light mx-4 about-us mt-3'>
            {generateHeading(content.heading)}
            <p className='mt-4 main-description'>{content.description}</p>
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
                <div className="speaker-shadow  mx-auto">
                    <div className="speaker-img">
                        <img className="w-100 d-block" src={speaker.image} alt="..."></img>
                    </div>
                </div>
                <p className="font-weight-bold talk-name mt-4 mb-1">{speaker.name}</p>
                <h4 className="font-italic">{speaker.company}</h4>
                <p className="workshop-description">{speaker.description}</p>
            </div>
        )
    }
    const workshops = []
    for (const speaker of speakers) {
        workshops.push((
            <Col key={speaker.name} md={3} className="d-flex justify-content-center">
                {generateCards(speaker)}
            </Col>
        ));
    }
    return (
        <Row className="justify-content-center">
            {workshops}
        </Row>
    )
}
function generateWorkshops() {
    const speakers = [
        {
            name: 'WATSON AI1',
            company: 'by IBM',
            description: 'Learn how to use IBM Watson\'s platform',
            image: require("./assets/images/workshops/KrishnaB.png")
        },
        {
            name: 'Competitive Coding',
            company: 'by Coding Blocks',
            description: 'Learn the do\'s and dont\'s of the coding world',
            image: require("./assets/images/workshops/PrateekNarang.png")
        },
        {
            name: 'Voice UI ',
            company: 'by Amazon',
            description: 'Learn how to make Alexa sing to your tune',
            image: require("./assets/images/workshops/Sohan.png")
        }
    ]
    return (
        <div class="px-5">
            <h2 className="section-content-heading workshops-heading pl-5">Workshops at Devspace 2019</h2>
            {generateSpeakerCards(speakers)}
        </div>
    )

}

function generateTalks() {
    const speakers = [
        {
            name: 'Mohan Ram',
            company: 'Digital Ocean',
            description: 'Simplifying the Cloud a session on scaling',
            image: require("./assets/images/speakers/MohanRam.png")
        },
        {
            name: 'LAWRENCE MOHANRAJ',
            company: 'IBM',
            description: 'Embracing innovation in the digital era',
            image: require("./assets/images/speakers/LawrenceMohanraj.png")
        },
        {
            name: 'VISHWAPRASATH K.S.',
            company: 'Mozilla',
            description: 'Web AR & Mixed reality on browsers',
            image: require("./assets/images/speakers/ViswaKS.png")
        }
    ]
    return (
        <div>
            <h2 className="section-content-heading talks-heading pl-5 ml-5">Talks at Devspace 2019</h2>
            {generateSpeakerCards(speakers)}
        </div>
    )
}

function generateInThePast() {
    const sections = [
        {
            image: require("./assets/images/inthepast1.jpg"),
            text: 'Biggest gathering in VIT'
        },
        {
            image: require("./assets/images/inthepast2.jpg"),
            text: 'Speakers from renowned Companies'
        },
        {
            image: require("./assets/images/inthepast3.jpg"),
            text: 'Lots of schwags'
        },
        {
            image: require("./assets/images/inthepast4.jpg"),
            text: 'Feel the passion'
        },
        {
            image: require("./assets/images/inthepast5.jpg"),
            text: 'Biggest developers conference'
        },
        {
            image: require("./assets/images/inthepast6.jpg"),
            text: 'Awesome Talks'
        },
        {
            image: require("./assets/images/inthepast7.jpg"),
            text: 'Interact with speakers'
        },
        {
            image: require("./assets/images/inthepast8.jpg"),
            text: 'No Game, No Life'
        },
        {
            image: require("./assets/images/inthepast9.jpg"),
            text: 'Personalized guidance'
        },
    ];


    const sectionElem = [];
    for (const section of sections) {
        sectionElem.push((
            <Col key={section.text} md={6} lg={4}>
                <div className="past-card my-3">
                    <div
                        className="image-container">
                        <img src={section.image} className="w-100" alt={section.text} />
                    </div>
                    <div className="past-heading-container text-center text-uppercase bg-dark py-2">
                        <div className="past-heading">
                            {section.text}
                        </div>
                    </div>
                </div>
            </Col>
        ));
    }

    return (
        <div className="p-3">
            <p className="section-content-heading text-light font-italic">These are our past collaborators/sponeors/something cool vfbgnhjmk,l.</p>
            <Row>
                {sectionElem}
            </Row>
        </div>
    )
}

function Sidebar(open, setOpen) {
    const sidebarLinks = [{
        section: "Home",
        link: "landing"
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
            }} className="sidebar-link" to={sectionLink.link} spy={true} smooth={true} duration={400} offset={-60} activeclassname="active" key={sectionLink.section}>
                {sectionLink.section}
            </ScrollLink>
        ));
    }
    return (
        <div className={classnames("sidebar", {
            open: open
        })}>
            {sideBarLinksElems}
            <div className="social-media">
                {generateSocialMediaIcons()}
            </div>
        </div>
    )
}


function DevspaceNavbar() {
    const [opened, setOpened] = useState(false);
    const [stopped, setStopped] = useState(true);
    const [showNav, setShowNav] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollPos = -document.body.getBoundingClientRect().top;
            setShowNav(scrollPos > (window.innerHeight * 0.3));
        })
    }, []);

    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark" className={classnames('p-3', 'devspaceNav', {
                'slideIn': showNav
            })}>
                <div className="navbar-menu-icon" onClick={() => {
                    setOpened(!opened);
                    setStopped(false);
                }}>
                    <Lottie config={{
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
                <Nav className="ml-auto align-items-center">
                    <Link to="/login" className="reg-link">
                        <button className="btn-outline-primary register-button px-4 py-2 mx-auto">REGISTER</button>
                    </Link>
                    <img src={devspaceBluWht} className="ml-4 devspaceLogo" alt="Devspace Logo"></img>
                </Nav>
            </Navbar>

            {Sidebar(opened, setOpened)}
        </>
    )
}

function LandingPage() {
    const videoRef = useRef(null);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if (videoRef) {
            videoRef.current.play();
            setFadeIn(true);
        }
    }, [videoRef]);
    return (
        <div className="landing" name="landing">
            <div className={classnames('landing-content', 'd-flex', 'align-items-center', 'justify-content-center', {
                fadeIn: fadeIn
            })}>
                <div className="w-75">
                    <div className="landingLogo mb-4">
                        <img src={devspaceBluWht} className="w-100" alt="Devspace Logo"></img>
                    </div>
                    <div className="landing-events text-white font-weight-bold">
                        Hackathon | Capture the Flag | Workshops | Talks
                    </div>
                    <div className="landing-description text-white mt-4">
                        20th - 22nd March<br />
                        Vellore Institute of Technology
                    </div>
                    <Link to="/login" className="reg-link">
                        <button className="btn-outline-primary register-button font-weight-bold mt-5 px-4 py-2 mx-auto" style={{
                            fontSize: '1.2rem'
                        }}>REGISTER</button>
                    </Link>
                </div>
            </div>
            <video ref={videoRef} src={devspaceVideo} className="video" muted></video>
        </div>
    )
}

function App() {
    const [loggedIn, setloggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            setloggedIn(false);
        }
        else {
            setloggedIn(true);
        }
        // if (loggedIn) {
        //     scroller.scrollTo('register');
        // }
    }, [loggedIn])
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
                                {LandingPage()}
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
                                            In our signature 36-hour hack, participants proposed and implemented solutions using emerging technologies such as Machine Learning, Artificial Intelligence, Augmented and Virtual Reality, Blockchain and Fintech or by innovating in various fields such as Defense and Surveillance, Space and Technology, Education Tech and Entertainment Tech. Each team was given the creative freedom to implement their innovative ideas through an application or a prototype.
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
                    <Route path='/logout' component={() => {
                        localStorage.removeItem('token');
                        setloggedIn(false);
                        return <Redirect to='/' />;
                    }} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
