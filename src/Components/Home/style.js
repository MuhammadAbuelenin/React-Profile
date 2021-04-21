import styled from 'styled-components'

export const HomeImage = styled.div`
    height: 500px;
    background: url('/img/home-bg.jpg'); 
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
` 

export const HomeInfo = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: transparent;
`

export const HomeTitle = styled.h2`
font-size: 60px;
font-weight: bold;
color: #000;
background-color: transparent;
`

export const HomeInfo2 = styled.h4`
font-size: 35px;
color: #fac90a;
margin-bottom: 20px;
background-color: transparent;
text-shadow: 1px 3px #888;
`

export const HomeDesc = styled.p`
font-size: 20px;
line-height: 1.5;
color: #333;
margin-bottom: 20px;
background-color: transparent;
`


export const HomeYalla = styled.span`
color: #000;
background-color: transparent;
`

export const HomeBtn = styled.button`
background: #fac90a;
color: #000;
font-size: 18px;
width: 150px;
border: 0;
padding: 10px 25px;
cursor: pointer;
font-weight: bold;
outline:none;
border-radius: 5px;


&:hover {
    background: #000;
    color: #fac90a
}
`

