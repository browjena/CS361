import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const MusicEventList = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/events/music')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
  }, []);

  /*const remove = async (id) => {
    await fetch(`/api/event/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedEvents = [...events].filter(i => i.id !== id);
      setEvents(updatedEvents);
    });
  }
*/
  if (loading) {
    return <p>Loading...</p>;
  }
    const eventList = events.map(event => {
    const address = `${event.address }`;
    const description = `${event.description}`;
    return <tr key={event.id}>
      <td style={{whiteSpace: 'nowrap'}}>{event.name}</td>
      <td>{address}</td>
      <td>{description}</td>
       <td>{event.type}</td>
            <td>{event.date}</td>
            <td>
              <ButtonGroup>
                <Button size="sm" color="primary" tag={Link} to={"/events/" + event.id}>Edit</Button>

              </ButtonGroup>
        </td>
      </tr>
  });

  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <h3> Music Events</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Name</th>
            <th width="20%">Address</th>
            <th>Description</th>
            <th width="10%">Type</th>
            <th width="10%">Date</th>
          </tr>
          </thead>
          <tbody>
          {eventList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MusicEventList;