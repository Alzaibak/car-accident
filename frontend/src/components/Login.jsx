
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
height: 100%;
background: #212529;
margin: none;
padding:non;
display:flex;
flex-wrap: wrap;
color: #FFFFFF;
text-align: center;
margin-bottom: 10px;


`
const LeftInfo = styled.div`
margin :5px 13px;
font-size: 14px;
justify-content: center;
`
const RightDiv = styled.div`
width:100%;
min-width: 190px;
display:flex;
flex:1;
justify-content: flex-end;


`
const RightInfo = styled.div`
cursor: pointer;
margin :3px 13px;
font-weight:bold;
justify-content: center;
`

//Login bar code
const Login = () => {

  return (
    <Container>
        <RightDiv>
            <Link to= {`/login`} style={{color:"inherit", textDecoration:"none"}}>
               <RightInfo>Connexion</RightInfo>
            </Link>
        </RightDiv>
        
    </Container>

  )
}

export default Login;
