import React from 'react';
import Img from 'react-cool-img';

const card = ({rocket}) => {
    let landingStatus = '';
    if(rocket.rocket.first_stage.cores[0].land_success === null){
        landingStatus = 'N/A';
    } else if(rocket.rocket.first_stage.cores[0].land_success === true){
        landingStatus = 'True';
    } else {
        landingStatus = 'False';
    }

    return (
        <div className="card col-1-of-2">
            <div className="card__image-container">
                <Img className="card__img" src={rocket.links.mission_patch_small} alt="Rocket Patch" />
            </div>
            <p className="card__rocket-name">{rocket.mission_name}&nbsp;#{rocket.flight_number}</p>
            <div className="card__label-text">Mission Ids
                <ul className="card__mission-id">
                    {rocket.mission_id.map(id => <li key={id}>{id}</li>)}
                </ul>
            </div>
            <p className="card__label-text">Launch Year:<span>{rocket.launch_year}</span></p>
            <p className="card__label-text">Successful Launch:<span>{rocket.launch_success ? 'True' : 'False'}</span></p>
            <p className="card__label-text">Successful Landing:<span>{landingStatus}</span></p>
        </div>
    );
}

export default card;
