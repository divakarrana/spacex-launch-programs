import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import axios from 'axios';

import Head from './Head';
import { api } from '../api';
import { useServerData } from '../state/serverDataContext';

const LoadableHeader = Loadable({
  loader: () => import('./header/header'),
  loading: () => <div>Loading...</div>
});

const LoadableFilter = Loadable({
  loader: () => import('./filters/filters'),
  loading: () => <div>Loading...</div>
});

const LoadableRockets = Loadable({
  loader: () => import('./rocketCards/rocketCards'),
  loading: () => <div>Fueling Up Rockets!</div>
});

const LoadableFooter = Loadable({
  loader: () => import('./footer/footer'),
  loading: () => <div>Loading...</div>
});

const App = () => {

  const serverRockets = useServerData(data => {
    return data.todos || [];
  });

  const [rockets, setRockets] = useState(serverRockets);
  const [filters, setFilters] = useState({year: '', launch:'', land:''});
  let baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

  
  useEffect(() => {
    if(localStorage.getItem('rocketFilters')){
      const storageFilters = JSON.parse(localStorage.getItem('rocketFilters'));
      setFilters(storageFilters);
      if(storageFilters.year || storageFilters.land || storageFilters.launch){
        filterYearHandler(storageFilters.year);
      }
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const fetchBaseUrl = () => {
    if(filters.year || filters.launch || filters.land){
      setFilters({year: '', launch:'', land:''});
      axios.get(baseUrl)
      .then(function (response) {
        setRockets(response.data);
        localStorage.setItem('rocketFilters', JSON.stringify({year: '', launch:'', land:''}));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  const filterYearHandler = (year) => {
    setRockets([]);
    setFilters((prevFilter) => {
      prevFilter.year = year;
      return prevFilter;
    });

    const url = checkPreFilters('Year', year);
    axios.get(url)
      .then(function (response) {
        if(response.data.length){
          setRockets(response.data);
        } else {
          setRockets('No Data');
        }
        localStorage.setItem('rocketFilters', JSON.stringify(filters));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const filterLaunchHandler = (launchStatus) => {
    setRockets([]);
    let apiFilter = '';
    launchStatus=== 'True' ? apiFilter='true' : apiFilter='false';
    setFilters((prevFilter) => {
      prevFilter.launch = apiFilter;
      return prevFilter;
    });

    const url = checkPreFilters('Launch', apiFilter);
    axios.get(url)
      .then(function (response) {
        if(response.data.length){
          setRockets(response.data);
        } else {
          setRockets('No Data');
        }
        localStorage.setItem('rocketFilters', JSON.stringify(filters));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const filterLandHandler = (landStatus) => {
    setRockets([]);
    let apiFilter = '';
    landStatus=== 'True' ? apiFilter='true' : apiFilter='false';
    setFilters((prevFilter) => {
      prevFilter.land = apiFilter;
      return prevFilter;
    });

    const url = checkPreFilters('Land', apiFilter);
    axios.get(url)
      .then(function (response) {
        if(response.data.length){
          setRockets(response.data);
        } else {
          setRockets('No Data');
        }
        localStorage.setItem('rocketFilters', JSON.stringify(filters));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const checkPreFilters = (filterType, value) => {
    let updatedUrl = baseUrl;
    if(filterType === 'Year' && value){
      updatedUrl = updatedUrl + `&launch_year=${value}`;

      if(filters.launch){
        updatedUrl = updatedUrl + `&launch_success=${filters.launch}`;
      }
      if(filters.land){
        updatedUrl = updatedUrl + `&land_success=${filters.land}`;
      }
    }

    if(filterType === 'Launch'){
      updatedUrl = updatedUrl + `&launch_success=${value}`;

      if(filters.year){
        updatedUrl = updatedUrl + `&launch_year=${filters.year}`;
      }

      if(filters.land){
        updatedUrl = updatedUrl + `&land_success=${filters.land}`;
      }
    }
    
    if(filterType === 'Land'){
      updatedUrl = updatedUrl + `&land_success=${value}`;

      if(filters.year){
        updatedUrl = updatedUrl + `&launch_year=${filters.year}`;
      }
      if(filters.launch){
        updatedUrl = updatedUrl + `&launch_success=${filters.launch}`;
      }
    }
    return updatedUrl;
  }

  return (
    <div className="app">
      <Head />
      <Route path="/" component={LoadableHeader} />
      <main className="main">
          <Route path="/"><LoadableFilter fetchBaseUrl={fetchBaseUrl} filterYear={filterYearHandler} filterLaunch={filterLaunchHandler} filterLand={filterLandHandler}/></Route>
          <Route path="/"><LoadableRockets rockets={rockets}/></Route>
      </main>
      <Route path="/" component={LoadableFooter} />
    </div>
  );
}

App.fetchData = () => {
  return api.todos.all().then(todos => {
    return {
      todos
    };
  });
};

export default App;
