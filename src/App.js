import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './EventList';
import MusicEventList from './MusicEventList';
import EventEdit from './EventEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/events' exact={true} element={<EventList/>}/>
         <Route path='/events/music' exact={true} element={<MusicEventList/>}/>
         <Route path='/events/:id' element={<EventEdit/>}/>
      </Routes>
    </Router>
  )
}

export default App;
