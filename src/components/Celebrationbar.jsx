import React from 'react';
import styled from 'styled-components'

const CelebrationWrapper = styled.div`
display:flex;
background: lightgrey;
height: 560px;
justify-content: flex-end;
border-top: #CACED7 0.5px solid;
background-image:url('https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt19d55300318c72fc/60230900c6713d4e7a4d4497/BC21-HomepageBanner-Desktop.jpg?auto=webp');
background-size: 130% 100%;
background-repeat: no-repeat;
background-position: -290px 0px;
`
const CeleTextWrap = styled.div`
diplay:flex;
width: 50%;
`

const CeleHead = styled.h1`
font-size: 45px;
text-transform:uppercase;
font-style: italic;
margin-top: 2em;
line-height: 18px;
color: #4B535D;
`

const CeleDesc = styled.p`
width: 57%;
font-size: 18px;
line-height: 26px;
margin-bottom: -0.7em
`

const CeleSmallDesc = styled.p`
line-height: 24px;
width: 51%;
font-style: italic;
`

const CeleButton = styled.div`
margin-top: 1.5em;
width: 200px;
height: 45px;
background: #EF722B;
border-radius: 2px;
color: white;
text-transform: uppercase;
font-weight: bold;
font-size: 20px;
text-align: center;
vertical-align: middle;
line-height: 45px;
`
const CeleOrange = styled.span`
color: #EF722B;
`

const CelebrationBar = () => {

    return(
        <CelebrationWrapper>
            <CeleTextWrap>
            <CeleHead>The Celebration collection</CeleHead>
            <CeleDesc>
            Celebrate Blizzard’s 30th year creating worlds, exploring new universes, 
            and sharing countless epic gaming experiences together with the <CeleOrange>BlizzConline™ 
            Celebration Collection!</CeleOrange> Channel the anniversary spirit as you charge into battle
             rocking new cosmetics like Raynhardt (legendary) and an exclusive new player icon and 
             spray, 
            and grab some Golden Loot Boxes to round out your Overwatch collection.*
            </CeleDesc>
            <CeleSmallDesc>
            *Unlock these items on console with The Blizzard® 30-Year Celebration Collection bundle,
            available now on supporting platform stores. <CeleOrange>Click here</CeleOrange> to learn more.
            </CeleSmallDesc>
            <CeleButton>Learn More</CeleButton>
            </CeleTextWrap>
        </CelebrationWrapper>
    )
}

export default CelebrationBar;