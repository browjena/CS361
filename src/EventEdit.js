import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const EventEdit = () => {
  const initialFormState = {
    name: '',
    address: '',
    description: '',
    date: '',
    type: ''
  };

  const [event, setEvent] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      fetch(`/api/event/${id}`)
        .then(response => response.json())
        .then(data => setEvent(data));
    }
  }, [id, setEvent]);

  const handleChange = (event) => {
    const { name, value } = event.target

    setEvent({ ...event, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`/api/event${event.id ? `/${event.id}` : ''}`, {
      method: (event.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    });
    setEvent(initialFormState);
    navigate('/events');
  }

  const title = <h2>{event.id ? 'Edit Event' : 'Add Event'}</h2>;

  return (<div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={event.name || ''}
            onChange={handleChange} autoComplete = "name"/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" value={event.address || ''} onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" name="description" id="description" value={event.description || ''} onChange={handleChange}/>
          </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input type="text" name="date" id="date" value={event.date || ''} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input type="text" name="type" id="type" value={event.type || ''} onChange={handleChange}/>
            </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/events">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
};

export default EventEdit;