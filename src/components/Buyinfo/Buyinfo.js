import React from 'react';
import './Buyinfo.css';

const Buyinfo = (props) => {
// destructring buy from props for calculating total using for loop
    const {buy} = props;

    let total= 0;
    
    // calculating total
    for(const player of buy) {
        total = total + player.value; 
    }

    return (
        <div>
            <h2>Player's Cost</h2>
            <h4>Picked Players: {props.buy.length}</h4>
            <h6>Market Value : {total} Millions Dollar</h6>
        </div>
    );
};

export default Buyinfo;