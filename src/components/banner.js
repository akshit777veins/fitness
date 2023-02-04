import React from "react";
import styled from "styled-components";
import bg from "../assests/img.1"
import WithBaRTitle from "./reuseable/withbartitle";
import { FiPlay } from "react-icons/fi";

export default function Banner() {
    return (
        <Container>
            <RightBox>
                <WithBaRTitle title="With Akshit Chouhan" />
                <h1> Build Perfect Body shape for good and healthy life </h1>
                <button>Became a Member</button>
            </RightBox>
            <LeftBox>
                <CircleButton>
                    <FiPlay />gfgdcvbb
                </CircleButton>
            </LeftBox>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${bg});
background-position: fixed;
background-repeat: no-repeat;
background-size: cover;

display:flex;
flex-direction:row;
align-item:center;
justify-content: center;
`;

const LeftBox = styled.div`
width:50%;
`;

const RightBox = styled.div`
width:50%;
padding:0px 50px;
`;
const CircleButton = Button`
outline:none;
background-color:red;
color:white;
width:100px;
height:100px;
border-radius:50%;
`;


