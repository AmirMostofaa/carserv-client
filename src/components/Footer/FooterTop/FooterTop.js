import React from 'react';
import './FooterTop.css';

const FooterTop = () => {
    return (
        <div className="footerTop">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <p>© {(new Date().getFullYear())} Carserv Made with ❤️ by Amir</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FooterTop;