import { Router } from 'express';
import axios from 'axios';

export const todoRoutes = () => {
  const todoRoutes = new Router();
  let todos = [];

  todoRoutes.get('/api/allRockets', (_req, res) => {
    axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
      .then(function (response) {
        console.log('Fetched Rockets');
        todos = response.data;
        res.json(todos);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return todoRoutes;
};
