import React from 'react';
import styled from 'styled-components';

const CharacterWrap = styled.div`
display:flex;
height: 1080px;

justify-content: center;
background-repeat: no-repeat;
background-position: -340px 0px;
background-image: url(https://static.playoverwatch.com/img/scene/candy-5d74c9b93f.jpg)
`
const TextWrap = styled.div`
display: flex;
flex-direction: column;
margin-top: 3em;
text-align: center;
line-height:40px;
`
const HeadLine = styled.h1`
font-size:50px;
font-style: italic;
margin-bottom: 0em;
color: #4B535D;
`

const Desc = styled.p`
font-size: 20px;
padding: 0 20em;
line-height: 28px;
`

const CharacterPicks = () => {

    return (
        <CharacterWrap>
            <TextWrap>
            <HeadLine>THE WORLD NEEDS HEROES</HeadLine>
            <Desc>Slow down time, rain destruction from above in a 
                jet-powered armor suit, or pilot a superpowered hamster ball: 
                In Overwatch, every hero has a unique set of devastating abilities.</Desc>
             
            </TextWrap>
           
        </CharacterWrap>
    )
}

export default CharacterPicks;