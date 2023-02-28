import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
position: absolute;
min-height: 20vh;
height: auto;
display: flex;
flex-wrap: wrap;
margin-top:40px;
background: #000000;
align-content: center;
justify-content: center;
text-align: center;
width: 100%;
`
const LeftDiv = styled.div`
flex:1;
min-width: 200px;
`
const LOGO = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 150%;
text-align: center;
letter-spacing: 0.03em;
color: #FFFFFF;
padding: 10px 0px;

`
const CompanyDescription = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 150%;
letter-spacing: 0.03em;
color: #B7B7B7;
padding: 10px 0px;
`

const MiddleDiv = styled.div`
flex:1;
min-width: 200px;
`

const MiddleTitle = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 150%;
letter-spacing: 0.03em;
color: #FFFFFF;
padding: 10px 0px;
`
const MiddleList = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 150%;
letter-spacing: 0.03em;
color: #B7B7B7;
padding: 10px 0px;

`
const RightDiv = styled.div`
flex:1;
min-width: 200px;
`
const RightTitle = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 150%;
letter-spacing: 0.03em;
color: #FFFFFF;
padding: 10px 0px;

`
const RightList = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 150%;
letter-spacing: 0.03em;
color: #B7B7B7;
padding: 10px 0px;
`

const Footer = () => {
  return (
    <Container>
        <LeftDiv>
            <LOGO>LOGO</LOGO>
            <CompanyDescription>Le client est au cœur de notre modèle d'affaires unique, qui inclut le design.</CompanyDescription>
        </LeftDiv>
        <MiddleDiv>
            <MiddleTitle>Compte</MiddleTitle>

        </MiddleDiv>
        <RightDiv>
            <RightTitle>INFO</RightTitle>
            <RightList>Nous contacter</RightList>
            <RightList>A propos de nous</RightList>
        </RightDiv>
    </Container>
  )
}

export default Footer