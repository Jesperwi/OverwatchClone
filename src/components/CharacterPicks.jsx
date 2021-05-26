import React, { useState } from 'react';
import styled from 'styled-components';

const CharacterWrap = styled.div`
display:flex;
height: 1080px;
flex-direction: column;
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

const Image = styled.img`
  height: 50px;
  width: 50px;
  margin-left:0.5em;
  background: grey;
  border-radius: 0.5em;
  &:hover {
    background: orange;
  }
`

const HeroShow = styled.div`
display: flex;
height: 490px;
justify-content: center;
margin-top: 2em;
margin-bottom: 2em;
`
const HeroShowPic = styled.img`
position: relative;
    display: inline-block;
    max-width: 50%;
    width: 490px;
    margin-right: 36px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 100%;
`

const HeroWrap = styled.div`
display: inline-flex;
flex-direction: row;
justify-content: center;
height: 200px;
width: 500px;
width:fit-content;

`

const CharacterPicks = () => {

    const [Fheroes, setFheroes] = useState('');

    const Oheroes = ['ana', 'ashe','baptiste', 'bastion', 'brigitte', 'dva', 
    'doomfist', 'echo', 'genji', 'hanzo', 'junkrat', 'lucio', 'mccree', 'mei', 
    'mercy', 'moira', 'orisa', 'pharah', 'reaper', 'reinhardt', 'roadhog', 
    'sigma', 'soldier-76', 'sombra', 'symmetra', 'torbjorn', 'tracer',
    'widowmaker', 'winston', 'wrecking-ball', 'zarya', 'zenyatta'];
    
    const getIconUrl = (hero) => `https://d1u1mce87gyfbn.cloudfront.net/hero/${hero}/icon-portrait.png`;

    const heroLook = (hero) => {
        const fullImageUrl =`https://d1u1mce87gyfbn.cloudfront.net/hero/${hero}/full-portrait.png`;
        setFheroes(fullImageUrl)
    }

    console.log(Oheroes[5])

    return (
      <CharacterWrap>
        <TextWrap>
          <HeadLine>THE WORLD NEEDS HEROES</HeadLine>
          <Desc>
              Slow down time, rain destruction from above in a 
              jet-powered armor suit, or pilot a superpowered hamster ball: 
              In Overwatch, every hero has a unique set of devastating abilities.
          </Desc>
        </TextWrap>
        <HeroShow>
          <HeroShowPic src={Fheroes}></HeroShowPic>
        </HeroShow>
        <HeroWrap>
            {Oheroes.map((hero, index) => (
            <div key={index}>
              <Image onMouseEnter={() => heroLook(hero)} src={getIconUrl(hero)}></Image>
            </div>
            ))}
        </HeroWrap>
      </CharacterWrap>
    )
}

export default CharacterPicks;