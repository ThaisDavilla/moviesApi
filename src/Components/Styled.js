import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
margin:0;
padding:0;
box-sizing: border-box;
background: azure;
`

export const BoxHeader = styled.div`
text-align: center;
background: azure;
display:flex;
flex-direction: column;
`

export const Navegar = styled.nav`
border: ;
display: flex;
flex-direction: row;

` 
export const Menu = styled(Link)`
text-decoration: none;
`



export const Titulo = styled.h1`
color: red;
font-size: 50px;
`


export const BoxHome = styled.div`
width: 100vw;
height:60vh;
background: azure;
display: flex;


`
export const TituloTwo = styled.h2`
font-size: 25px;
color: green;

`
