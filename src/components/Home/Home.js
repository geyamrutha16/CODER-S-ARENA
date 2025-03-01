import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Instructors from './Instructors';
import Nav from './Nav';
import '../../App.css'
import image from './dm.svg';
import Footer from './Footer';

const Home = () => {
    const missionRef = useRef(null);
    return (
        <>
            <Nav missionRef={missionRef} />
            <div>
                <div className="box blink-in" id='home'>
                    <div className="homebox">
                        <div className="container">
                            <h1 className="display-6" style={{ fontWeight: 'bold', marginLeft: "8%" }}>Inspire. Innovate. Code.</h1>
                            <div className="typewriter" style={{ marginTop: '40px', marginLeft: "8%" }}>
                                <h2 className="display-6">
                                    <Typewriter
                                        words={[
                                            "Learn to Code",
                                            "Build Amazing Projects",
                                            "Join Community of Innovators",
                                            "Advance Your Skills",
                                            "Future of Technology"
                                        ]}
                                        loop={true}
                                        cursor
                                        cursorStyle="."
                                        typeSpeed={100}
                                        deleteSpeed={60}
                                        delaySpeed={1000}
                                    />
                                </h2>
                            </div>
                            <button type="button" id="button" className="btn btn-outline-primary" style={{ marginTop: '50px', marginLeft: "8%" }}>Join Now</button>
                        </div>
                        <div className="container" id="image">
                            <img src={image} style={{ marginTop: "5%" }} alt='background' />
                        </div>
                    </div>
                </div>
                <h1 className="display-5" style={{ fontWeight: 'bold', textAlign: "center", marginTop: "80px" }}>Our Mission</h1>
                <div className="aboutbox" id="mission" ref={missionRef}>
                    <div className="aboutdes">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="card">
                                <div className="cover item-a">
                                    <h1 className='cardh1'>Coder's Arena</h1>
                                    <span className="price">@2024</span>
                                    <div className="card-back">
                                        <a href="/">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card1">
                            <p classname="aboutp">Welcome to <strong>Coder's Arena!</strong> Our mission is to inspire the next
                                generation of tech innovators by providing a platform for students to explore
                                the world of programming. We offer hands-on learning experiences.
                                our club is here
                                to help you turn your ideas into reality. Let's code the future together!"</p>
                            <p className="card1-footer" style={{ color: "royalblue" }}>
                                <Typewriter
                                    words={[
                                        "Coder's Club 2024"
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="."
                                    typeSpeed={100}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <Instructors />
                <Footer />
            </div>
        </>
    );
}

export default Home;

