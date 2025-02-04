import React from 'react'
import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import UpdateSmurf from './UpdateSmurf'

const Div = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    padding: 20px;
    width: 300px;
    height: 300px;
    text-align: center;
    border: solid black;
    border-radius: 50%;
    background: dodgerblue;
    color: white;
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
    width: 100px;


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
const SingleSmurf = props => {
    return (
        <Div>
            <h3>{props.smurf.name}</h3>
            <strong>{props.smurf.height}cm tall</strong>
            <p>{props.smurf.age} smurf years old</p>
            <NavLink to='/updatesmurf'><Button onClick={() => props.updateSmurf(props.smurf.id)}>Update</Button></NavLink>
        </Div>
        
    )
}

export default SingleSmurf