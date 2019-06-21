import React, { Component } from 'react';
import axios from 'axios'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';
import Styled from 'styled-components'
import SingleSmurf from './components/SingleSmurf'

const Div = Styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
 flex-wrap: wrap;
 max-width: 800px;
 width: 800px;
 height: auto;
`

const Nav = Styled.nav`
  display: flex;
  height: auto;
  width: auto;
  border: solid black;
  padding: 10px;
  justify-content: center;
  background: dodgerblue;
  a{
    text-decoration: none;
    margin: 10px;
    padding: 10px;
    background: white;
    border-radius: 50%;
  }
`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      updateSmurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  componentDidMount() {
    this.getSmurfs()
  }
  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => console.log(err.msg))
  }
  deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log(err.msg))
    
  }
  updateSmurf = (id) => {
    console.log(id)
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Div>
        <Nav>
          <NavLink to='/'>Smurfs</NavLink>
          <NavLink to='/smurf-form'>Add Smurf</NavLink>
        </Nav>
        <Div>
        {
            this.state.smurfs.map(smurf => <Route exact path={`/singlesmurf/${smurf.id}`} render={(props) => <SingleSmurf {...props} smurf={smurf} key={smurf.id} updateSmurf={this.updateSmurf} />} />)
        }
        </Div>
        <Route path='/smurf-form' component={SmurfForm} />
        <Route exact path='/' render={(props) => <Smurfs smurfs={this.state.smurfs} {...props} deleteSmurf={this.deleteSmurf} getProps={this.getProps} />}  />
      </Div>
    );
  }
}

export default App;
