import React from 'react';
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

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

const Smurf = props => {
  return (
    <Div>
      <Link to='/'><h3>{props.name}</h3></Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </Div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

