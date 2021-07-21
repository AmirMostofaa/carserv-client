import React, { Component } from 'react';
import heroImg from '../../../images/hero.png';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero">

                <div className="container pt-5 pb-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 pt-5 pb-5">
                            <h5 className="text-p">A GARAGE FOR ALL MODELS</h5>
                            <h1 className="text-brand">Need to Service or <br/> repair your car?</h1>
                            <p className="text-p pt-2 pb-2">Car servicing rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues</p>
                            <button className="btn btn-danger">Book Now</button>
                        </div>
                        <div className="col-md-6 pt-5 pb-5">
                            <img src={heroImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Hero;