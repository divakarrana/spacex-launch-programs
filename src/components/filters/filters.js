import React from 'react';

import YearFilterBtn from './yearBtn/yearBtn';
import LaunchFilterBtn from './launchBtn/launchBtn';
import LandFilterBtn from './landBtn/landBtn';

const filters = (props) => {
    const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    const launchStats = ['True', 'False'];

    return (
        <div className="filters">
            <h3 className="filters__label">Filters<button onClick={props.fetchBaseUrl} className="btn--orange">Reset Filters</button></h3>
            <div className="filters__sub-label">
                <p>Launch Year</p>
            </div>
            <div className="filters__years-container">
                {years.map(year => <YearFilterBtn key={year} year={year} filterYear={props.filterYear}/>)}
            </div>

            <div className="filters__sub-label">
                <p>Successful Launch</p>
            </div>
            <div className="filters__years-container">
                {launchStats.map(status => <LaunchFilterBtn key={status} launchStatus={status} filterLaunch={props.filterLaunch}/>)}
            </div>

            <div className="filters__sub-label">
                <p>Successful Landing</p>
            </div>
            <div className="filters__years-container">
                {launchStats.map(status => <LandFilterBtn key={status} landStatus={status} filterLand={props.filterLand}/>)}
            </div>
        </div>
    );
}

export default filters;
