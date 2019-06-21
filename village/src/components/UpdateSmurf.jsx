import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components'

const Div = Styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 0 auto:
  border: 1px solid black;
  height: auto;
  width: auto;
`
const H1 = Styled.h1`
  display: flex;
  justify-content: center;
  background: dodgerblue;
  color: white;
`
const Form = Styled.form`
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
const Input = Styled.input`
  margin: 0 .25rem;
  min-width: 125px;
  border: 1px solid #dodgerblue;
  height: 20px
  border-radius: 10px;
  /* transition: border-color .5s ease-out; */
  color: dodgerblue;
`
const Button = Styled.button`
  -moz-box-shadow: 0px 1px 0px 0px #f0f7fa;
	-webkit-box-shadow: 0px 1px 0px 0px #f0f7fa;
	box-shadow: 0px 1px 0px 0px #f0f7fa;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #33bdef), color-stop(1, #019ad2));
	background:-moz-linear-gradient(top, #33bdef 5%, #019ad2 100%);
	background:-webkit-linear-gradient(top, #33bdef 5%, #019ad2 100%);
	background:-o-linear-gradient(top, #33bdef 5%, #019ad2 100%);
	background:-ms-linear-gradient(top, #33bdef 5%, #019ad2 100%);
	background:linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0);
	background-color:#33bdef;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border:1px solid #057fd0;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
  text-shadow:0px -1px 0px #5b6178;

  &:hover{
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #019ad2), color-stop(1, #33bdef));
	background:-moz-linear-gradient(top, #019ad2 5%, #33bdef 100%);
	background:-webkit-linear-gradient(top, #019ad2 5%, #33bdef 100%);
	background:-o-linear-gradient(top, #019ad2 5%, #33bdef 100%);
	background:-ms-linear-gradient(top, #019ad2 5%, #33bdef 100%);
	background:linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#019ad2', endColorstr='#33bdef',GradientType=0);
	background-color:#019ad2;
  }
`

class UpdateSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Div>
                <H1>Update Smurf</H1>
                <Form onSubmit={this.addSmurf}>
                    <Input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        name="name"
                        type='text'
                        // value={}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        name="age"
                        type='number'
                    />
                    <Input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        name="height"
                        type='number'
                    />
                    <Button type="submit">Update this Smurf</Button>
                </Form>
            </Div>
        );
    }
}

export default UpdateSmurf;