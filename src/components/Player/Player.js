import React from 'react';
import './PLayer.css';

const Player = (props) => {
    
    const {name, position, number, country, value} = props.player;

    return (
        <div>
            <h2>Name : {name}</h2>
            <h6>Position : {position}</h6>
            <h6>Number : {number}</h6>
            <h6>Country : {country}</h6>
            <h6>Value : {value}</h6>
            <button onClick={() => props.handleButton(props.player)} className="btn-class">Buy him</button>
        </div>
    );
};

export default Player;