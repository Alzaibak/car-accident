import React,{ useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios"

const Container = styled.div`
height: 100vh;
width: 100vw;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), azure;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items: center;
`
const Section = styled.div`
width: 50%;
padding: 20px;
Background:white;
border-radius: 15px;
box-shadow: 2px 2px 2px 2px black;

`
const Title = styled.h1`
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 151%;
mix-blend-mode: darken;
text-align: center;
`
const Form = styled.div`
display:flex;
flex-direction:column;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:5px;
padding:5px;
background: #FFFFFF;
border: 1px solid #BCBAAE;
border-radius: 11px;
font-family: 'Abel';
font-weight: 400;
font-size: 15px;
line-height: 28px;
color: black;

`

const Button = styled.button`
width: 40%;
padding: 7px 15px;
margin:5px;
font-size: 20px;
background: rgba(255, 171, 7, 0.78);
border: 1px solid #FFBD5B;
border-radius: 7px;
transition: all ease-in-out 0.2s;
cursor: pointer;

  &:hover{
        transform: scale(1.1);
        box-shadow: 2px 2px 2px black;
  }

`
const Link = styled.a`
margin-left:5px;
margin-top:15px;
cursor: pointer;
font-size:13px;
text-decoration:underline;
letter-spacing: 0.05em;
`
const Error = styled.span`
color:red;
`
const Login = () => {
const [email,setEmail]= useState("");
const [password,setPassword]= useState("");

  const loginController = (e)=>{
    if (email ==='' || password ==='') {
      document.getElementById("err").innerText = "veiller remplier les chambre vide";
    } else {
      document.getElementById("err").innerText = "";
   e.preventDefault();
    try {
     fetch("http://localhost:5000/api/auth/login",{
     method:"post",
     crossDomain:"true",
     headers:{
       "Content-type": "application/json",
       Accept: "application/json",
     }, body:JSON.stringify({
       email,
       password
     }),
    }).then((res)=>res.json()).then((data)=>{console.log(data)});
    } catch (error) {
      console.log(error)   }  
   };
}


  return (

    <Container>
           <Section>
            <Title>Se connecter</Title>
            <Form>
                <Input placeholder='Email' type= "email" onChange={(e) => setEmail(e.target.value)}></Input>
                <Input placeholder='Mot de passe' type="password" onChange={(e) => setPassword(e.target.value)}></Input>
                <Button onClick={loginController}>Connexion</Button>
                <Error id ="err"></Error>
            </Form>
        </Section>
    </Container>
  )
}

export default Login