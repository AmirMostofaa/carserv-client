import React from 'react';
import './Choose.css';
import chooseImg from '../../../images/why-choose-us/choose.png';
import ChooseIcon1 from '../../../images/why-choose-us/icon-1.svg';
import ChooseIcon2 from '../../../images/why-choose-us/icon-2.svg';
import ChooseIcon3 from '../../../images/why-choose-us/icon-3.svg';
import ChooseIcon4 from '../../../images/why-choose-us/icon-4.svg';
import ChooseItem from './ChooseItem/ChooseItem';

const Choose = () => {

    const chooses = [
        {
            title: 'Latest Equipment',
            description: 'Car servicing rationally encounter extremely anyone chooses',
            img: ChooseIcon1
        },
        {
            title: 'Expert Mecanics',
            description: 'Car servicing rationally encounter extremely anyone chooses',
            img: ChooseIcon3
        },
        {
            title: 'Quality Services',
            description: 'Car servicing rationally encounter extremely anyone chooses',
            img: ChooseIcon2
        },
        {
            title: 'Fast Delivery',
            description: 'Car servicing rationally encounter extremely anyone chooses',
            img: ChooseIcon4
        }
    ]


    return (
        <div id="choose">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4 pr-5">
                        <h5>
                            Welcome to <b className="text-danger">CARSERV</b>
                        </h5>
                        <h4 className="text-brand pt-3">Trust and Service is our Priority</h4>
                        <p className="text-p pt-2 pb-2">Trusted and reliable service is our main goal extremely painful. Nor again is there anyone who loves our to take a trivial example, which of us undertakes chooses</p>
                        <img src={chooseImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8 pt-5 mt-5 d-flex flex-wrap">
                        
                            {
                                chooses.map(choose => <ChooseItem choose={choose}></ChooseItem>)
                            }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;