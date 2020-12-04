import React from 'react';

const launchBtn = (props) => {

    const filterLaunchStatus = () => {
        props.filterLaunch(props.launchStatus);
    }

    return (
        <button className="btn col-1-of-2-btn" onClick={filterLaunchStatus}>{props.launchStatus}</button>
    );
}

export default launchBtn;
