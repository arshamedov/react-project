import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MyRoutes from './components/MyRoutes';
import {Context} from './context'
import { Concert, Movie, Theater } from './type';


const App:React.FC = ():JSX.Element => {

  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 1,
      name: 'Rush Hour',
      category: 'comedy',
      year: 2007,
      img: 'images/movies/RushHour3.jpg'
    },
    {
      id: 2,
      name: 'The Equalizer',
      category: 'action',
      year: 2014,
      img: 'images/movies/TheEqualizer.jpg'
    },
    {
      id: 3,
      name: 'Spider-Man',
      category: 'Fantazy',
      year: 2009,
      img: 'images/movies/spider-man4.png'
    },
    {
      id: 4,
      name: 'Forrest Gump',
      category: 'comedy',
      year: 1994,
      img: 'images/movies/ForrestGump.jpg'
    },
  ]);

  const [theaters,setTheaters] = useState<Theater[]>([
    {
      id: 1,
      name: 'presentation1',
      img: 'images/theaters/nkar1.webp'
    },
    {
      id: 2,
      name: 'presentation2',
      img: 'images/theaters/nkar2.jpg'
    },
    {
      id: 3,
      name: 'presentation3',
      img: 'images/theaters/nkar3.webp'
    }
  ]);

  const [concerts,setConcerts] = useState<Concert[]>([
    {
      id: 1,
      name: 'concert1',
      img: 'images/concerts/concert1.jpg'
    },
    {
      id: 2,
      name: 'concert2',
      img: 'images/concerts/concert2.jpg'
    },
    {
      id: 3,
      name: 'concert3',
      img: 'images/concerts/concert3.jpeg'
    },
  ])


  return <div>
    <Context.Provider value={{movies, theaters, concerts}}>
      <BrowserRouter>
        <Layout/>
        <MyRoutes/>
      </BrowserRouter>
    </Context.Provider>
  </div>
}

export default App;
