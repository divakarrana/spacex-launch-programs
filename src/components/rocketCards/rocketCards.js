import React from 'react';

import Card from './card/card';

const rocketCards = (props) => {
    let rocketRender = (<h1 className="header">Fueling Up The Data!</h1>);

    if(props.rockets === 'No Data'){
        rocketRender = (<h1 className="header">No Rockets match this criteia! Try something different?</h1>);
    } else if(props.rockets.length){
        rocketRender = props.rockets.map(rocket => <Card key={rocket.flight_number} rocket={rocket}/>)
    }

    return (
        <div className="card-container">
            {rocketRender}
        </div>
    );
}

export default rocketCards;
