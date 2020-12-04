import React from 'react';

const yearBtn = (props) => {
    const filterYearLaunch = () => {
        props.filterYear(props.year);
    }

    return (
            <button className="btn col-1-of-2-btn" onClick={filterYearLaunch}>{props.year}</button>
        
    );
}

export default yearBtn;
