import React, { Component } from 'react';
import Styled from 'styled-components';
import Smurf from './Smurf';

const Div = Styled.div`
  display: flex;
  border: solid black;
  flex-wrap: wrap;
  background: dodgerblue;
  color: white;
  justify-content: center;
`
const H1 = Styled.h1`
  display: flex;
  margin: 10px 0 0 0  auto;
  padding 10px;
  justify-content: center;
  border: solid black;
  border-radius: 50%;
  width: 600px
  height: auto;
  background: white;
  color: dodgerblue;
`
const Ul = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  padding: 10px;
`

class Smurfs extends Component {
  render() {
    return (
      <Div>
        <H1>Smurf Village</H1>
        <Ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </Ul>
      </Div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
