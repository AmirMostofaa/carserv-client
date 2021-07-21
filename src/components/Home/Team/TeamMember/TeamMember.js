import React from 'react';
import './TeamMember.css';

const TeamMember = ({tm}) => {
    return (
        <div>
            <div className="team-member text-center">
                <img src={tm.img} alt="" />
                <h4 className="p-4 text-white">{tm.name}</h4>
            </div>
        </div>
    );
};

export default TeamMember;