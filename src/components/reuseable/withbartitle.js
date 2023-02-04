import React from 'react'
import styled from 'styled-components';

export default function WithBaRTitle({ title }) {
  return(
    <box>
        <line/>
        <Title>{title}</Title>
    </box>
  );
  

}

const box =styled.div`
display:flex;
display-direction: row;
align-item:center;
`;

const line = styled.div`
width:65px;
height:2px:
background-color:red;
margin-right:30px;
`;


const Title = styled.title`
 color: red;
 text transform: uppercase;
`;
