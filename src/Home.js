import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';


const Home = () => {
  return (
 <div>
      <AppNavbar/>
      <Container fluid>
       <h1 >Events Atlanta</h1>
       <h3>Welcome to Events Atlanta!
        <div>
        </div>
        Click on View All Events to view all the events in your area
         <div></div>or click Add Event to Add an Event</h3>
      </Container>
    </div>
     );
    }
export default Home;