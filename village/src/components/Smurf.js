import React from 'react';
import { Link, Route } from 'react-router-dom';
import Styled from 'styled-components';
import SingleSmurf from './SingleSmurf';


const Div = Styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  padding: 20px;
  color: dodgerblue;
  text-align: center;
  margin: 10px;
  border: 1px solid black;
`
const Button = Styled.button`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  background: dodgerblue;
  color: white;
  margin: 0 auto;
`

const Smurf = props => {
  
  return (
    <Div>
      
      <Link to={`/singlesmurf/${props.id}`}><h3>{props.name}</h3></Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Button onClick={() => props.deleteSmurf(props.id)}>X</Button>
    </Div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

