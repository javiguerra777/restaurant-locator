import React from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { phoneStyle } from '../services/Functions';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px black solid;
  border-radius: .5em;
  cursor: pointer;
  .card:hover {
    background-color: purple;
  }
`

const Brewery = ({brewery: {id, name, street, city, state, phone, brewery_type}}) => {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      <div key={nanoid()} className="card" onClick={()=> navigate(`/brewery/${id}`)}>
        <p>{name}</p>
        <p>{street} {city}, {state}</p>
        <p>{phoneStyle(phone)}</p>
        <p>{brewery_type}</p>
      </div>
    </CardWrapper>
  );
};

export default Brewery;