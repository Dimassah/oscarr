import React from 'react';
import { ActorsList } from '../data/actors';

const Actors = (props) => {

    let actors = ActorsList.map((person) => {
        return (
            <div className="actor-container">
                <a href="https://githowto.com/ru/checking_status">
                    <div className="actor-image" style={{backgroundImage: "url(" + person.img_src + ")"}}></div>
                </a>
                    <h3>{person.name}</h3>
            </div>
        )
    });
    return (
        <div className="main-content">
            <div className="container">
            {actors}
            </div>   
        </div>
    );
};

export default Actors;