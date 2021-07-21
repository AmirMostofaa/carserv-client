import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TeamMember from './TeamMember/TeamMember';

const Team = () => {

     const [team, setTeam] = useState([]);

    useEffect(() => {

        fetch('https://desolate-ravine-13432.herokuapp.com/team', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
        
        })
        .then(res => res.json())
        .then(data => setTeam(data))

    }, [team])

    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="team-title">
                            <h5>OUR TEAM</h5>
                            <h4 className="text-brand">Expert Team</h4>
                         </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 d-flex flex-wrap pt-3">
                         
                            {
                                team.map(tm => <TeamMember key={tm._id} tm={tm}></TeamMember>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;