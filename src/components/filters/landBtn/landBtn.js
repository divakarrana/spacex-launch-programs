import React from 'react';

const landBtn = (props) => {
    
    const filterLandStatus = () => {
        props.filterLand(props.landStatus);
    }

    return (
        <button className="btn col-1-of-2-btn" onClick={filterLandStatus}>{props.landStatus}</button>
    );
}

export default landBtn;
