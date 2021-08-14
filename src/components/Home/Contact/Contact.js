import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-title text-center">
                            <h5>Feel Free to Contact</h5>
                            <h4 className="text-brand ">Get in Touch</h4>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="contact pt-5 w-75">
                            <form>
                                                                
                                <div className="input-group">
                                    <input type="text" className="form-control mr-2" placeholder="Name"/>
                                    <input type="text" className="form-control mr-2" placeholder="Email" />
                                    <input type="text" className="form-control" placeholder="Number" />
                                </div>
                                <div className="form-group">
                                    
                                    <textarea type="text-are" className="form-control mt-2" id="exampleTextArea"  placeholder="Message" row="6"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;