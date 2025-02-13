import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./styleb.css";
import studentimage from "./img/student.png"

const LandingPage = () => {
    const history = useHistory();

    const handleGetStarted = () => {
        history.push('/products');
    };

    return (
        <div>
            <header className="hero">
                <div className="container-fluid first-page">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                                    <div className="col-lg-1">
                                        <div className="small-screen-toogler-container">
                                            <a className="navbar-brandgo-text navbar-logo-text mr-auto" href="#">Besnik</a>
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-11 pl-xl-5 ml-lg-4">
                                        <div className="collapse navbar-collapse pl-xl-5 float-right" id="navbarSupportedContent">
                                            <ul className="navbar-nav float-right ml-xl-4 justify-content-md-between">
                                                <li className="nav-item">
                                                    <a className="nav-link d-flex justify-content-md-end" href="#">Home <span className="sr-only">(current)</span></a>
                                                </li>
                                                <li className="nav-item d-flex justify-content-md-end">
                                                    <a className="nav-link" href="#">Features</a>
                                                </li>
                                                <li className="nav-item d-flex justify-content-md-end">
                                                    <a className="nav-link" href="#">Pricing</a>
                                                </li>
                                                <li className="nav-item d-flex justify-content-md-end">
                                                    <a className="nav-link" href="#">About</a>
                                                </li>
                                                <li className="nav-item d-flex justify-content-md-end">
                                                    <a className="nav-link" href="#">Contact</a>
                                                </li>
                                                <li className="nav-item d-flex justify-content-md-end">
                                                    <a className="nav-link" href="#">Log in</a>
                                                </li>
                                                <li className="nav-item d-flex justify-content-md-end">
                                                    <Button className="btn navbar-button" type="submit">Sign up</Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="hero">
                <div className="container-fluid">
                    <div className="first-page padding-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col pb-2">
                                            <p>😎 Book your course</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col pb-3">
                                            <p className="main-heading font-weight-bold">
                                                A Great place <br /> for learning.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="tiny-text pb-3">
                                                <p>A best and cheapest way of getting know learning to make a better tomorrow</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col get-started-button pb-2">
                                            <Button onClick={handleGetStarted}>Get started</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="row card-container">
                                        <div className="col card">
                                            <div className="row my-2">
                                                <div className="col-4">
                                                    <div className="card-circle">
                                                        <div className="bread-icon"></div>
                                                    </div>
                                                </div>
                                                <div className="col card-text-container my-1">
                                                    <strong>5000+</strong>
                                                    <br />
                                                    <div className="tiny-text">
                                                        <p>suitable course</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="rounded-circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row student-image">
                                        <img src={studentimage} alt="Student" />
                                    </div>
                                    <div className="row square-card-container">
                                        <div className="col my-1 px-0">
                                            <div className="square-card-text-container pt-3">
                                                <strong className="font-weight-bold display-4">20K</strong>
                                                <br />
                                                <div className="card-text">
                                                    <p>Active student</p>
                                                    <div>
                                                        <strong>🧑🏻‍🏫👨🏻‍🏫👩🏻‍🎓</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;