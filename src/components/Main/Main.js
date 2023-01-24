import React, { useEffect, useState } from 'react';
import Buyinfo from '../Buyinfo/Buyinfo';
import Player from '../Player/Player';
import './Main.css';

const Main = () => {

    // use useState for showing data
    const [players, setPlayers] = useState([]);
    // for buy ifo section data
    const [buy, setBuy] = useState([]);
    // searched Player
    const [searchPlayer, setSearchPlayer] = useState([]);

    // load data
    useEffect(() => {
        fetch("./fakedata.JSON")
            .then(res => res.json())
            .then(data => {
                setPlayers(data)
                // for avoiding blank page, after one succesful searched
                setSearchPlayer(data);
            });
    }, [])


    // button's value passing by handler
    // passing single player as an argument for tracking exact button's info
    const handleButton = (player) => {
        // copying data to a new array because by ook we can not pop or pus data
        const newBuy = [...buy, player];
        setBuy(newBuy);
    }

    // for search
    const handleSearch = event => {
        // catch text
        const searchedFor = event.target.value;
        // match text
        const matchingCheck = players.filter(player => player.name.toLowerCase().includes(searchedFor.toLowerCase()));
        setSearchPlayer(matchingCheck);
    }

    return (
        <div>
            <div>
                <input onChange={handleSearch} type="text" placeholder="Search Here" className="search-class"/>
            </div>
            <div className="main-container">
                <div className="players-container">

                    <h4>{players.length} Legends</h4>
                    
                    {
                        // using map for showing all data's
                        // using player component here 
                        searchPlayer.map(player => <Player
                            // using key as an uniqe key for each & every single player for solving the console browser error 
                            key={player.id}
                            // passing player as props.
                            player={player}
                            // passing onclick handler function
                            handleButton={handleButton}>
                            </Player>)
                    }

                </div>
                <div className="cost-value-container">
                    {/* buy state is a passing as a props to Buyinfo component */}
                    <Buyinfo buy={buy}></Buyinfo>
                </div>
            </div>
        </div>
    );
};

export default Main;